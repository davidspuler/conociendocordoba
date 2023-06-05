from authentication.views import LoginView, LogoutView , SignupView
from django.urls import path, include



urlpatterns = [
    # Auth views
    path('auth/login/',
         LoginView.as_view(), name='auth_login'),

    path('auth/logout/',
         LogoutView.as_view(), name='auth_logout'),
     
     path('auth/signup/',
         SignupView.as_view(), name='auth_signup'),
    ]


