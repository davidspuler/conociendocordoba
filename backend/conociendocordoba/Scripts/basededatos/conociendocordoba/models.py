from django.db import models


class Ciudades(models.Model):
    idciudad = models.AutoField(db_column='idCiudad', primary_key=True)  # Field name made lowercase.
    nombreciudad = models.CharField(db_column='NombreCiudad', max_length=150)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'ciudades'



class Productos(models.Model):
    idproducto = models.AutoField(db_column='idProducto', primary_key=True)  # Field name made lowercase.
    nombreproducto = models.CharField(db_column='NombreProducto', max_length=150)  # Field name made lowercase.
    descripcion = models.CharField(db_column='Descripcion', max_length=500)  # Field name made lowercase.
    fecha = models.DateField(db_column='Fecha')  # Field name made lowercase.
    precio = models.IntegerField(db_column='Precio')  # Field name made lowercase.
    imagen = models.ImageField(upload_to='img-basededatos/', blank=True, null=True)
    idciudad = models.ForeignKey(Ciudades, models.DO_NOTHING, db_column='idCiudad')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'productos'
        
        
class Historialcompras(models.Model):
    idhistorial = models.AutoField(db_column='idHistorial', primary_key=True)  # Field name made lowercase.
    idproducto = models.ForeignKey('Productos', models.DO_NOTHING, db_column='idProducto')  # Field name made lowercase.
    fechacompra = models.DateField(db_column='FechaCompra')  # Field name made lowercase.
    preciounitario = models.IntegerField(db_column='PrecioUnitario')  # Field name made lowercase.
    preciototal = models.IntegerField(db_column='PrecioTotal')  # Field name made lowercase.
    estado = models.CharField(db_column='Estado', max_length=10)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'historialcompras'
        
class Carrito(models.Model):
    idcarrito = models.AutoField(db_column='idCarrito', primary_key=True)  # Field name made lowercase.
    idproducto = models.ForeignKey('Productos', models.DO_NOTHING, db_column='idProducto')  # Field name made lowercase.
    cantidad = models.IntegerField(db_column='Cantidad')  # Field name made lowercase.
    preciounitario = models.IntegerField(db_column='PrecioUnitario')  # Field name made lowercase.
    preciototal = models.IntegerField(db_column='PrecioTotal')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'carrito'





class Facturas(models.Model):
    idfactura = models.AutoField(db_column='idFactura', primary_key=True)  # Field name made lowercase.
    idcarrito = models.ForeignKey(Carrito, models.DO_NOTHING, db_column='idCarrito')  # Field name made lowercase.
    fechafactura = models.DateField(db_column='FechaFactura')  # Field name made lowercase.
    montototal = models.IntegerField(db_column='MontoTotal')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'facturas'




