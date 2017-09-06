using System;
using System.Collections.Generic;
using System.ComponentModel.Design;
using System.Threading.Tasks;
using TrafficReporter.Model.Common;
using TrafficReporter.Common;
using TrafficReporter.Common.Filter;

namespace TrafficReporter.Repository.Common
{
    public interface IReportRepository
    {
        ///<summary>
        /// Adds the report to database.
        /// </summary>
        /// <param name="report">The report to be added to database.</param>
        /// <returns>Number of rows affected by removing(should be 1).</returns>
        Task<int> AddReportAsync(IReport report);

        /// <summary>
        /// This method checks if other reports with same cause exist 
        /// within range.
        /// </summary>
        /// <param name="report">Report to perfrom check upon</param>
        /// <returns>Id of a report nearby with same cause.</returns>
        Task<Guid> CheckIfOtherReportInRangeAsync(IReport report);

        /// <summary>
        /// Updates time remaining(like life duration in database) based on cause of a report.
        /// </summary>
        /// <param name="reportInRangeId">Id of a report to be updated.</param>
        /// <param name="cause">This value is used to reset time_remaining.</param>
        /// <returns>Number of rows affected.</returns>
        Task<int> UpdateTimeAndRatingAsync(Guid reportInRangeId, int cause);

        /// <summary>
        /// Gets report from database which has passed parameter id.
        /// </summary>
        /// <param name="id"></param>
        /// <returns>Report found by passed id.</returns>
        Task<IReport> GetReportAsync(Guid id);

        /// <summary>
        /// Gets all reports from database which satisfy passed filter.
        /// </summary>
        /// <param name="causeFilter">Filter which report has to satisfy in order to be retrieved. Related to cause.</param>
        /// <param name="areaFilter"></param>
        /// <returns>Collection of reports that satisfy filters.</returns>
        Task<IEnumerable<IReport>> GetFilteredReportsAsync(IFilter filter);

        /// <summary>
        /// Gets all reports from database which satisfy passed filter.
        /// </summary>
        /// <param name="causeFilter">Filter which report has to satisfy in order to be retrieved. Related to cause.</param>
        /// <param name="areaFilter"></param>
        /// <returns>Collection of reports that satisfy filters.</returns>
        Task<IEnumerable<IReport>> GetPathReportsAsync(IFilter filter);

        /// <summary>
        /// Removes the report from database by passing Id parameter.
        /// </summary>
        /// <param name="Id">The identifier.</param>
        /// <returns>Number of rows affected by removing(should be 1).</returns>
        Task<int> RemoveReportAsync(Guid id);
        

        

    }
}
