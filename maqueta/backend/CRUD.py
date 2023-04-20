# CRUD

import mysql.connector

class Conectar():

    def __init__(self) -> None:
        try:
            self.conexion = mysql.connector.connect (
                host = 'localhost',
                port = 3306,
                user = 'root',
                password = '',
                db= 'conociendocordobaBD'
            )

        except mysql.connector.Error as descripcionError:
            print ("No se pudo conectar", descripcionError)

# CREATE

    def InsertarValor (self, Nombre_y_Apellido_usuario, Mail, Contraseña):
        if self.conexion.is_connected ():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL = "INSERT INTO registro VALUES (%s, %s)"
                data = (Nombre_y_Apellido_usuario, Mail, Contraseña)

                cursor.execute (sentenciaSQL, data)
                self.conexion.commit ()
                self.conexion.close ()

            except:
                print ("No se pudo conectar a la base de datos")

# READ

    def BuscarObjeto (self, Nombre_y_Apellido_usuario):
        if self.conexion.is_connected ():
            try:
                cursor = self.conexion.cursor ()
                sentenciaSQL = "SELECT * from registro where Nombre_y_Apellido_usuario like %s"

                cursor.execute (sentenciaSQL)
                resultadoREAD = cursor.fetchall ()
                self.conexion.close ()

                return resultadoREAD
                
            except:
                print ("No se pudo conectar a la base de datos")

# UPDATE

    def ActualizarValor (self, Nombre_y_Apellido_usuario):
        if self.conexion.is_connected ():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL = "UPDATE INTO registro VALUES (%s)"
                data = (Nombre_y_Apellido_usuario)

                cursor.execute (sentenciaSQL, data)
                self.conexion.commit ()
                self.conexion.close ()

            except:
                print ("No se pudo conectar a la base de datos")

# DELETE

    def EliminarObjeto (self, ID):
        if self.conexion.is_connected ():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL = "DELETE from registro where id= ID"

                cursor.execute (sentenciaSQL)
                self.conexion.commit ()
                self.conexion.close ()

            except:
                print ("No se pudo conectar a la base de datos")