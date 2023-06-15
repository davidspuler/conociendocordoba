use conociendocórdoba;

SELECT * FROM productos;
SELECT * FROM usuario;
ALTER TABLE Productos
ADD imagen varchar(100);

UPDATE productos SET Precio = 14000 WHERE idProducto = 8;


ALTER TABLE Productos
ADD COLUMN usuario_id INT;

-- Agregar la relación ForeignKey
ALTER TABLE Productos
ADD CONSTRAINT fk_productos_usuario
FOREIGN KEY (usuario_id)
REFERENCES Usuario(idUsuario)
ON DELETE CASCADE;