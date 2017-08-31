using log4net.Appender;
using System;
using log4net.Core;
using Npgsql;
using System.Configuration;

namespace TrafficReporter.Service
{
    public class PostgresAppender : AppenderSkeleton
    {
        protected override void Append(LoggingEvent loggingEvent)
        {
            using (NpgsqlConnection conn = new NpgsqlConnection(ConfigurationManager.ConnectionStrings["RemoteDB"]
                .ConnectionString))
            {
                conn.Open();
                using (NpgsqlCommand command = new NpgsqlCommand("insert into log(thread,log_level,logger,message,log_exception) values(:thread,:level,:logger,:message,:log_exception)", conn))
                {
                    var thread = command.CreateParameter();
                    thread.Direction = System.Data.ParameterDirection.Input;
                    thread.DbType = System.Data.DbType.String;
                    thread.ParameterName = ":thread";
                    thread.Value = loggingEvent.ThreadName;
                    command.Parameters.Add(thread);

                    var log_level = command.CreateParameter();
                    log_level.Direction = System.Data.ParameterDirection.Input;
                    log_level.DbType = System.Data.DbType.String;
                    log_level.ParameterName = ":log_level";
                    log_level.Value = loggingEvent.Level;
                    command.Parameters.Add(log_level);

                    var logger = command.CreateParameter();
                    logger.Direction = System.Data.ParameterDirection.Input;
                    logger.DbType = System.Data.DbType.String;
                    logger.ParameterName = ":logger";
                    logger.Value = loggingEvent.LocationInformation.FullInfo;
                    command.Parameters.Add(logger);

                    var message = command.CreateParameter();
                    message.Direction = System.Data.ParameterDirection.Input;
                    message.DbType = System.Data.DbType.String;
                    message.ParameterName = ":message";
                    message.Value = loggingEvent.RenderedMessage;
                    command.Parameters.Add(message);

                    var log_exception = command.CreateParameter();
                    log_exception.Direction = System.Data.ParameterDirection.Input;
                    log_exception.DbType = System.Data.DbType.String;
                    log_exception.ParameterName = ":log_exception";
                    log_exception.Value = loggingEvent.GetExceptionString();
                    command.Parameters.Add(log_exception);

                    command.ExecuteNonQuery();
                }
                conn.Close();
            }
        }
    }
}