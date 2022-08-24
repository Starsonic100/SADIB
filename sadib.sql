-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: sadib
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tutor`
--

DROP TABLE IF EXISTS `tutor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tutor` (
  `id_tutor` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) DEFAULT NULL,
  `apellidop` varchar(15) NOT NULL,
  `apellidom` varchar(15) NOT NULL,
  `correo` varchar(30) DEFAULT NULL,
  `telefono` varchar(10) NOT NULL,
  PRIMARY KEY (`id_tutor`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tutor`
--

LOCK TABLES `tutor` WRITE;
/*!40000 ALTER TABLE `tutor` DISABLE KEYS */;
/*!40000 ALTER TABLE `tutor` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Table structure for table `bitacora`
--

DROP TABLE IF EXISTS `bitacora`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bitacora` (
  `id_in` int NOT NULL AUTO_INCREMENT,
  `id_psic` varchar(10) NOT NULL,
  `id_paci` int NOT NULL,
  `id_prueba` int NOT NULL,
  `dateIn` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `dateOut` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_in`),
  KEY `Ps` (`id_psic`),
  KEY `Pa` (`id_paci`),
  KEY `Pr` (`id_prueba`),
  CONSTRAINT `Pa` FOREIGN KEY (`id_paci`) REFERENCES `paciente` (`id_paci`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Pr` FOREIGN KEY (`id_prueba`) REFERENCES `prueba` (`id_prueba`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Ps` FOREIGN KEY (`id_psic`) REFERENCES `psicologo` (`id_psic`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bitacora`
--

LOCK TABLES `bitacora` WRITE;
/*!40000 ALTER TABLE `bitacora` DISABLE KEYS */;
/*!40000 ALTER TABLE `bitacora` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paciente`
--

DROP TABLE IF EXISTS `paciente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paciente` (
  `id_paci` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) DEFAULT NULL,
  `apellidop` varchar(15) NOT NULL,
  `apellidom` varchar(15) NOT NULL,
  `fecha_nac` date NOT NULL,
  `genero` varchar(9) NOT NULL,
  `correo` varchar(30) DEFAULT NULL,
  `telefono` varchar(10) DEFAULT NULL,
  `id_tutor` int NOT NULL,
  PRIMARY KEY (`id_paci`),
  KEY `FKPT` (`id_tutor`),
  CONSTRAINT `FKPT` FOREIGN KEY (`id_tutor`) REFERENCES `tutor` (`id_tutor`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paciente`
--

LOCK TABLES `paciente` WRITE;
/*!40000 ALTER TABLE `paciente` DISABLE KEYS */;
/*!40000 ALTER TABLE `paciente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prueba`
--

DROP TABLE IF EXISTS `prueba`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prueba` (
  `id_prueba` int NOT NULL,
  `nombre` varchar(15) NOT NULL,
  PRIMARY KEY (`id_prueba`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prueba`
--

LOCK TABLES `prueba` WRITE;
/*!40000 ALTER TABLE `prueba` DISABLE KEYS */;
INSERT INTO `prueba` VALUES (2014921,'HouseTreePerson'),(2014922,'TAMAI');
/*!40000 ALTER TABLE `prueba` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `psicologo`
--

DROP TABLE IF EXISTS `psicologo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `psicologo` (
  `id_psic` varchar(10) NOT NULL,
  `nombre` varchar(35) NOT NULL,
  `apellidop` varchar(15) NOT NULL,
  `apellidom` varchar(15) NOT NULL,
  `correo` varchar(30) NOT NULL,
  `telefono` varchar(10) NOT NULL,
  `contrasenia` varchar(40) NOT NULL,
  PRIMARY KEY (`id_psic`),
  UNIQUE KEY `correo` (`correo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `psicologo`
--

LOCK TABLES `psicologo` WRITE;
/*!40000 ALTER TABLE `psicologo` DISABLE KEYS */;
/*!40000 ALTER TABLE `psicologo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resultado`
--

DROP TABLE IF EXISTS `resultado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `resultado` (
  `id_resul` int NOT NULL AUTO_INCREMENT,
  `id_prueba` int NOT NULL,
  `id_psic` varchar(10) DEFAULT NULL,
  `id_paci` int NOT NULL,
  `resultado` blob NOT NULL,
  PRIMARY KEY (`id_resul`),
  KEY `FKRePa` (`id_paci`),
  KEY `FKRePr` (`id_prueba`),
  KEY `FKPsRe` (`id_psic`),
  CONSTRAINT `FKPsRe` FOREIGN KEY (`id_psic`) REFERENCES `psicologo` (`id_psic`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FKRePa` FOREIGN KEY (`id_paci`) REFERENCES `paciente` (`id_paci`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FKRePr` FOREIGN KEY (`id_prueba`) REFERENCES `prueba` (`id_prueba`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resultado`
--

LOCK TABLES `resultado` WRITE;
/*!40000 ALTER TABLE `resultado` DISABLE KEYS */;
/*!40000 ALTER TABLE `resultado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `token`
--

DROP TABLE IF EXISTS `token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `token` (
  `id_token` int NOT NULL AUTO_INCREMENT,
  `token` varchar(30) NOT NULL,
  `id_psic` varchar(10) DEFAULT NULL,
  `id_paci` int NOT NULL,
  `id_prueba` int NOT NULL,
  `fecha` datetime NOT NULL,
  `estado` varchar(8) NOT NULL,
  PRIMARY KEY (`id_token`),
  KEY `FKToPa` (`id_paci`),
  KEY `FKToPr` (`id_prueba`),
  KEY `FKPsTo` (`id_psic`),
  CONSTRAINT `FKPsTo` FOREIGN KEY (`id_psic`) REFERENCES `psicologo` (`id_psic`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FKToPa` FOREIGN KEY (`id_paci`) REFERENCES `paciente` (`id_paci`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FKToPr` FOREIGN KEY (`id_prueba`) REFERENCES `prueba` (`id_prueba`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `token`
--

LOCK TABLES `token` WRITE;
/*!40000 ALTER TABLE `token` DISABLE KEYS */;
/*!40000 ALTER TABLE `token` ENABLE KEYS */;
UNLOCK TABLES;

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-23 18:31:53