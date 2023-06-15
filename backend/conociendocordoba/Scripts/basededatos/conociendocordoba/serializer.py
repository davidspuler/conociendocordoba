from rest_framework import serializers
from .models import  Productos, Carrito






class ProductosSerializer(serializers.ModelSerializer):
     class Meta:
        model= Productos
        fields='__all__'



# carrito

