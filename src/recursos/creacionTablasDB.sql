create database veterinaria;
use veterinaria;


create table personas 
(id int not null primary key,
nombre varchar(50) NOT NULL,
email varchar(100),
telefono varchar(15));


create table animales
(id int not null primary key,
nombre varchar(50) not null,
cant_patas tinyint not null,
tiene_plumas bool not null,
persona_id int,
tipo_animal varchar(30) not null,
FOREIGN KEY (persona_id) REFERENCES personas(id));


insert into personas values (1, 'Serafín', null, null);
insert into personas values (2, 'Marcela T', 'marcelat@hotmail.com', '566-6590');
insert into personas values (3, 'Josefina H', 'josefinah@yahoo.com', null);

insert into animales values(1, 'Claudio', 2, true, null, 'GALLO');
insert into animales values(2, 'Pericles', 3, false, 3, 'PERRO');
insert into animales values(3, 'Rulfo', 4, false, 2, 'PERRO');
insert into animales values(4, 'Trinidad', 4, false, 3, 'GATO');
insert into animales (nombre,cant_patas,tiene_plumas,persona_id,tipo_animal) values('Tobago',4,false,null,'PERRO');

select * from animales;

select * from personas;
