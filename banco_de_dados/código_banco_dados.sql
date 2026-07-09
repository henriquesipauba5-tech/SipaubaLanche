/*COMENTÁRIO DE VÁRIAS LINHAS*/

-- COMENTÁRIO DE 1 LINHA

-- CRIANDO O BANCO DE DADOS

CREATE DATABASE SipaubaLanche;

-- COMANDO PARA EXCLUIR BANCOS DE DADOS 
DROP DATABASE Sipaubalache;

-- INICIALIZAR O BANCO DE DADOS 
USE SipaubaLanche;

CREATE TABLE Lojista(
idlojista int primary key auto_increment,
nome varchar (200) not null,
cpf mediumint(11) not null unique,
cnpj mediumint(15) unique,
email varchar(120) not null,
senha varchar(13) not null,
telefone mediumint(14)
);
-- COMANDO PARA EXCLUIR UMA TABELA
 DROP TABLE Endereco;
 
 CREATE TABLE Endereco(
idEndereco int primary key auto_increment,
rua varchar(45) not null,
cep mediumint(11) not null,
bairro varchar(45) not null,
numero int,
complemento varchar(200),
tipo varchar(45)
);

CREATE TABLE Forma_pagamento(
idForma_pagamento int primary key auto_increment,
nome varchar(45) not null,
link varchar(200),
ativo boolean
);

CREATE TABLE Categoria(
idCategoria int primary key auto_increment,
nome varchar(100) not null
);

CREATE TABLE Adicional(
idAdicional ITN,
nome varchar(45),
preco varchar(45),
imagem longblob
quantidade varchar(45),


);

CREATE TABLE Loja(
idLoja int primary key auto_increment,
nome varchar(50),
whatsapp varchar(50),
instagram varchar(50),
facebook varchar(50),
linkedin varchar(50),
telefone mediumint(14) not null,
email varchar(50) not null,
Endereco_idEndereco int,
Lojista_idLojista int,

FOREIGN KEY (Endereco_idEndereco)
REFERENCES Endereco (idEndereco),

FOREIGN KEY (Lojista_idLojista)
REFERENCES Lojista (idLojista)
);

CREATE TABLE Cliente(
idCliente int primary key auto_increment,
nome varchar(200) not null,
cpf mediumint(12) not null,
telefone mediumint(15) not null,
email varchar(120) not null,
senha varchar(13) not null,
data_nascimento date not null,
Loja_idLoja int,
FOREIGN KEY (Loja_idLoja) REFERENCES Loja (idLoja)
);

CREATE TABLE Categoria_has_Cupom(
Categoria_idCategoria int,
Cupom_idCupom int,
foreign key (Categoria_idCategoria) references Categoria (idCategoria),
foreign key (Cupom_idCupom) references Cupom (idCupom)
);



CREATE TABLE produto(
idproduto int primary key auto_increment,
nome varchar (100) not null,
descricao text (1000) not null,
codigo varchar (45),
preco_antigo float not null,
preco_promocional float not null,
quantidade_estoque int not null,
ativo tinyint not null,
loja_idloja int,
marca_idmarca int ,
categorias_idcategorias int,
FOREIGN KEY (loja_idloja) REFERENCES loja (idloja),
FOREIGN KEY (marca_idmarca) REFERENCES marca (idmarca),
FOREIGN KEY (categorias_idcategorias) REFERENCES categoria (idcategoria)
);

CREATE TABLE cupom_has_produto(
cupom_idcupom int,
produto_idproduto int, 
FOREIGN KEY (cupom_idcupom ) REFERENCES cupom (idcupom),
FOREIGN KEY (produto_idproduto) REFERENCES produto (idproduto)
);

CREATE TABLE banner(
idbanner int primary key auto_increment,
imagem longblob not null,
data_inicio date not null,
data_final date not null,
status_visibilidade tinyint not null,
loja_idloja int,
FOREIGN KEY (loja_idloja) REFERENCES loja (idloja)
);

CREATE TABLE banner_has_produto(
produto_idproduto int,
banner_idbanner int, 
FOREIGN KEY (produto_idproduto) REFERENCES produto (idproduto),
FOREIGN KEY (banner_idbanner) REFERENCES banner (idbanner)
);

CREATE TABLE carrinho(
idcarrinho int primary key auto_increment,
quantidade_produto int not null,
preco_total float not null,
Cliente_idCliente int,
FOREIGN KEY (Cliente_idCliente) REFERENCES Cliente (idcliente)
);

CREATE TABLE produto_has_carrinho(
carrinho_idcarrinho int,
produto_idproduto int,
FOREIGN KEY (carrinho_idcarrinho) REFERENCES carrinho (idcarrinho),
FOREIGN KEY (produto_idproduto) REFERENCES produto (idproduto),
);

CREATE TABLE Carrinho(
idcarrinho int primary key auto_increment,
quantidade_produto int not null,
preco_total float not null,
Cliente_idCliente int,
foreign key (Cliente_idCliente) references Cliente (idCliente)
);






