CREATE DATABASE pern-prueba;

CREATE TABLE usuario (usuario_id SERIAL PRIMARY KEY,name VARCHAR(255));

CREATE TABLE connection
(
    user1_id int NOT NULL,
    user2_id int NOT NULL,
    CONSTRAINT PK_connection PRIMARY KEY
    (
        user1_id,
        user2_id
    ),
    FOREIGN KEY (user1_id) REFERENCES usuario (usuario_id),
    FOREIGN KEY (user2_id) REFERENCES usuario (usuario_id)
);