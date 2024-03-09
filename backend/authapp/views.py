from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login, logout
from django.http import JsonResponse
from django.contrib.auth.hashers import make_password, check_password
from django.middleware.csrf import get_token
import json
import re

from .models import User

def get_csrf_token(request):
    token = get_token(request)
    return JsonResponse({'csrfToken': token}, status=200)

def login_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')

        if not all([email, password]):
            return JsonResponse({'error': 'Todos os campos são obrigatórios'}, status=400)
        
        try:
            user = User.objects.get(email=email)
            if check_password(password, user.password):
                login(request, user)
                return JsonResponse({'success': 'Login was a success'}, status=200)
            else:
                return JsonResponse({'error': "Email or password wrong"}, status=401)
        except User.DoesNotExist:
            return JsonResponse({'error': "Email or password wrong"}, status=404)

    return render(request, 'index.html')

def logout_view(request):
    logout(request)
    return JsonResponse({'success': 'Logout was a success'}, status=200)

def signup_view(request):
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
        
        password_hash = make_password(password)

        user = User.objects.create(
            username = username,
            email = email,
            password = password_hash
        )

        return JsonResponse({'success': 'Usuário criado com sucesso'}, status=201)

    return render(request, 'index.html')
        