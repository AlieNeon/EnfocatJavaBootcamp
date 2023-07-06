drop database if exists enfocat;
create database enfocat;
use enfocat;

create table teacher(
	id int unsigned primary key auto_increment,
    name varchar(45)
);

create table course(
	id int unsigned primary key auto_increment,
    name varchar(45),
    teacherId int,
    foreign key(teacherId)
    references teacher(id)
);

create table student_course(
    score int,
    courseId int,
    studentId int,
    foreign key(courseId)
    references course(id),
    foreign key(studentId)
    references student(id)
);

create table student(
	id int unsigned primary key auto_increment,
    name varchar(45),
    age int
);