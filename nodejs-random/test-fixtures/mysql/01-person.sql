SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

USE `playground-db`;

DROP TABLE IF EXISTS `person`;
CREATE TABLE `person` (
  `id` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `birth_date` date NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `person` (`id`, `first_name`, `last_name`, `birth_date`, `created_at`, `updated_at`) VALUES
('669ffb14-ad3f-11ec-89f5-0242c0a88003',	'Elisa',	'Cantamessa',	'1995-05-05',	'2022-03-26 20:00:35',	'2022-03-26 20:00:35'),
('f8067dcd-ad3e-11ec-89f5-0242c0a88003',	'Luís Henrique',	'Silveira da Rocha',	'1986-12-02',	'2022-03-26 19:57:30',	'2022-03-26 19:57:30');
