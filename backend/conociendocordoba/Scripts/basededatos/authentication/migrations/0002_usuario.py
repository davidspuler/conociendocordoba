# Generated by Django 4.2.1 on 2023-06-06 13:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('idUsuario', models.AutoField(primary_key=True, serialize=False)),
                ('Nombre', models.CharField(max_length=150)),
                ('Apellido', models.CharField(max_length=150)),
                ('FechaNacimiento', models.DateField()),
                ('CorreoElectronico', models.CharField(max_length=150)),
                ('admin', models.BooleanField()),
                ('password', models.CharField(max_length=150)),
                ('login', models.BooleanField()),
            ],
            options={
                'verbose_name': 'Listado de usuarios',
                'verbose_name_plural': 'Usuarios',
                'db_table': 'Usuario',
            },
        ),
    ]
