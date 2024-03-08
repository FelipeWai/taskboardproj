from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse, JsonResponse
from werkzeug.security import generate_password_hash, check_password_hash
from django.views.decorators.csrf import csrf_exempt
from django.middleware.csrf import get_token
import json
import re

from .models import Users

# Create your views here.
def get_csrf_token(request):
    token = get_token(request)
    return JsonResponse({'csrfToken': token}, status=200)

def login(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')

        try:
            user_queryset = Users.objects.get(email=email)
            if check_password_hash(user_queryset.password, password):
                user = authenticate(request, email=email, password=password)
                if user is not None:
                    login(request, user)
                    return JsonResponse({'success': 'Login was a success'}, status=200)
                else:
                    return JsonResponse({'error': "Authentication failed. Please try again."}, status=401)
            else:
                return JsonResponse({'error': "Wrong password"}, status=401)
        except Users.DoesNotExist:
            return JsonResponse({'error': "User doesn't exists"}, status=404)

    return render(request, 'index.html')



def signup(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')
        confirm_password = data.get('confirmPassword')

        if not all([username, email, password, confirm_password]):
            return JsonResponse({'error': 'Todos os campos são obrigatórios'}, status=400)

        if password != confirm_password:
            return JsonResponse({'error': 'As senhas não coincidem'}, status=400)

        if not re.match(r'^[\w\.-]+@[\w\.-]+\.\w+$', email):
            return JsonResponse({'error': 'Email incorreto'}, status=400)
        
        password_hash = generate_password_hash(password)

        user = Users.objects.create(
            username = username,
            email = email,
            password = password_hash
        )

        return JsonResponse({'success': 'Usuário criado com sucesso'}, status=201)

    return render(request, 'index.html')
        