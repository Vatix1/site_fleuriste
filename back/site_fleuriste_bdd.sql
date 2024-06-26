-- DROP TABLE IF EXISTS utilisateur,roles, evenements,user_role, bougie, the,article, bouquet, formule;
DROP TABLE IF EXISTS formule, bouquet, the,bougie,type_article, article ,photo_evenements, evenements, roles, utilisateur;

--DROP TABLE IF EXISTS evenements CASCADE ;

CREATE TABLE roles (
   id_role SERIAL,
   nom_role VARCHAR(50),
   PRIMARY KEY(id_role)
);

CREATE TABLE utilisateur(
   id_utilisateur SERIAL,
   nom_utilisateur VARCHAR(50),
   mot_de_passe VARCHAR(250),
   email VARCHAR(150),
   id_role INT,
   PRIMARY KEY(id_utilisateur),
   FOREIGN KEY(id_role) REFERENCES roles(id_role)
);

CREATE TABLE evenements(
   id_evenement SERIAL,
   nom_evenement VARCHAR(50),
   PRIMARY KEY(id_evenement)
);

CREATE TABLE photo_evenements (
   id_photo SERIAL,
   photo_evenement VARCHAR(250),
   id_evenement INT,
   PRIMARY KEY(id_photo),
   FOREIGN KEY(id_evenement) REFERENCES evenements(id_evenement)
);


CREATE TABLE type_article(
   id_type_article SERIAL,
   nom_type_article VARCHAR(50),
   PRIMARY KEY(id_type_article)
);

CREATE TABLE article(
   id_article SERIAL,
   nom_article VARCHAR(50),
   prix_article NUMERIC(15,2),
   id_type_article INT,
   PRIMARY KEY(id_article),
   FOREIGN KEY (id_type_article) REFERENCES type_article(id_type_article)
);

CREATE TABLE bougie(
   id_bougie SERIAL,
   nom_bougie VARCHAR(50),
   prix_bougie NUMERIC(15,2),
   image_bougie VARCHAR(250),
   PRIMARY KEY(id_bougie)
);

CREATE TABLE the(
   id_the SERIAL,
   nom_the VARCHAR(50),
   prix_the NUMERIC(15,2),
   image_the VARCHAR(250),
   PRIMARY KEY(id_the)
);

CREATE TABLE bouquet(
   id_bouquet SERIAL,
   nom_bouquet VARCHAR(50),
   prix_bouquet NUMERIC(15,2),
   description VARCHAR(250),
   image_bouquet VARCHAR(250),
   PRIMARY KEY(id_bouquet)
);

CREATE TABLE formule(
   id_formule SERIAL,
   nom_formule VARCHAR(50),
   prix_formule NUMERIC(15,2),
   id_bougie INT,
   id_the INT,
   id_bouquet INT,
   PRIMARY KEY(id_formule),
   FOREIGN KEY(id_bouquet) REFERENCES bouquet(id_bouquet),
   FOREIGN KEY(id_bougie) REFERENCES bougie(id_bougie),
   FOREIGN KEY(id_the) REFERENCES the(id_the)

);

INSERT INTO roles (nom_role) VALUES
   ('user'),
   ('moderator'),
   ('admin');

INSERT INTO utilisateur (nom_utilisateur, mot_de_passe,email,id_role) VALUES
   ('JeanDupont', 'password1','JeanDupont@gmail.com',1),
   ('MarieDurand', 'password2','MarieDurand@gmail.com',1);

INSERT INTO evenements (nom_evenement) VALUES
   ('Anniversaire'),
   ('Mariage');

INSERT INTO type_article (nom_type_article) VALUES
    ('Boisson'),
    ('Gateau');

INSERT INTO article (nom_article, prix_article) VALUES
   ('Café', 3.99),
   ('Sirop de Grenadine', 2.99),
   ('Macaron',1.99);


INSERT INTO bougie (nom_bougie, prix_bougie) VALUES
   ('Bougie Parfumée', 15.99),
   ('Bougie Scented', 12.99);

INSERT INTO the (nom_the, prix_the) VALUES
   ('Thé Vert', 5.99),
   ('Thé Noir', 4.99);

INSERT INTO bouquet (nom_bouquet, prix_bouquet) VALUES
   ('Roses Rouges', 29.99),
   ('Lys Blancs', 34.99);

INSERT INTO formule (nom_formule, prix_formule, id_bouquet, id_bougie, id_the) VALUES
   ('Formule Anniversaire', 50.97, 1, 1, 1),
   ('Formule Mariage', 60.96, 2, 2, 2);
