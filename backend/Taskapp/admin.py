from django.contrib import admin

from .models import Tasks

class AdminSiteTasks(admin.ModelAdmin):
    list_display = ("id", "user_id", "title", "status")



admin.site.register(Tasks)
