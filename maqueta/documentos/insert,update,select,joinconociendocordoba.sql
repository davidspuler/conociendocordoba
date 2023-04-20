use conociendocordoba;


INSERT INTO `conociendocordoba`.`usuario` (`idusuario`, `Nombre`, `Apellido`) VALUES ('2', 'candela', 'lucero');
INSERT INTO `conociendocordoba`.`usuario` (`idusuario`, `Nombre`, `Apellido`) VALUES ('3', 'nicolas', 'ruiz');
INSERT INTO `conociendocordoba`.`usuario` (`idusuario`, `Nombre`, `Apellido`) VALUES ('4', 'gustavo', 'rodriguez');
INSERT INTO `conociendocordoba`.`usuario` (`idusuario`, `Nombre`, `Apellido`) VALUES ('5', 'nicolas', 'rodriguez');
INSERT INTO `conociendocordoba`.`usuario` (`idusuario`, `Nombre`, `Apellido`) VALUES ('6', 'juan', 'perez');
INSERT INTO `conociendocordoba`.`usuario` (`idusuario`, `Nombre`, `Apellido`) VALUES ('7', 'francisco', 'olivares');
INSERT INTO `conociendocordoba`.`usuario` (`idusuario`, `Nombre`, `Apellido`) VALUES ('8', 'gabriela', 'aldoney');
INSERT INTO `conociendocordoba`.`usuario` (`idusuario`, `Nombre`, `Apellido`) VALUES ('9', 'gizelle', 'spuler');
INSERT INTO `conociendocordoba`.`usuario` (`idusuario`, `Nombre`, `Apellido`) VALUES ('10', 'juli', 'nieva');

------------------------------

INSERT INTO `conociendocordoba`.`registro` (`idregistro`, `Nombre_usuario`, `Apellido_usuario`, `Mail`, `Contraseña`, `id_usu`) VALUES ('2', 'candela', 'lucero', 'candel@gmail.com', '7884651', '2');
INSERT INTO `conociendocordoba`.`registro` (`idregistro`, `Nombre_usuario`, `Apellido_usuario`, `Mail`, `Contraseña`, `id_usu`) VALUES ('3', 'nicolas', 'ruiz', 'nicolasruiz1234@gmail.com', '@D2345', '3');
INSERT INTO `conociendocordoba`.`registro` (`idregistro`, `Nombre_usuario`, `Apellido_usuario`, `Mail`, `Contraseña`, `id_usu`) VALUES ('4', 'gustavo', 'rodriguez', 'gustavoriver@gmail.com', '2184687', '4');
INSERT INTO `conociendocordoba`.`registro` (`idregistro`, `Nombre_usuario`, `Apellido_usuario`, `Mail`, `Contraseña`, `id_usu`) VALUES ('5', 'nicolas', 'rodriguez', 'nicolasrodriguez234@gmail.com', '4528963@', '5');
INSERT INTO `conociendocordoba`.`registro` (`idregistro`, `Nombre_usuario`, `Apellido_usuario`, `Mail`, `Contraseña`, `id_usu`) VALUES ('6', 'juan', 'perez', 'juanboca@hotmail.com', '35546juan', '6');
INSERT INTO `conociendocordoba`.`registro` (`idregistro`, `Nombre_usuario`, `Apellido_usuario`, `Mail`, `Contraseña`, `id_usu`) VALUES ('7', 'francisco', 'olivares', 'francarp@hotmail.com', '14234235', '7');
INSERT INTO `conociendocordoba`.`registro` (`idregistro`, `Nombre_usuario`, `Apellido_usuario`, `Mail`, `Contraseña`, `id_usu`) VALUES ('8', 'gabriela', 'aldoney', 'gabialdoney23@gmail.com', 'gabi234@', '8');
INSERT INTO `conociendocordoba`.`registro` (`idregistro`, `Nombre_usuario`, `Apellido_usuario`, `Mail`, `Contraseña`, `id_usu`) VALUES ('9', 'gizelle', 'spuler', 'gize82@hotmail.com', '32423523gize', '9');
INSERT INTO `conociendocordoba`.`registro` (`idregistro`, `Nombre_usuario`, `Apellido_usuario`, `Mail`, `Contraseña`, `id_usu`) VALUES ('10', 'juli', 'nieva', 'nievaju@yahoo.com', '@23525', '10');

--------------------------------------------------------------------------------------------------------

UPDATE `conociendocordoba`.`registro` SET `Mail` = 'cnlucero@gmail.com' WHERE (`idregistro` = '2') and (`id_usu` = '2');
UPDATE `conociendocordoba`.`registro` SET `Mail` = 'gustavo258@gmail.com' WHERE (`idregistro` = '4') and (`id_usu` = '4');
UPDATE `conociendocordoba`.`registro` SET `Contraseña` = 'davidspuler@2541' WHERE (`idregistro` = '1') and (`id_usu` = '1');
UPDATE `conociendocordoba`.`registro` SET `Contraseña` = 'juli234@gart' WHERE (`idregistro` = '10') and (`id_usu` = '10');

-------------------------------------------------------------


SELECT Contraseña FROM registro WHERE Apellido_usuario = "spuler";
SELECT Mail FROM registro where Nombre_usuario = "nicolas";


-----------------------------------------------------------------------------

select * from registro JOIN beneficio ON registro.idregistro = beneficio.idregistro;

