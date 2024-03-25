from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404, get_list_or_404

from .serializers import TasksSerializer
from Taskapp.models import Tasks
from Authapp.models import User


@api_view(['GET'])
def tasks_list(request):
    tasks = Tasks.objects.all()
    serializer = TasksSerializer(tasks, many=True)
    return Response(serializer.data)

@api_view(['GET', ])
def tasks_list_user(request, user_id):
    user = get_object_or_404(User, id=user_id)
    if user is not None:
        tasks = get_list_or_404(Tasks, user_id=user)
        if tasks is not None:
            serializer = TasksSerializer(tasks, many=True)
            return Response(serializer.data)
        else:
            return Response(status.HTTP_404_NOT_FOUND)
    else:
        return Response(status.HTTP_404_NOT_FOUND)