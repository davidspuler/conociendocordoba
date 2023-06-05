from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin

from .models import Usuario


@admin.register(get_user_model())
class CustomUserAdmin(UserAdmin):
    pass

class UsuarioAdmin(admin.ModelAdmin):
    list_display = ("idUsuario","Nombre","Apellido","FechaNacimiento", "CorreoElectronico", "admin", "password")

admin.site.register(Usuario,UsuarioAdmin)
