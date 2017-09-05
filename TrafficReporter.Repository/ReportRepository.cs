using TrafficReporter.DAL;
using TrafficReporter.Model;
using TrafficReporter.Model.Common;
using TrafficReporter.Repository.Common;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Npgsql;
using TrafficReporter.Common;
using TrafficReporter.Common.Enums;
using TrafficReporter.Common.Filter;
using TrafficReporter.DAL.Entity_Models;

namespace TrafficReporter.Repository
{
    /// <summary>
    /// This class contains implemented methods for accesing database and
    /// querying trough it.
    /// </summary>
    public class ReportRepository : IReportRepository
    {
        private readonly string _connectionString;

        #region Constructors


        /// <summary>
        /// Connection string is now injected trough ninject module.
        /// <see cref="DIModule"/>
        /// </summary>
        /// <param name="connectionString">To be injected</param>
        public ReportRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        #endregion Constructors

        #region Methods

        /// <summary>
        /// Adds the report to database.
        /// </summary>
        /// <param name="report">The report to be added to database.</param>
        /// <returns>
        /// Number of rows affected by removing(should be 1).
        /// </returns>
        public async Task<int> AddReportAsync(IReport report)
        {
            var rowsAffrected = 0;


            using (var connection = new NpgsqlConnection(_connectionString))
            {
                await connection.OpenAsync();

                

                #region AddReport

                using (var command = new NpgsqlCommand())
                {
                    command.Connection = connection;
                    command.CommandText =
                        "INSERT INTO trafreport (id, cause, direction, longitude, lattitude, date_created, time_remaining)" +
                        "VALUES (@id, @cause, @direction, @longitude, @lattitude, @date_created, (select time_remaining from cause_table where id=@cause))";
                    command.Parameters.AddWithValue("id", report.Id);
                    command.Parameters.AddWithValue("cause", report.Cause);
                    command.Parameters.AddWithValue("direction", (int) report.Direction);
                    command.Parameters.AddWithValue("longitude", report.Longitude);
                    command.Parameters.AddWithValue("lattitude", report.Lattitude);
                    //todo do not use datetime.now here, get time from frontend
                    command.Parameters.AddWithValue("date_created", report.DateCreated);
                    rowsAffrected = await command.ExecuteNonQueryAsync();
                }
                await UpdateTimeAndRatingAsync(report.Id, report.Cause);

                #endregion AddReport

                connection.Close();
            }

            return (int) Inserted.Added;
        }

        public async Task<int> UpdateTimeAndRatingAsync(Guid reportInRangeId, int cause)
        {
            int rowsAffected = 0;

            using (var connection = new NpgsqlConnection(_connectionString))
            {
                await connection.OpenAsync();

                using (var command = new NpgsqlCommand(
                        $"UPDATE trafreport SET date_created = NOW(), rating = rating + 1 " +
                        $"WHERE id = '{reportInRangeId}'", connection))
                {
                    rowsAffected = await command.ExecuteNonQueryAsync();
                }
                
                connection.Close(); 
            }

            return rowsAffected;
        }
        
        public async Task<Guid> CheckIfOtherReportInRangeAsync(IReport report)
        {
            Guid returnValue = Guid.Empty;

            using (var connection = new NpgsqlConnection(_connectionString))
            {
                await connection.OpenAsync();

                using (var command =
                        new NpgsqlCommand(
                            $"SELECT id FROM trafreport\r\n" +
                            $" WHERE cause = {report.Cause}" +
                            $" AND calculate_distance({report.Longitude.ToString().Replace(',','.')}, {report.Lattitude.ToString().Replace(',', '.')}, longitude, lattitude)  < (SELECT cause_range FROM cause_table WHERE id = {report.Cause})",
                            connection))
                {
                    using (var reader = await command.ExecuteReaderAsync())
                    {
                        if (reader.HasRows)
                        {
                            while (reader.Read())
                            {
                                returnValue = reader.GetDataSafely<Guid>("id");
                            }
                        }

                        reader.Close();
                    }
                } 
            }

            return returnValue;
        }

        public async Task<IReport> GetReportAsync(Guid id)
        {
            IReport report = null;


            using (var connection = new NpgsqlConnection(_connectionString))
            {
                await connection.OpenAsync();

                using (var command = new NpgsqlCommand($"SELECT * FROM trafreport WHERE id = '{id}'", connection))
                using (var reader = await command.ExecuteReaderAsync())
                {
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {

                                report = new Report();
                                report.Id = id;
                                report.Cause = reader.GetDataSafely<int>("cause");
                                report.Rating = reader.GetDataSafely<int>("rating");
                                //report.Direction = reader.GetDataSafely<Direction>("direction");
                                report.Longitude = reader.GetDataSafely<double>("longitude");
                                report.Lattitude = reader.GetDataSafely<double>("lattitude");
                                report.DateCreated = reader.GetDataSafely<DateTime>("date_created");
                           
                        }
                    }
                    reader.Close();
                }
                connection.Close();
            }

            return report;
        }

        /// <summary>
        /// Gets all reports from database which satisfy passed filter.
        /// </summary>
        /// <param name="filter"></param>
        /// <returns>
        /// Collection of reports that satisfy filters.
        /// </returns>
        public async Task<IEnumerable<IReport>> GetFilteredReportsAsync(IFilter filter)
        {
            List<IReport> reports = new List<IReport>();

            using (var connection = new NpgsqlConnection(_connectionString))
            {
                await connection.OpenAsync();

                using (var command = new NpgsqlCommand())
                {
                    command.Connection = connection;
                    var commandText = new StringBuilder("SELECT * FROM trafreport ");

                    //If there is at least one filter, then apply
                    //WHERE part of the SQL query.
                    if (filter != null)
                    {
                        commandText.Append("WHERE (date_created + time_remaining) > NOW() AND ");

                        //This is filtering like here:
                        //https://timdams.com/2011/02/14/using-enum-flags-to-write-filters-in-linq/
                        if (filter.Cause != 0)
                        {
                            //I'm here adding AND  because coordinates must be specified or
                            //db could be outputting reports that might be out of the area
                            //of visible map.
                            commandText.Append($"cause & {filter.Cause} > 0 AND ");
                        }


                        commandText.Append($"longitude BETWEEN {filter.LowerLeftX} AND {filter.UpperRightX} AND ");
                        commandText.Append($"lattitude BETWEEN {filter.LowerLeftY} AND {filter.UpperRightY}");

                        commandText.Append($"");

                        commandText.Append($"LIMIT {filter.PageSize}");
                    }
                    command.CommandText = commandText.ToString().Replace(',', '.');

                    using (var reader = await command.ExecuteReaderAsync())
                    {
                        while (reader.Read())
                        {
                            var report = new Report();
                            report.Id = reader.GetDataSafely<Guid>("id");
                            report.Cause = reader.GetDataSafely<int>("cause");
                            report.Rating = reader.GetDataSafely<int>("rating");
                            //report.Direction = reader.GetDataSafely<Direction>("direction");
                            report.Longitude = reader.GetDataSafely<double>("longitude");
                            report.Lattitude = reader.GetDataSafely<double>("lattitude");
                            report.DateCreated = reader.GetDataSafely<DateTime>("date_created");
                            reports.Add(report);
                        }

                        reader.Close();
                    }
                }
                connection.Close();
            }

            return reports;
        }

        /// <summary>
        /// Removes the report from database by passing Id parameter.
        /// </summary>
        /// <param name="id"></param>
        /// <returns>
        /// Number of rows affected by removing(should be 1).
        /// </returns>
        //todo this method might be removed because we don't want anyone else but db to delete reports
        public async Task<int> RemoveReportAsync(Guid id)
        {
            var rowsAffrected = 0;

            using (var connection = new NpgsqlConnection(_connectionString))
            {
                await connection.OpenAsync();

                using (var command = new NpgsqlCommand())
                {
                    command.Connection = connection;
                    command.CommandText =
                        "DELETE FROM trafreport " +
                        $"WHERE id='{id}'";
                    rowsAffrected = await command.ExecuteNonQueryAsync();
                }
            }

            return rowsAffrected;
        }

        #endregion Methods
    }
}