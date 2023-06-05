from django.urls import path, include
from rest_framework import routers
#from Products.views import ProductosViewSet
from conociendocordoba  import views

router= routers.DefaultRouter()
router.register(r'Productos',views.ProductosViewSet)
#----
urlpatterns = [
     path('', include(router.urls)),
]