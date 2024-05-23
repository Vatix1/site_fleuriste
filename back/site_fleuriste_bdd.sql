-- DROP TABLE IF EXISTS utilisateur,roles, evenements,user_role, bougie, the,article, bouquet, formule;
DROP TABLE IF EXISTS formule, bouquet, article, the,bougie , user_role, evenements, roles, utilisateur;

-- DROP TABLE IF EXISTS roles CASCADE ;

CREATE TABLE utilisateur(
   id_utilisateur SERIAL,
   nom_utilisateur VARCHAR(50),
   mot_de_passe VARCHAR(50),
   email VARCHAR(150),
   PRIMARY KEY(id_utilisateur)
);

CREATE TABLE roles (
   id_role SERIAL,
   nom_role VARCHAR(50),
   PRIMARY KEY(id_role)
);

CREATE TABLE evenements(
   id_evenement SERIAL,
   nom_evenement VARCHAR(50),
   PRIMARY KEY(id_evenement)
);

CREATE TABLE user_role(
   id_utilisateur INT,
   id_role INT,
   PRIMARY KEY (id_utilisateur, id_role),
   FOREIGN KEY (id_utilisateur) REFERENCES utilisateur(id_utilisateur),
   FOREIGN KEY (id_role) REFERENCES roles(id_role)
);

CREATE TABLE bougie(
   id_bougie SERIAL,
   nom_bougie VARCHAR(50),
   prix_bougie NUMERIC(15,2),
   PRIMARY KEY(id_bougie)
);

CREATE TABLE article(
   id_article SERIAL,
   nom_article VARCHAR(50),
   prix_article NUMERIC(15,2)
);

CREATE TABLE the(
   id_the SERIAL,
   nom_the VARCHAR(50),
   prix_the NUMERIC(15,2),
   PRIMARY KEY(id_the)
);

CREATE TABLE bouquet(
   id_bouquet SERIAL,
   nom_bouquet VARCHAR(50),
   prix_bouquet NUMERIC(15,2),
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

INSERT INTO utilisateur (nom_utilisateur, mot_de_passe) VALUES
   ('JeanDupont', 'password1'),
   ('MarieDurand', 'password2');

INSERT INTO roles (nom_role) VALUES
   ('user'),
   ('moderator'),
   ('admin');

INSERT INTO evenements (nom_evenement) VALUES
   ('Anniversaire'),
   ('Mariage');

INSERT INTO bougie (nom_bougie, prix_bougie) VALUES
   ('Bougie Parfumée', 15.99),
   ('Bougie Scented', 12.99);

INSERT INTO article (nom_article, prix_article) VALUES
   ('Café', 3.99),
   ('Sirop de Grenadine', 2.99);

INSERT INTO the (nom_the, prix_the) VALUES
   ('Thé Vert', 5.99),
   ('Thé Noir', 4.99);

INSERT INTO bouquet (nom_bouquet, prix_bouquet) VALUES
   ('Roses Rouges', 29.99),
   ('Lys Blancs', 34.99);

INSERT INTO formule (nom_formule, prix_formule, id_bouquet, id_bougie, id_the) VALUES
   ('Formule Anniversaire', 50.97, 1, 1, 1),
   ('Formule Mariage', 60.96, 2, 2, 2);
