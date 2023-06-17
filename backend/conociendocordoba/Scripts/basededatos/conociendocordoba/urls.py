from django.urls import path, include
from rest_framework import routers
from .views import simular_compra, ProductosViewSet


router = routers.DefaultRouter()
router.register(r'productos', ProductosViewSet, basename='productos')

urlpatterns = [
    
    path('', include(router.urls)),
    path('simular/<int:producto_id>/<int:cantidad>/', simular_compra, name='simular'),
    
]