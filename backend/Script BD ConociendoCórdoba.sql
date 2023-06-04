create database conociendocórdoba;

use conociendocórdoba;

CREATE TABLE Ciudades (
  idCiudad INT AUTO_INCREMENT PRIMARY KEY,
  NombreCiudad VARCHAR(150) NOT NULL
);

CREATE TABLE Productos (
  idProducto INT AUTO_INCREMENT PRIMARY KEY,
  NombreProducto VARCHAR(150) NOT NULL,
  Descripcion VARCHAR(500) NOT NULL,
  Fecha DATE NOT NULL,
  Precio INT NOT NULL,
  idCiudad INT NOT NULL,
  FOREIGN KEY (idCiudad) REFERENCES Ciudades (idCiudad)
);


CREATE TABLE Carrito (
  idCarrito INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  idProducto INT NOT NULL,
  Cantidad INT NOT NULL,
  PrecioUnitario INT NOT NULL,
  PrecioTotal INT NOT NULL,
  FOREIGN KEY (idProducto) REFERENCES Productos (idProducto)
);

CREATE TABLE HistorialCompras (
  idHistorial INT AUTO_INCREMENT PRIMARY KEY,
  idProducto INT NOT NULL,
  FechaCompra DATE NOT NULL,
  PrecioUnitario INT NOT NULL,
  PrecioTotal INT NOT NULL,
  Estado ENUM('Pendiente', 'En proceso', 'Entregado', 'Cancelado') NOT NULL,
  FOREIGN KEY (idProducto) REFERENCES Productos (idProducto)
);

CREATE TABLE Facturas (
  idFactura INT AUTO_INCREMENT PRIMARY KEY,
  idCarrito INT NOT NULL,
  FechaFactura DATE NOT NULL,
  MontoTotal INT NOT NULL,
  FOREIGN KEY (idCarrito) REFERENCES Carrito (idCarrito)
);