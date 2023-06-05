from django.contrib.auth import authenticate, login, logout
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer
from rest_framework import generics, status
from .models import Usuario
from django.http.response import JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.views import View
import json

class LoginView(APIView):
    def post(self, request):
        # Recuperamos las credenciales y autenticamos al usuario
        email = request.data.get('email', None)
        password = request.data.get('password', None)
        user = authenticate(email=email, password=password)

        # Si es correcto añadimos a la request la información de sesión
        if user:
            login(request, user)
            return Response(
                status=status.HTTP_200_OK)

        # Si no es correcto devolvemos un error en la petición
        return Response(
            status=status.HTTP_404_NOT_FOUND)


class LogoutView(APIView):
    def post(self, request):
        # Borramos de la request la información de sesión
        logout(request)

        # Devolvemos la respuesta al cliente
        return Response(status=status.HTTP_200_OK)

class SignupView(generics.CreateAPIView):
    serializer_class = UserSerializer

class UsuariosView(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)
    
    def post(self, request):
        jsDatos = json.loads(request.body)
        Usuario.objects.create(
            Nombre=jsDatos['Nombre'], 
            Apellido=jsDatos['Apellido'],
            FechaNacimiento=jsDatos['FechaNacimiento'], 
            CorreoElectronico=jsDatos['CorreoElectronico'],
            admin=jsDatos['admin'],
            password=jsDatos['password'],
            login=jsDatos['login'])
        respuesta = {'message': "Success"}
        return JsonResponse(respuesta)

class UsuariosLoginView(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)
    
    def post(self,request):
        jsDatos = json.loads(request.body)
        ver = list(Usuario.objects.filter(
            CorreoElectronico=jsDatos['CorreoElectronico'],
            password=jsDatos['password']
            ).values())
        
        if len(ver) > 0: 
            user = ver[0]
            if (user['login']):
                respuesta = {'message':'Usuario logueado'}
            else:
                user2 = Usuario.objects.get(idUsuario=user['idUsuario'])
                user2.login = 1
                user2.save()
                respuesta = {'message':'success', 'usuario':user}
        else:
            respuesta = {'message':'Usuario o password incorrectos'}
        
        return JsonResponse(respuesta)