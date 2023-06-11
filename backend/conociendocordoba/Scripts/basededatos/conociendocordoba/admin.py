
from django.contrib import admin



from .models import Ciudades
from .models import Productos
from .models import Historialcompras
from .models import Carrito
from .models import Facturas


class CiudadesAdmin(admin.ModelAdmin):
    list_display = ("idciudad","nombreciudad",)
class ProductosAdmin(admin.ModelAdmin):
    list_display = ("idproducto", "nombreproducto", "descripcion", "fecha", "precio" , "imagen", "idciudad")
class HistorialcomprasAdmin(admin.ModelAdmin):
    list_display = ("idhistorial" ,"idproducto", "fechacompra", "preciounitario","preciototal","estado")    
class CarritoAdmin(admin.ModelAdmin):
    list_display = ("idcarrito", "idproducto", "cantidad","preciounitario","preciototal")


class FacturasAdmin(admin.ModelAdmin):
    list_display = ("idfactura","idcarrito", "fechafactura", "montototal")




admin.site.register(Ciudades,CiudadesAdmin)
admin.site.register(Productos,ProductosAdmin)
admin.site.register(Carrito,CarritoAdmin)
admin.site.register(Historialcompras,HistorialcomprasAdmin)
admin.site.register(Facturas,FacturasAdmin)

