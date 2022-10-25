CREATE DATABASE IF NOT EXISTS zoologico;

USE zoologico;

CREATE TABLE IF NOT EXISTS animals_species(
	species_id INT PRIMARY KEY AUTO_INCREMENT,
    animal_species VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS locations(
	location_id INT PRIMARY KEY AUTO_INCREMENT,
    location_name VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS gerente(
	gerente_id INT PRIMARY KEY AUTO_INCREMENT,
    gerente_name VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS cuidador(
	cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
    cuidador VARCHAR(50),
    gerente_id INT NOT NULL,
    FOREIGN KEY (gerente_id) REFERENCES gerente (gerente_id)
);

CREATE TABLE IF NOT EXISTS animals(
	animal_id INT PRIMARY KEY AUTO_INCREMENT,
	animal_name VARCHAR(100),
	species_id INT NOT NULL,
	animal_sex VARCHAR(20),
	animal_age INT NOT NULL,
    location_id INT NOT NULL,
    FOREIGN KEY (species_id) REFERENCES animals_species (species_id),
    FOREIGN KEY (location_id) REFERENCES locations (location_id)
);

CREATE TABLE IF NOT EXISTS cuidador_e_animal(
    animal_id INT NOT NULL,
	cuidador_id INT NOT NULL,
    CONSTRAINT PRIMARY KEY(animal_id, cuidador_id),
    FOREIGN KEY (cuidador_id) REFERENCES cuidador (cuidador_id),
    FOREIGN KEY (animal_id) REFERENCES animals (animal_id)
);