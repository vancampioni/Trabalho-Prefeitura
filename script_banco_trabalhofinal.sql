CREATE DATABASE  IF NOT EXISTS `dados212n` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `dados212n`;

--
-- Table structure for table `prefeitura`
--

DROP TABLE IF EXISTS `prefeitura`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prefeitura` (
  `pre_codigo` int NOT NULL AUTO_INCREMENT,
  `pre_ativoinativo` char(1) DEFAULT NULL,
  `pre_prefeito` varchar(20) DEFAULT NULL,
  `pre_partido` varchar(6) DEFAULT NULL,
  `pre_cidade` varchar(20) DEFAULT NULL,
  `pre_estados` char(2) DEFAULT NULL,
  `pre_habitantes` int DEFAULT NULL,
  `pre_aniversario` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`pre_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `autores`
--

LOCK TABLES `prefeitura` WRITE;
/*!40000 ALTER TABLE `prefeitura` DISABLE KEYS */;
INSERT INTO `prefeitura` VALUES (1,'A','Silvio Costa','PSDB','Raccon','SP',1345600,'29-08-1850'),(2,'A','Anastacia Goulart','PT','Zaun','MG', 600300, '12/05/1800'),(3,'A','Virgínia Bittencourt','PV','Piltover','AC', 540120, '05/06/1755');
/*!40000 ALTER TABLE `prefeitura` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `funcionario`
--

DROP TABLE IF EXISTS `funcionario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `funcionario` (
  `fun_codigo` int NOT NULL AUTO_INCREMENT,
  `fun_ativoinativo` char(1) DEFAULT NULL,
  `fun_nome` varchar(25) DEFAULT NULL,
  `fun_cargo` varchar(15) DEFAULT NULL,
  `fun_depto` varchar(10) DEFAULT NULL,
  `fun_registro` varchar(6) DEFAULT NULL,
  `pre_codigo` int DEFAULT NULL,
  PRIMARY KEY (`fun_codigo`),
  KEY `fk_prefeitura_funcionario_idx` (`pre_codigo`),
  CONSTRAINT `fk_prefeitura_funcionario` FOREIGN KEY (`pre_codigo`) REFERENCES `prefeitura` (`pre_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `funcionario`
--

LOCK TABLES `funcionario` WRITE;
/*!40000 ALTER TABLE `funcionario` DISABLE KEYS */;
INSERT INTO `funcionario` VALUES (1,'A','Maria Duarte','Auxiliar','Adm','123456',2),(2,'I','Marcos Castro','Gerais','Limpeza','654321',1),(3,'A','Dionisio Souza','Auxiliar','Gabinete','789456',3);
/*!40000 ALTER TABLE `funcionario` ENABLE KEYS */;
UNLOCK TABLES;

