from django.shortcuts import render
from django.shortcuts import get_object_or_404
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
import json

from .models import Tasks
from Authapp.models import User


def index(request):
    return render(request, 'index.html')

@login_required(login_url='/auth/login')
def tasks(request):
    return render(request, 'index.html')

@login_required(login_url='/auth/login')
def task_creation(request, user_id):
    if request.method == 'POST':
        user = get_object_or_404(User, pk=request.user.id)
        if user is not None:
            data = json.loads(request.body)
            title = data.get('title')
            text = data.get('text')
            icon = data.get('icon')
            status = data.get('status')

            if not all([title, text, icon, status]):
                return JsonResponse({'error': 'Todos os campos são obrigatórios'}, status=400)

            try:
                task = Tasks.objects.create(
                    user_id = user,
                    title = title,
                    text = text,
                    icon = icon,
                    status = status
                )
                return JsonResponse({'success', 'Task created'}, status=200)
            
            except Exception as e:
                return JsonResponse({'error': 'Error creating the task'}, status=400)


    else:
        return JsonResponse({'error': 'method not allowed'}, status=405)

