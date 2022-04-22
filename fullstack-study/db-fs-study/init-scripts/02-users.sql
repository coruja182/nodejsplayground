DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id`         varchar(36)  NOT NULL,
  `email`      varchar(255) NOT NULL,
  `created_at` timestamp    NOT NULL,
  `updated_at` timestamp    NOT NULL,
  `created_by` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
