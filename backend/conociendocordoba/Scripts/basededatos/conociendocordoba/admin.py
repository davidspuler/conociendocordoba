from django.contrib import admin


from .models import Usuarios
from .models import Administradores
from .models import Adminusuarios
from .models import Ciudades
from .models import Productos
from .models import Historialcompras
from .models import Carrito
from .models import Facturas



class UsuariosAdmin(admin.ModelAdmin):
    list_display = ("idusuario", "nombre", "apellido", "fechanacimiento", "correoelectronico", "genero")
class AdministradoresAdmin(admin.ModelAdmin):
    list_display = ("idadmin","nombre", "apellido", "fechanacimiento", "correoelectronico", "genero")
class AdminusuariosAdmin(admin.ModelAdmin):
    list_display = ("idadmin","idusuario",)
class CiudadesAdmin(admin.ModelAdmin):
    list_display = ("idciudad","nombreciudad",)
class ProductosAdmin(admin.ModelAdmin):
    list_display = ("idproducto", "nombreproducto", "descripciongeneral", "fecha", "precio", "idusuario" ,"idciudad")
class HistorialcomprasAdmin(admin.ModelAdmin):
    list_display = ("idhistorial", "idusuario", "fechacompra", "preciounitario","preciototal","estado")    
class CarritoAdmin(admin.ModelAdmin):
    list_display = ("idcarrito", "idproducto", "idusuario", "cantidad","preciounitario","preciototal")


class FacturasAdmin(admin.ModelAdmin):
    list_display = ("idfactura","idcarrito", "fechafactura", "montototal")



    
admin.site.register(Usuarios,UsuariosAdmin)
admin.site.register(Administradores, AdministradoresAdmin)
admin.site.register(Adminusuarios,AdminusuariosAdmin)
admin.site.register(Ciudades,CiudadesAdmin)
admin.site.register(Productos,ProductosAdmin)
admin.site.register(Carrito,CarritoAdmin)
admin.site.register(Historialcompras,HistorialcomprasAdmin)
admin.site.register(Facturas,FacturasAdmin)
