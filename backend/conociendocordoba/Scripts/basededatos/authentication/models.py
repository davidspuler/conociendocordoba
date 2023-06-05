from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    email = models.EmailField(
        max_length=150, unique=True)

USERNAME_FIELD = 'email'  # new
REQUIRED_FIELDS = ['username', 'password']
    

class Usuario(models.Model):
    idUsuario = models.AutoField(primary_key=True)
    Nombre = models.CharField(max_length=150)
    Apellido = models.CharField(max_length=150)
    FechaNacimiento = models.DateField()
    CorreoElectronico = models.CharField(max_length=150)
    admin = models.BooleanField()
    password = models.CharField(max_length=150)
    login = models.BooleanField()

    class Meta:
        db_table="Usuario"
        verbose_name="Listado de usuarios"
        verbose_name_plural="Usuarios"
    def __unicode__(self):
        return self.Nombre
    def __str__(self):
        return self.Nombre
    