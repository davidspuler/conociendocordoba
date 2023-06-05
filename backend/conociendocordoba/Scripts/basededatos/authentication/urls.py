from authentication.views import LoginView, LogoutView , SignupView, UsuariosView, UsuariosLoginView
from django.urls import path, include



urlpatterns = [
    # Auth views
    path('auth/login/',
         LoginView.as_view(), name='auth_login'),

    path('auth/logout/',
         LogoutView.as_view(), name='auth_logout'),
     
     path('auth/signup/',
         SignupView.as_view(), name='auth_signup'),

     path('usuario/register/',
         UsuariosView.as_view(), name='register'),

     path('usuario/login/',
         UsuariosLoginView.as_view(), name='login'),
    ]


