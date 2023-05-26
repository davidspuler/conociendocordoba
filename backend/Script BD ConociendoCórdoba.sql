create database ConociendoCórdoba;

use ConociendoCórdoba;


CREATE TABLE Usuarios (
  idUsuario INT AUTO_INCREMENT PRIMARY KEY,
  Nombre VARCHAR(150) NOT NULL,
  Apellido VARCHAR(150) NOT NULL,
  FechaNacimiento DATE NOT NULL,
  CorreoElectronico VARCHAR(150) NOT NULL,
  Genero ENUM('Masculino', 'Femenino', 'Otro') NOT NULL,
  Contraseña VARCHAR(150) NOT NULL
);

CREATE TABLE Administradores (
  idAdmin INT AUTO_INCREMENT PRIMARY KEY,
  Nombre VARCHAR(150) NOT NULL,
  Apellido VARCHAR(150) NOT NULL,
  FechaNacimiento DATE NOT NULL,
  CorreoElectronico VARCHAR(150) NOT NULL,
  Genero ENUM('Masculino', 'Femenino', 'Otro') NOT NULL,
  Contraseña VARCHAR(150) NOT NULL
);

CREATE TABLE AdminUsuarios (
  idAdmin INT NOT NULL,
  idUsuario INT NOT NULL,
  FOREIGN KEY (idAdmin) REFERENCES Administradores (idAdmin),
  FOREIGN KEY (idUsuario) REFERENCES Usuarios (idUsuario),
  PRIMARY KEY (idAdmin, idUsuario)
);

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
  idAdmin INT NOT NULL,
  idUsuario INT NOT NULL,
  FOREIGN KEY (idUsuario) REFERENCES Usuarios (idUsuario),
  FOREIGN KEY (idCiudad) REFERENCES Ciudades (idCiudad),
  FOREIGN KEY (idAdmin) REFERENCES Administradores (idAdmin)
);


CREATE TABLE Carrito (
  idCarrito INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  idProducto INT NOT NULL,
  idUsuario INT NOT NULL,
  Cantidad INT NOT NULL,
  PrecioUnitario INT NOT NULL,
  PrecioTotal INT NOT NULL,
  FOREIGN KEY (idUsuario) REFERENCES Usuarios (idUsuario),
  FOREIGN KEY (idProducto) REFERENCES Productos (idProducto)
);

CREATE TABLE HistorialCompras (
  idHistorial INT AUTO_INCREMENT PRIMARY KEY,
  idUsuario INT NOT NULL,
  idProducto INT NOT NULL,
  FechaCompra DATE NOT NULL,
  PrecioUnitario INT NOT NULL,
  PrecioTotal INT NOT NULL,
  Estado ENUM('Pendiente', 'En proceso', 'Entregado', 'Cancelado') NOT NULL,
  FOREIGN KEY (idUsuario) REFERENCES Usuarios (idUsuario),
  FOREIGN KEY (idProducto) REFERENCES Productos (idProducto)
);

CREATE TABLE Facturas (
  idFactura INT AUTO_INCREMENT PRIMARY KEY,
  idCarrito INT NOT NULL,
  FechaFactura DATE NOT NULL,
  MontoTotal INT NOT NULL,
  FOREIGN KEY (idCarrito) REFERENCES Carrito (idCarrito)
);