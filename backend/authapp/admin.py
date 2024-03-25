from django.contrib import admin
from .models import User


class UsersAdmin(admin.ModelAdmin):
    list_display = ("id", "username", "email", "password")
# Register your models here.
admin.site.register(User)