﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AutoMapper;
using Ninject.Modules;
using TrafficReporter.Common;
using TrafficReporter.Model;

namespace TrafficReporter.WebAPI.App_Start
{
    public class AutoMapperModule : NinjectModule
    {
        public override void Load()
        {
            var mapperConfiguration = CreateConfiguration();
            Bind<MapperConfiguration>().ToConstant(mapperConfiguration).InSingletonScope();

            Bind<IMapper>().ToMethod(ctx => new Mapper(mapperConfiguration));

        }

        private MapperConfiguration CreateConfiguration()
        {
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile(new WebMappingProfile());
                cfg.AddProfile(new FilterProfile());
                cfg.AddProfile(new ModelProfile());
            });

            return config;
        }
    }
}