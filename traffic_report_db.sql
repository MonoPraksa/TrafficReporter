CREATE DATABASE traffic_report_db
  WITH OWNER = postgres
       ENCODING = 'UTF8'
       TABLESPACE = pg_default
       LC_COLLATE = 'en_US.UTF-8'
       LC_CTYPE = 'en_US.UTF-8'
       CONNECTION LIMIT = -1;

COMMENT ON DATABASE traffic_report_db
  IS 'This database stores traffic reports in prodution.';

CREATE TABLE public.trafreport
(
  id uuid NOT NULL,
  cause integer NOT NULL,
  direction integer,
  longitude double precision NOT NULL,
  lattitude double precision NOT NULL,
  rating integer DEFAULT 0,
  time_remaining time without time zone,
  date_created timestamp without time zone,
  CONSTRAINT trafreport_pkey PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.trafreport
  OWNER TO postgres;


CREATE TABLE public.cause_table
(
  id integer NOT NULL,
  time_remaining time without time zone,
  cause_range double precision,
  cause_str character varying(20),
  "icon_URI" text,
  CONSTRAINT cause_time_pkey PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.cause_table
  OWNER TO postgres;

INSERT INTO public.cause_table(
            id, time_remaining, cause_range, cause_str, "icon_URI")
    VALUES (1, '01:00:00', 0.3, 'Fire', ''),
    (2, '04:00:00', 0.1, 'Police', ''),
    (4, '08:00:00', 0.1, 'Roadworks', ''),
    (8, '16:00:00', 0.1, 'Flood', ''),
    (16, '05:00:00', 0.1, 'Animals on road', ''),
    (32, '02:00:00', 0.4, 'Traffic Jam', '');

