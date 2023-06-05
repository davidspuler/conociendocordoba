from rest_framework import viewsets
from .serializer import  ProductosSerializer
from .models import Productos


class ProductosViewSet(viewsets.ModelViewSet):
        queryset=Productos.objects.all()
        serializer_class= ProductosSerializer
