# Generated by Django 4.2.1 on 2023-05-19 22:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Administradores',
            fields=[
                ('idadmin', models.AutoField(db_column='idAdmin', primary_key=True, serialize=False)),
                ('nombre', models.CharField(db_column='Nombre', max_length=150)),
                ('apellido', models.CharField(db_column='Apellido', max_length=150)),
                ('fechanacimiento', models.DateField(db_column='FechaNacimiento')),
                ('correoelectronico', models.CharField(db_column='CorreoElectronico', max_length=150)),
                ('genero', models.CharField(db_column='Genero', max_length=9)),
                ('contraseña', models.CharField(db_column='Contraseña', max_length=150)),
            ],
            options={
                'db_table': 'administradores',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Carrito',
            fields=[
                ('idcarrito', models.AutoField(db_column='idCarrito', primary_key=True, serialize=False)),
                ('cantidad', models.IntegerField(db_column='Cantidad')),
                ('preciounitario', models.IntegerField(db_column='PrecioUnitario')),
                ('preciototal', models.IntegerField(db_column='PrecioTotal')),
            ],
            options={
                'db_table': 'carrito',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Ciudades',
            fields=[
                ('idciudad', models.AutoField(db_column='idCiudad', primary_key=True, serialize=False)),
                ('nombreciudad', models.CharField(db_column='NombreCiudad', max_length=150)),
            ],
            options={
                'db_table': 'ciudades',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Facturas',
            fields=[
                ('idfactura', models.AutoField(db_column='idFactura', primary_key=True, serialize=False)),
                ('fechafactura', models.DateField(db_column='FechaFactura')),
                ('montototal', models.IntegerField(db_column='MontoTotal')),
            ],
            options={
                'db_table': 'facturas',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Historialcompras',
            fields=[
                ('idhistorial', models.AutoField(db_column='idHistorial', primary_key=True, serialize=False)),
                ('fechacompra', models.DateField(db_column='FechaCompra')),
                ('preciounitario', models.IntegerField(db_column='PrecioUnitario')),
                ('preciototal', models.IntegerField(db_column='PrecioTotal')),
                ('estado', models.CharField(db_column='Estado', max_length=10)),
            ],
            options={
                'db_table': 'historialcompras',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Productos',
            fields=[
                ('idproducto', models.AutoField(db_column='idProducto', primary_key=True, serialize=False)),
                ('nombreproducto', models.CharField(db_column='NombreProducto', max_length=150)),
                ('descripcion', models.CharField(db_column='Descripcion', max_length=500)),
                ('fecha', models.DateField(db_column='Fecha')),
                ('precio', models.IntegerField(db_column='Precio')),
            ],
            options={
                'db_table': 'productos',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Usuarios',
            fields=[
                ('idusuario', models.AutoField(db_column='idUsuario', primary_key=True, serialize=False)),
                ('nombre', models.CharField(db_column='Nombre', max_length=150)),
                ('apellido', models.CharField(db_column='Apellido', max_length=150)),
                ('fechanacimiento', models.DateField(db_column='FechaNacimiento')),
                ('correoelectronico', models.CharField(db_column='CorreoElectronico', max_length=150)),
                ('genero', models.CharField(db_column='Genero', max_length=9)),
                ('contraseña', models.CharField(db_column='Contraseña', max_length=150)),
            ],
            options={
                'db_table': 'usuarios',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Adminusuarios',
            fields=[
                ('idadmin', models.OneToOneField(db_column='idAdmin', on_delete=django.db.models.deletion.DO_NOTHING, primary_key=True, serialize=False, to='conociendocordoba.administradores')),
            ],
            options={
                'db_table': 'adminusuarios',
                'managed': False,
            },
        ),
    ]