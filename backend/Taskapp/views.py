from django.shortcuts import render
from django.shortcuts import get_object_or_404
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
import json

from rest_framework import status as http_status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Tasks
from Authapp.models import User


def index(request):
    return render(request, 'index.html')

@login_required(login_url='/auth/login')
def tasks(request):
    return render(request, 'index.html')


@login_required(login_url='/auth/login')
@api_view(['POST'])
def task_creation(request, user_id):
        user = get_object_or_404(User, pk=user_id)
        if user is not None:
            if user.id != request.user.id:
                 return Response(http_status.HTTP_401_UNAUTHORIZED)
            else:
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
                    return Response(http_status.HTTP_200_OK)
                
                except Exception as e:
                    return Response(http_status.HTTP_400_BAD_REQUEST)
        else:
            return Response(http_status.HTTP_400_BAD_REQUEST)

