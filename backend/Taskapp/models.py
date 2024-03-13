from django.db import models
from Authapp.models import User

# Create your models here.
class Tasks(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, related_name='task_owner')
    title = models.CharField(max_length=20)
    text = models.TextField(max_length=600)
    icon = models.CharField(max_length=20)
    status = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.title}"