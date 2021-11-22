-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 22-Nov-2021 às 08:28
-- Versão do servidor: 10.4.21-MariaDB
-- versão do PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `nuvenz_api`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `reactionsType`
--

CREATE TABLE `reactionsType` (
  `id` int(11) NOT NULL,
  `reactionType` varchar(50) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `reactionsType`
--

INSERT INTO `reactionsType` (`id`, `reactionType`, `created_at`, `updated_at`) VALUES
(1, 'Like', '2021-11-20 18:53:13', '2021-11-20 18:53:13'),
(2, 'UnLike', '2021-11-20 19:02:51', '2021-11-20 19:02:51');

-- --------------------------------------------------------

--
-- Estrutura da tabela `retweets`
--

CREATE TABLE `retweets` (
  `id` int(11) NOT NULL,
  `tweetRetweetedId` int(11) DEFAULT NULL,
  `totalLikes` int(11) DEFAULT NULL,
  `totalUnlike` int(11) DEFAULT NULL,
  `userReactedId` int(11) DEFAULT NULL,
  `userTweetId` int(11) DEFAULT NULL,
  `status` varchar(50) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `retweets`
--

INSERT INTO `retweets` (`id`, `tweetRetweetedId`, `totalLikes`, `totalUnlike`, `userReactedId`, `userTweetId`, `status`, `created_at`, `updated_at`) VALUES
(1, 2, 0, 0, NULL, 1, 'Ative', '2021-11-22 08:06:30', '2021-11-22 08:06:30'),
(2, 1, 0, 0, NULL, 1, 'Ative', '2021-11-22 08:09:00', '2021-11-22 08:09:00');

-- --------------------------------------------------------

--
-- Estrutura da tabela `retweetsReactions`
--

CREATE TABLE `retweetsReactions` (
  `id` int(11) NOT NULL,
  `tweetId` int(11) DEFAULT NULL,
  `totalLike` int(11) DEFAULT NULL,
  `totalUnlike` int(11) DEFAULT NULL,
  `userReactedId` int(11) DEFAULT NULL,
  `status` varchar(50) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tweets`
--

CREATE TABLE `tweets` (
  `id` int(11) NOT NULL,
  `tweet` text NOT NULL,
  `userTweetId` int(11) DEFAULT NULL,
  `status` varchar(50) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp(),
  `totalLike` int(11) DEFAULT NULL,
  `totalUnlike` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tweets`
--

INSERT INTO `tweets` (`id`, `tweet`, `userTweetId`, `status`, `created_at`, `updated_at`, `totalLike`, `totalUnlike`) VALUES
(1, '0', NULL, 'Active', '2021-11-21 19:27:49', '2021-11-21 19:27:49', NULL, NULL),
(2, '0', NULL, 'Ative', '2021-11-21 19:35:27', '2021-11-21 19:35:27', NULL, NULL),
(3, '0', NULL, 'Ative', '2021-11-21 19:36:08', '2021-11-21 19:36:08', NULL, NULL),
(4, 'teste', NULL, 'Ative', '2021-11-21 19:37:17', '2021-11-21 19:37:17', NULL, NULL),
(5, 'teste', NULL, 'Ative', '2021-11-21 19:38:26', '2021-11-21 19:38:26', NULL, NULL),
(8, 'teste', 1, 'Ative', '2021-11-21 19:39:25', '2021-11-21 19:39:25', NULL, NULL),
(9, 'teste', 1, 'Ative', '2021-11-21 19:41:50', '2021-11-21 19:41:50', NULL, NULL),
(10, 'teste', 1, 'Ative', '2021-11-21 19:41:58', '2021-11-21 19:41:58', NULL, NULL),
(11, 'teste', 1, 'Ative', '2021-11-21 19:42:12', '2021-11-21 19:42:12', NULL, NULL),
(12, 'teste', 1, 'Ative', '2021-11-21 19:43:20', '2021-11-21 19:43:20', NULL, NULL),
(13, 'teste', 1, 'Ative', '2021-11-21 19:43:34', '2021-11-21 19:43:34', NULL, NULL),
(14, 'teste', 1, 'Ative', '2021-11-21 19:44:28', '2021-11-21 19:44:28', NULL, NULL),
(15, 'teste', 1, 'Ative', '2021-11-21 19:49:55', '2021-11-21 19:49:55', NULL, NULL),
(16, 'teste', 1, 'Ative', '2021-11-21 19:50:24', '2021-11-21 19:50:24', NULL, NULL),
(17, 'teste', 1, 'Ative', '2021-11-21 19:57:50', '2021-11-21 19:57:50', NULL, NULL),
(20, 'Olá Novo Mundo!', 1, 'Ative', '2021-11-22 00:05:12', '2021-11-22 00:05:12', 4, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tweetsComments`
--

CREATE TABLE `tweetsComments` (
  `id` int(11) NOT NULL,
  `tweetId` int(11) DEFAULT NULL,
  `totalLike` int(11) DEFAULT NULL,
  `totalUnlike` int(11) DEFAULT NULL,
  `commentary` text NOT NULL,
  `userCommentId` int(11) DEFAULT NULL,
  `status` varchar(50) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tweetsComments`
--

INSERT INTO `tweetsComments` (`id`, `tweetId`, `totalLike`, `totalUnlike`, `commentary`, `userCommentId`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 0, 0, 'teste', 1, 'Ative', '2021-11-22 08:24:38', '2021-11-22 08:24:38');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tweetsReactions`
--

CREATE TABLE `tweetsReactions` (
  `id` int(11) NOT NULL,
  `tweetId` int(11) DEFAULT NULL,
  `userReactedId` int(11) DEFAULT NULL,
  `status` varchar(50) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp(),
  `reactionTypeId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tweetsReactions`
--

INSERT INTO `tweetsReactions` (`id`, `tweetId`, `userReactedId`, `status`, `created_at`, `updated_at`, `reactionTypeId`) VALUES
(1, 20, 1, 'Active', '2021-11-22 07:36:57', '2021-11-22 07:36:57', NULL),
(2, 20, 1, 'Active', '2021-11-22 07:38:43', '2021-11-22 07:38:43', NULL),
(3, 20, 1, 'Active', '2021-11-22 07:41:54', '2021-11-22 07:41:54', NULL),
(4, 20, 1, 'Active', '2021-11-22 07:42:12', '2021-11-22 07:42:12', NULL),
(7, 20, 1, 'Active', '2021-11-22 07:46:09', '2021-11-22 07:46:09', NULL),
(8, 20, 1, 'Active', '2021-11-22 07:47:10', '2021-11-22 07:47:10', NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nickname` varchar(250) NOT NULL,
  `password` varchar(150) NOT NULL,
  `status` varchar(50) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `nickname`, `password`, `status`, `created_at`, `updated_at`) VALUES
(1, 'teste', '$2b$08$rPoqqrXy3bNuHn48KD91pOiIzgK7OpIpbXlszNGCbKIjLle.375jS', 'Active', '2021-11-20 02:21:23', '2021-11-20 02:21:23');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `reactionsType`
--
ALTER TABLE `reactionsType`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `reactionType` (`reactionType`);

--
-- Índices para tabela `retweets`
--
ALTER TABLE `retweets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tweetRetweetedId` (`tweetRetweetedId`),
  ADD KEY `userReactedId` (`userReactedId`);

--
-- Índices para tabela `retweetsReactions`
--
ALTER TABLE `retweetsReactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tweetId` (`tweetId`),
  ADD KEY `userReactedId` (`userReactedId`);

--
-- Índices para tabela `tweets`
--
ALTER TABLE `tweets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userTweetId` (`userTweetId`);

--
-- Índices para tabela `tweetsComments`
--
ALTER TABLE `tweetsComments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tweetId` (`tweetId`),
  ADD KEY `userCommentId` (`userCommentId`);

--
-- Índices para tabela `tweetsReactions`
--
ALTER TABLE `tweetsReactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tweetId` (`tweetId`),
  ADD KEY `userReactedId` (`userReactedId`),
  ADD KEY `reactionTypeId` (`reactionTypeId`);

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nickname` (`nickname`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `reactionsType`
--
ALTER TABLE `reactionsType`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `retweets`
--
ALTER TABLE `retweets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `retweetsReactions`
--
ALTER TABLE `retweetsReactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tweets`
--
ALTER TABLE `tweets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de tabela `tweetsComments`
--
ALTER TABLE `tweetsComments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `tweetsReactions`
--
ALTER TABLE `tweetsReactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `retweets`
--
ALTER TABLE `retweets`
  ADD CONSTRAINT `retweets_ibfk_1` FOREIGN KEY (`tweetRetweetedId`) REFERENCES `tweets` (`id`),
  ADD CONSTRAINT `retweets_ibfk_2` FOREIGN KEY (`userReactedId`) REFERENCES `users` (`id`);

--
-- Limitadores para a tabela `retweetsReactions`
--
ALTER TABLE `retweetsReactions`
  ADD CONSTRAINT `retweetsReactions_ibfk_1` FOREIGN KEY (`tweetId`) REFERENCES `tweets` (`id`),
  ADD CONSTRAINT `retweetsReactions_ibfk_2` FOREIGN KEY (`userReactedId`) REFERENCES `users` (`id`);

--
-- Limitadores para a tabela `tweets`
--
ALTER TABLE `tweets`
  ADD CONSTRAINT `tweets_ibfk_1` FOREIGN KEY (`userTweetId`) REFERENCES `users` (`id`);

--
-- Limitadores para a tabela `tweetsComments`
--
ALTER TABLE `tweetsComments`
  ADD CONSTRAINT `tweetsComments_ibfk_1` FOREIGN KEY (`tweetId`) REFERENCES `tweets` (`id`),
  ADD CONSTRAINT `tweetsComments_ibfk_2` FOREIGN KEY (`userCommentId`) REFERENCES `users` (`id`);

--
-- Limitadores para a tabela `tweetsReactions`
--
ALTER TABLE `tweetsReactions`
  ADD CONSTRAINT `tweetsReactions_ibfk_1` FOREIGN KEY (`tweetId`) REFERENCES `tweets` (`id`),
  ADD CONSTRAINT `tweetsReactions_ibfk_2` FOREIGN KEY (`userReactedId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `tweetsReactions_ibfk_3` FOREIGN KEY (`reactionTypeId`) REFERENCES `reactionsType` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
