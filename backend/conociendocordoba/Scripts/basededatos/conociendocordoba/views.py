from rest_framework import viewsets
from .serializer import ProductosSerializer
from .models import Productos, Carrito, Facturas
from django.shortcuts import redirect, render
from rest_framework.response import Response
from django.http import JsonResponse
from datetime import date
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view



@api_view(['GET', 'POST'])
@csrf_exempt
def simular_compra(request, producto_id, cantidad):
    # Obtener detalles del producto desde la base de datos
    producto = Productos.objects.get(idproducto=producto_id)
    
    # Calcular precios y monto total
    precio_unitario = producto.precio
    precio_total = precio_unitario * cantidad
    
    # Crear registro en la tabla Carrito
    carrito = Carrito.objects.create(
        idproducto=producto,
        cantidad=cantidad,
        preciounitario=precio_unitario,
        preciototal=precio_total
    )
    
    # Generar factura asociada al carrito
    factura = Facturas.objects.create(
        idcarrito=carrito,
        fechafactura=date.today(),
        montototal=precio_total
    )
    
    # Preparar la respuesta JSON
    confirmacion = {
    'id_factura': factura.idfactura,
    'fecha_emision': factura.fechafactura,
    'monto_total': factura.montototal,
    'cantidad_productos': cantidad
}
    
    # Devolver la confirmación como respuesta JSON
    return JsonResponse(confirmacion)

class ProductosViewSet(viewsets.ModelViewSet):
        queryset=Productos.objects.all()
        serializer_class= ProductosSerializer
def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=204)
def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)

def perform_destroy(self, instance):
        instance.delete()

def perform_update(self, serializer):
        serializer.save()






