from rest_framework import serializers

from Taskapp.models import Tasks

class TasksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tasks
        fields = ['id', 'user_id', 'title', 'text', 'icon', 'status']