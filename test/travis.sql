# Create Testuser
CREATE USER 'dev'@'localhost' IDENTIFIED BY 'dev';
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP ON *.* TO 'dev'@'localhost';

# Create DB
CREATE DATABASE IF NOT EXISTS `test` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `test`;

# Create Table
CREATE TABLE IF NOT EXISTS `personal` (
  `nombre` varchar(20) NOT NULL,
  `apellidos` varchar(40) NOT NULL,
  `edad` int(1) NOT NULL,
  `dni` varchar(10) NOT NULL,
  PRIMARY KEY (`dni`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `personal` VALUES ('Fulanito', 'De Tal', 35, '111A'),('Menganito', 'De Cual', 40, '222B')

