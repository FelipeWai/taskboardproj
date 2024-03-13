from django.urls import path

from . import views

app_name = 'taskapp'
urlpatterns = [
    path('', views.index, name='index'),
    path('tasks/', views.tasks, name='tasks'),
    path('tasks/create/<int:user_id>', views.task_creation, name='taskscreation'),
]
