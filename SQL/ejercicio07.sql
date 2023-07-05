drop database if exists enfocat;
create database enfocat;
use enfocat;

create table country(
	id int unsigned primary key auto_increment,
    name varchar(45),
    lastUpdate timestamp
);

create table city(
	id int unsigned primary key auto_increment,
    name varchar(45),
    countyId int,
    lastUpdate timestamp,
    foreign key (countryId)
    references country(id)
);

create table adress(
	id int unsigned primary key auto_increment,
    adress varchar(45),
    adress2 varchar(45),
    district varchar(45),
    postalCode varchar(45),
    phone varchar(45),
    location varchar(45),
    cityId int,
    lastUpdate timestamp,
    foreign key (cityId)
    references cityId(id)
);