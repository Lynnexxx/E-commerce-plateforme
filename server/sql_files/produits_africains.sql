-- Database generated with pgModeler (PostgreSQL Database Modeler).
-- pgModeler  version: 0.9.3
-- PostgreSQL version: 13.0
-- Project Site: pgmodeler.io
-- Model Author: ---


-- Database creation must be done outside a multicommand file.
-- These commands were put in this file only as a convenience.
-- object: new_database | type: DATABASE --
-- DROP DATABASE IF EXISTS new_database;
--CREATE DATABASE new_database;
-- ddl-end --


-- object: produits_africains | type: SCHEMA --
-- DROP SCHEMA IF EXISTS produits_africains CASCADE;
CREATE SCHEMA produits_africains;
-- ddl-end --
ALTER SCHEMA produits_africains OWNER TO essenahoun;
-- ddl-end --

SET search_path TO pg_catalog,public,produits_africains;
-- ddl-end --

-- object: produits_africains.articles | type: TABLE --
-- DROP TABLE IF EXISTS "produits_africains".articles CASCADE;
CREATE TABLE produits_africains.articles (
	id bigserial NOT NULL,
	article jsonb,
	id_clients bigint,
	statut varchar(100) ,
	n_commande bigint ,
	date_reception date ,
	livraison_frais bigint,
	id_artisans bigserial,
	reception varchar,
	id_clients1 bigint,
	refection boolean ,
	reception1 date,
	envoi date,
	CONSTRAINT new_table_pk PRIMARY KEY (id)

);
-- ddl-end --

-- object: produits_africains.clients | type: TABLE --
-- DROP TABLE IF EXISTS produits_africains.clients CASCADE;
CREATE TABLE produits_africains.clients (
	id bigserial NOT NULL,
	client jsonb,
	CONSTRAINT clients_pk PRIMARY KEY (id)

);
-- ddl-end --

-- object: produits_africains.artisans | type: TABLE --
-- DROP TABLE IF EXISTS produits_africains.artisans CASCADE;
CREATE TABLE produits_africains.artisans (
	id bigserial NOT NULL,
	artisan jsonb,
	CONSTRAINT artisans_pk PRIMARY KEY (id)

);
-- ddl-end --

-- object: clients_fk | type: CONSTRAINT --
-- ALTER TABLE produits_africains.articles DROP CONSTRAINT IF EXISTS clients_fk CASCADE;
ALTER TABLE produits_africains.articles ADD CONSTRAINT clients_fk FOREIGN KEY (id_clients)
REFERENCES produits_africains.clients (id) MATCH FULL
ON DELETE SET NULL ON UPDATE CASCADE;
-- ddl-end --

-- object: artisans_fk | type: CONSTRAINT --
-- ALTER TABLE produits_africains.articles DROP CONSTRAINT IF EXISTS artisans_fk CASCADE;
ALTER TABLE produits_africains.articles ADD CONSTRAINT artisans_fk FOREIGN KEY (id_artisans)
REFERENCES produits_africains.artisans (id) MATCH FULL
ON DELETE SET NULL ON UPDATE CASCADE;
-- ddl-end --

-- object: clients_fk1 | type: CONSTRAINT --
-- ALTER TABLE produits_africains.articles DROP CONSTRAINT IF EXISTS clients_fk1 CASCADE;
ALTER TABLE produits_africains.articles ADD CONSTRAINT clients_fk1 FOREIGN KEY (id_clients1)
REFERENCES produits_africains.clients (id) MATCH FULL
ON DELETE SET NULL ON UPDATE CASCADE;
-- ddl-end --


