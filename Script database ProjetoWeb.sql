create database if not exists ProjetoWeb;

use ProjetoWeb;

create table if not exists tb_usuario (
	id_usuario int primary key auto_increment,
    nm_usuario varchar(100) not null unique,
    email_usuario varchar(200) not null unique,
    tel_usuario varchar(20),
    senha_usuario varchar(250)
);

insert into tb_usuario (nm_usuario, email_usuario, tel_usuario, senha_usuario)
	values ("admin", "admin@gmail.com", "110909123", "admin");
    
create table if not exists tb_feedback (
	id_feedback int primary key auto_increment,
    data_feedback date,
    qualidade_feedback varchar(20) not null,
    expectativa_feedback varchar(20) not null,
    sabor_feedback varchar(20) not null,
    apresentacao_feedback varchar(20) not null,
    valor_feedback varchar(20) not null
);

create table if not exists tb_produto (
	id_produto int primary key auto_increment,
    tipo_produto varchar(50) not null,
    sabor_produto varchar(200) not null,
    desc_produto varchar(400),
    valor_produto double not null
);

create table if not exists tb_estoque (
	id_estoque int primary key auto_increment,
    id_produto int,
    foreign key (id_produto) references tb_produto(id_produto),
    qtd_disponivel int,
    qtd_min int not null,
    data_atualizacao date
);


