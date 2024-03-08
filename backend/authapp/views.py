from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from werkzeug.security import generate_password_hash
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
        return HttpResponse('POST NO LOGIN')
    return HttpResponse('GET NO LOGIN')

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
        