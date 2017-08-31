using System.Configuration;
using Ninject.Modules;
using TrafficReporter.Repository.Common;

namespace TrafficReporter.Repository
{
    public class DIModule : NinjectModule
    {
        public override void Load()
        {
            //If someone wants to change how to get connection string, you can do it here.
            Bind<IReportRepository>().To<ReportRepository>().InSingletonScope()
                .WithConstructorArgument(typeof(string), ConfigurationManager.ConnectionStrings["RemoteDB"].ConnectionString);
            Bind<ICauseRepository>().To<CauseRepository>();
        }
    }
}