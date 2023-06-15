from rest_framework import viewsets
from .serializer import  ProductosSerializer 
from .models import Productos
from django.shortcuts import redirect, render
from rest_framework.response import Response



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


