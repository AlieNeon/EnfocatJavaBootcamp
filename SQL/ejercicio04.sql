drop database if exists enfocat;
create database if not exists enfocat;
use enfocat;

create table if not exists genre(
	idGenre int unsigned primary key auto_increment,
	genre varchar(255)
);

create table if not exists album(
	idAlbum int unsigned primary key auto_increment,
	albumName varchar(255),
  dateReleased datetime
);

create table if not exists artist(
	idArtist int unsigned primary key auto_increment,
	artistName varchar(255)
);