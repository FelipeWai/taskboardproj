from django.urls import path

from . import views


urlpatterns = [
    path('all', views.all_users, name='all_users'),
]
