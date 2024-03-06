from django.shortcuts import render
from django.urls import reverse
from django.http import HttpResponse, JsonResponse, HttpResponseRedirect
from werkzeug.security import generate_password_hash, check_password_hash

from .models import Users

# Create your views here.
def login(request):
    if request.method == 'POST':
        return HttpResponse('eieiei')
    return render(request, 'index.html')

def signup(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')
        confirmPassword = request.POST.get('confirmPassword')
        
        # Verifique se todos os campos foram preenchidos
        if not all([username, email, password, confirmPassword]):
            return JsonResponse({'error': 'Todos os campos são obrigatórios'})

        password_hash = generate_password_hash(password)
        if check_password_hash(password_hash, password):
            new_user = Users(
                username = username,
                email = email,
                password = password_hash,
            )
            try:
                new_user.save()
                return HttpResponseRedirect(reverse('authapp:login'))
            except Exception as e:
                return HttpResponse(e)
        else:
            return HttpResponse('ERRO AQUI')
        
    return render(request, 'index.html')