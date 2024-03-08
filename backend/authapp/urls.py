from django.urls import path
from . import views

app_name = 'authapp'
urlpatterns = [
    path('login/', views.login, name='login'),
    path('signup/', views.signup, name='signup'),
    path('gettoken/', views.get_csrf_token, name='getcsrf'),
]
