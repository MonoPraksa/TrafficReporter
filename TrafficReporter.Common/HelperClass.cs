using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.Common;
using System.Linq;
using System.Runtime.Remoting.Channels;
using System.Text;
using System.Threading.Tasks;

namespace TrafficReporter.Common
{
    public static class HelperClass
    {

        private static bool IsNullableType(Type theValueType)
        {
            return theValueType.IsGenericType && theValueType.GetGenericTypeDefinition() == typeof(Nullable<>);
        }

        //This solution is this one: 
        //https://stackoverflow.com/questions/18550769/sqldatareader-best-way-to-check-for-null-values-sqldatareader-isdbnull-vs-dbnul
        /// <summary>
        /// Gets data safetly using DataReader
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="reader">Reader which holds data.</param>
        /// <param name="columnName">Column name under which we search for data.</param>
        /// <returns>Data in reader under specified column name.</returns>
        /// <exception cref="DataException">In case data trying to be read from a column name is null.</exception>
        public static T GetDataSafely<T>(this DbDataReader reader, string columnName)
        {
            var value = reader[columnName];

            var valueType = typeof(T);

            if (value != DBNull.Value )
            {
                
                if (!IsNullableType(valueType))
                {
                    return (T) Convert.ChangeType(value, valueType);
                }
                else
                {
                    var nullableConverter = new NullableConverter(valueType);

                    return (T) Convert.ChangeType(value, nullableConverter.UnderlyingType);
                }
            }
            throw new DataException($"Data for {columnName} does not exist.");
            //return default(T);
        }
    }
}
