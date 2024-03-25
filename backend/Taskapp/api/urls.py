from django.urls import path
from . import views

urlpatterns = [
    path('api/all', views.tasks_list, name='all_tasks'),
    path('api/all/<int:user_id>', views.tasks_list_user, name='all_tasks_user'),
]
