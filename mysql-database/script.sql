CREATE DATABASE IF NOT EXISTS `prueba` CHARACTER SET latin1 COLLATE latin1_spanish_ci;

USE prueba;

CREATE TABLE IF NOT EXISTS `funcionario` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`dni` INT(8) NOT NULL,
	`nombre` VARCHAR(100) NOT NULL,
	`sede` VARCHAR(50) NOT NULL,
	PRIMARY KEY (`id`)
);

INSERT INTO funcionario (dni, nombre, sede) VALUES (71458723,'Juan Gutierrez','Sede Tacna');
