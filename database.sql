SET search_path TO dat108oblig4v2;

CREATE TABLE bruker
(
   fornavn          VARCHAR (100),
   etternavn        VARCHAR (100),
   mobil            VARCHAR (60) UNIQUE,
   passordHash     VARCHAR (100),
   kjonn            VARCHAR (40),
);









