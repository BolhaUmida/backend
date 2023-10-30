create database mangalive;
use mangalive;


create table distribuidora(
    id integer primary key,
    nome varchar(30),
    localizacao varchar(50)
);

create table autores(
    id integer primary key,
    nome varchar(30),
    idade varchar(3),
    nacionalidade varchar(20)
);

create table leitores(
    id integer primary key,
    username  varchar(20),
    email varchar(30),
    senha varchar(20),
    idade varchar(3)
);

create table generos(
    id integer primary key,
    nome varchar(70) not null
);


create table mangas(
    id integer primary key,
    nome varchar(40),
    clasificacao varchar(10),
    avaliacao int not null,
    date varchar(20),
    distribuidoraid int not null,
    generosid int not null,
    foreign key(generosid) references generos (id),
    foreign key(distribuidoraid) references distribuidora (id)
);

