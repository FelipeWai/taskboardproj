from django.urls import path
from . import views

app_name = 'authapp'
urlpatterns = [
    path('login/', views.login_view, name='login'),
    path('signup/', views.signup_view, name='signup'),
    path('logout/', views.logout_view, name='logout'),
    path('gettoken/', views.get_csrf_token, name='getcsrf'),
]
