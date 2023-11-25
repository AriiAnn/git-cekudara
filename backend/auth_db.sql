-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 25, 2023 at 06:06 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `auth_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `refresh_token` text DEFAULT NULL,
  `profile_image` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `refresh_token`, `profile_image`, `url`, `full_name`, `gender`, `createdAt`, `updatedAt`) VALUES
(2, 'John Doe', 'john@gmail.com', '$2b$10$xp6VYwckwTrjhUCWgf5X3u4lFZq/NDC0/PGPh9TFT0lDICNDriPla', NULL, '', '', '', '', '2021-10-31 15:18:26', '2021-11-02 03:51:10'),
(3, 'M.Ari', 'ari@gmail.com', '$2b$10$/wBoHeDM4nyxRCaXTSdqWuAyccfnA2GvMkih/JcOnNt1adjydTb6y', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsIm5hbWUiOiJNLkFyaSIsImVtYWlsIjoiYXJpQGdtYWlsLmNvbSIsImlhdCI6MTcwMDg4NjMxOCwiZXhwIjoxNzAwOTcyNzE4fQ.D_LoPrE99dP2ESq13dVm7O2W5uupP4vpnK3QtgfwGbw', 'rvdsrwvdsv', 'rvevdvd', 'muhammad ariansyah', 'laki laki', '2023-11-25 03:38:47', '2023-11-25 04:25:18'),
(6, 'M.Ari2', 'ari2@gmail.com', '$2b$10$T/Mpw4QkWftD.QfeDKv8KebFZmCFSrleg1aM2Hij4xyWIe02ikipe', NULL, '', '', '', '', '2023-11-25 04:03:37', '2023-11-25 04:03:37');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
