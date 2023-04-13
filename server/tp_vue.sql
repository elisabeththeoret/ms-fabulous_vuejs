-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : jeu. 13 avr. 2023 à 03:40
-- Version du serveur :  5.7.34
-- Version de PHP : 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `tp_vue`
--
CREATE DATABASE IF NOT EXISTS `tp_vue` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `tp_vue`;

-- --------------------------------------------------------

--
-- Structure de la table `pastries`
--

CREATE TABLE `pastries` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `category` varchar(255) DEFAULT NULL,
  `description` text NOT NULL,
  `price` double NOT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `pastries`
--

INSERT INTO `pastries` (`id`, `name`, `category`, `description`, `price`, `photo`, `createdAt`, `updatedAt`) VALUES
(1, 'Croissant', 'Croissants & Co.', 'Croissant 100% pur beurre, roulé à la main par nos artisans touriers. Cette pâte est poussée et levée tous les jours pour ensuite être cuite à la perfection.', 12, 'croissants.jpeg', '2023-04-12 00:00:00', '2023-04-13 03:27:50'),
(2, 'Millefeuilles individuels', 'Classiques', 'Nos délicieux millefeuilles sont préparés avec soin à partir de pâte feuilletée et de crème pâtissière ou de crème fouettée entre les étages. Le dessus est garni d’un doux fondant à la vanille. Ils sont un dessert qui fera le bonheur des dents sucrées.', 28.5, 'millefeuilles-individuels.jpeg', '2023-04-12 00:00:00', '2023-04-13 03:28:17'),
(3, 'Meringues', 'Classiques', 'Décorez vos desserts favoris ou concassez ces délicates meringues sur de la crème glacée.', 10.5, 'meringues.jpeg', '2023-04-12 00:00:00', '2023-04-13 03:30:51'),
(4, 'Brioche Assiette Pommes', 'Croissants & Co.', 'Brioche familiale à saveur de pommes à partager.', 6.5, 'brioche-assiette-pommes.jpeg', '2023-04-12 00:00:00', '2023-04-13 03:31:09'),
(5, 'Gâteau St-Honoré', 'Gâteau sur mesure', 'Classique de la pâtisserie française à son meilleur, sur une base de pâte feuilletée amalgamée à une pâte à chou,vous retrouverez une onctueuse crème pâtissière vanillée surmontée d\'une crème fouettée, en son centre une salade de fruits maison. Ce gâteau est garni de copeaux de chocolat noir ainsi que de cerises au marasquin.', 29, 'gateau-st-honore.jpeg', '2023-04-12 00:00:00', '2023-04-13 03:32:44'),
(6, 'Éclairs', 'Classiques', 'Les éclairs sont un excellent dessert français, à base de pâte à choux, fourrés de crème fouettée ou de crème pâtissière et recouverts d’un délicieux fondant au chocolat. La touche parfaite pour terminer votre repas en douceur.', 26.1, NULL, '2023-04-12 00:00:00', '2023-04-12 00:00:00'),
(7, 'Tarte aux bleuets', 'Tartes', 'Tarte aux bleuets plus bleue que nature. Goûtez le vrai!', 9.95, 'tarte-aux-bleuets.jpeg', '2023-04-12 00:00:00', '2023-04-13 03:33:21'),
(8, 'Chocolatine', 'Croissants & Co.', 'Pâte à croissant 100% pur beurre garnie de chocolat noir bâton. C\'est le délice des grands comme des petits!', 16, 'chocolatines.jpeg', '2023-04-12 00:00:00', '2023-04-13 03:33:04'),
(9, 'Chausson aux pommes', 'Croissants & Co.', 'Nos chaussons aux pommes sont faits à partir de pâte feuilletée, sont façonnés à la main et sont garnis de compote de pommes et de quartiers de pommes fraîches.', 23.7, 'chausson-aux-pommes.jpeg', '2023-04-13 03:25:57', '2023-04-13 03:25:57');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `pastries`
--
ALTER TABLE `pastries`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `pastries`
--
ALTER TABLE `pastries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
