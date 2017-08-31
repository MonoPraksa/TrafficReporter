using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TrafficReporter.Model.Common;
using TrafficReporter.Service.Common;
using TrafficReporter.Repository.Common;
using TrafficReporter.Common.Filter;
using TrafficReporter.Common.Enums;



namespace TrafficReporter.Service
{
    public class ReportService : IReportService
    {
        

        #region Constructors

        /// <summary>
        /// Initializes a new instance of the <see cref="ReportService"/> class.
        /// </summary>
        /// <param name="repository">The repository.</param>
        public ReportService(IReportRepository repository)
        {
            _repository = repository;
        }

        #endregion Constructors

        #region Properties

        /// <summary>
        /// Gets the repository.
        /// </summary>
        /// <value>
        /// The repository.
        /// </value>
        private readonly IReportRepository _repository;

        #endregion Properties 

        #region Methods



        /// <summary>
        /// Adds report if other reports nearby don't exist trough repository method.
        /// </summary>
        /// <param name="report">Report to be added.</param>
        /// <returns>
        /// Returns result of an operation.
        /// </returns>
        public async Task<Inserted> AddReportAsync(IReport report)
        {
            //Check if other reports exist nearby.
            var reportInRangeId = await _repository.CheckIfOtherReportInRangeAsync(report);
            if (!reportInRangeId.Equals(Guid.Empty))
            {
                int rowsAffected = await _repository.UpdateTimeAndRatingAsync(reportInRangeId, report.Cause);

                return Inserted.Updated;
            }

            //If other reports don't exist, then add new report
            report.Id = Guid.NewGuid();
            if (await _repository.AddReportAsync(report) != 1)
                return Inserted.Updated;

            return Inserted.Added;
        }

        /// <summary>
        /// Gets report trough repository from database.
        /// </summary>
        /// <param name="id">Identifier which is criteria for searching through database.</param>
        /// <returns>
        /// Report with the given id.
        /// </returns>
        public Task<IReport> GetReportAsync(Guid id)
        {
           
            return _repository.GetReportAsync(id);
        }


        /// <summary>
        /// Removes report from database trough repository method.
        /// </summary>
        /// <param name="id">Report identifier.</param>
        /// <returns>
        /// True or false depending on operation success.
        /// </returns>
        public Task<int> RemoveReportAsync(Guid id)
        {
            
            return _repository.RemoveReportAsync(id);
        }




        /// <summary>
        /// Gets the filtered reports asynchronous.
        /// </summary>
        /// <param name="filter">The filter.</param>
        /// <returns></returns>
        public Task<IEnumerable<IReport>> GetFilteredReportsAsync(IFilter filter=null)
        {
            
            return _repository.GetFilteredReportsAsync(filter);
        }

        


        #endregion Methods
    }
}
