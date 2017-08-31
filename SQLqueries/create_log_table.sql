CREATE TABLE log (
	id 		uuid PRIMARY KEY NOT NULL,
	date 		timestamp NOT NULL,
	thread 		varchar(255) NOT NULL,
	log_level 	varchar(50) NOT NULL,
	logger 		varchar(255) NOT NULL,
	message		varchar (4000) NOT NULL,
	log_exception 	varchar (2000) NULL
	
);