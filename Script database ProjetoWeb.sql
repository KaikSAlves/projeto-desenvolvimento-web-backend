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
    nvl_avaliacao_feedback int not null,
    descricao_feedback VARCHAR(250)
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

create table if not exists tb_venda (
	id_venda int primary key auto_increment,
    id_estoque int,
    foreign key (id_estoque) references tb_estoque(id_estoque),
    qtd_total int,
    valor_total double,
    data_venda date
);

DELIMITER $$

CREATE TRIGGER trg_subtrair_estoque_depois_venda
AFTER INSERT ON tb_venda
FOR EACH ROW
BEGIN
    UPDATE tb_estoque
    SET qtd_disponivel = qtd_disponivel - NEW.qtd_total
    WHERE id_estoque = NEW.id_estoque;
END$$

DELIMITER ;

DELIMITER $$

CREATE TRIGGER trg_repor_estoque_depois_delete_venda
AFTER DELETE ON tb_venda
FOR EACH ROW
BEGIN
    UPDATE tb_estoque
    SET qtd_disponivel = qtd_disponivel + OLD.qtd_total
    WHERE id_estoque = OLD.id_estoque;
END$$

DELIMITER ;


