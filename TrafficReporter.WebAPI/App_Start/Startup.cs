using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using Hangfire;
using Hangfire.PostgreSql;

[assembly: OwinStartup(typeof(TrafficReporter.WebAPI.App_Start.Startup))]

namespace TrafficReporter.WebAPI.App_Start
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            GlobalConfiguration.Configuration
            .UsePostgreSqlStorage("Host=13.95.28.45; Port = 5432; Username='postgres'; Password=Ry7eVUOmMis8; Database=traffic_report_db");
            app.UseHangfireDashboard();
            app.UseHangfireServer();
        }
    }
}
