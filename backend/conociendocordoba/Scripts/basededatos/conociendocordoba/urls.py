from django.urls import path, include
from rest_framework import routers
#from Products.views import ProductosViewSet
from conociendocordoba  import views
from .views import ProductosViewSet


router = routers.DefaultRouter()
router.register(r'productos', ProductosViewSet, basename='productos')

urlpatterns = [
    path('', include(router.urls)),
]