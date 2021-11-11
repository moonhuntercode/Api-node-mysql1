create database youtube_crud;
use youtube_crud;

create table cars(
id int not null auto_increment,
marca varchar(100) not null ,
descripcion varchar(150) not null,
primary key(id)
);
select * from cars;
