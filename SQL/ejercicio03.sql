drop database if exists enfocat;
create database if not exists enfocat;
use enfocat;

create table if not exists datatypes(
	idPersonaje int unsigned primary key auto_increment,
	fecha date,
    textoGrande longtext,
    entero int,
    numeroDecimal double
);