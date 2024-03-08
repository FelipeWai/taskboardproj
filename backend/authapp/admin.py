from django.contrib import admin


from .models import Users


class UsersAdmin(admin.ModelAdmin):
    list_display = ("id", "username", "email", "password")
# Register your models here.
admin.site.register(Users)