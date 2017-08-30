﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Runtime;
using System.Text;
using System.Threading.Tasks;
using TrafficReporter.Common.Enums;

namespace TrafficReporter.DAL.Entity_Models
{
    public class ReportEntity
    {
        private static readonly log4net.ILog log = log4net.LogManager.GetLogger
    (System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        /// <summary>
        /// Unique identifier which differs one report to another.
        /// </summary>
        public Guid Id { get; set; }

        /// <summary>
        /// What is the cause for reporting of an anomaly in traffic.
        /// </summary>
        public int Cause { get; set; }

        /// <summary>
        /// Date when the report has been created.
        /// </summary>
        public DateTime DateCreated { get; set; }

        /// <summary>
        /// The longitude of geographical coordinate.
        /// </summary>
        public double Longitude { get; set; }

        /// <summary>
        /// The lattitude of geographical coordinate.
        /// </summary>
        public double Lattitude { get; set; }

        /// <summary>
        /// This measures the relevance of a report.
        /// </summary>
        public int Rating { get; set; }


        /// <summary>
        /// In which direction is the traffic endagered.
        /// </summary>
        public Direction Direction { get; set; }
    }
}