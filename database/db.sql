/*VARCHAR(200), Aqui guardaremos la direccion de la imagen que estara guarda en un servicio externo para economizar recursos*/
/*created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP /*defaul current_timestamp: PARA QUE POR DEFECTO APAREZCA LA FECHA AL GUARDAR UN DATO SIN NECESIDAD DE DARLA*/
/*nombre de base de datos: games_db*/
/*nombre de tabla: games*/
CREATE DATABASE games_db;
USE games_db;

CREATE TABLE games(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180),
    description VARCHAR(255),
    image VARCHAR(200), 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE games;