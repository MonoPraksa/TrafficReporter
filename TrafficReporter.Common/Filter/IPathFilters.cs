using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace TrafficReporter.Common.Filter
{
    public interface IPathFilters : IPageFilter
    {
        double Longitude { get; set; }
        double Latutude { get; set; }
        int Cause { get; set; }
    }
}
