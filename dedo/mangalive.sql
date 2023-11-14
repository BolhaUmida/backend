drop database mangalive;
create database mangalive;
use mangalive;


create table distribuidora(
    id integer AUTO_INCREMENT primary key,
    nome varchar(30),
    localizacao varchar(50)
);

create table autores(
    id integer AUTO_INCREMENT primary key,
    nome varchar(30),
    idade varchar(3),
    nacionalidade varchar(20)
);

create table leitores(
    id integer AUTO_INCREMENT primary key,
    nome varchar(50),
    email varchar(80),
    senha varchar(20),
    idade varchar(3)
);

create table generos(
    id integer AUTO_INCREMENT primary key,
    nome varchar(70) not null
);


CREATE TABLE mangas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(40),
    clasificacao VARCHAR(10),
    avaliacao DECIMAL(9,2) NOT NULL,
    date VARCHAR(20),
    imagem TEXT NOT NULL,
    descricao TEXT,
    autoresid INT NOT NULL,
    distribuidoraid INT NOT NULL,
    generosid INT NOT NULL,
    FOREIGN KEY (generosid) REFERENCES generos (id),
    FOREIGN KEY (distribuidoraid) REFERENCES distribuidora (id),
    FOREIGN KEY (autoresid) REFERENCES autores (id)
);

1

