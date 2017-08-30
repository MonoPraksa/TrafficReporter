using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TrafficReporter.Model.Common;
using TrafficReporter.Repository.Common;
using TrafficReporter.Service.Common;

namespace TrafficReporter.Service
{
    public class CauseService : ICauseService
    {
        private readonly ICauseRepository _causeRepository;

        public CauseService(ICauseRepository causeRepository)
        {
            _causeRepository = causeRepository;
        }

       


        public Task<IEnumerable<ICause>> GetCausesAsync()
        {
            return _causeRepository.GetCausesAsync();
        }
        private static readonly log4net.ILog log = log4net.LogManager.GetLogger
    (System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);
    }
}
