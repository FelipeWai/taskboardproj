from django.db import models

# Create your models here.
class Tasks(models.Model):
    title = models.CharField(max_length=20)
    description = models.TextField(max_length=600)
    status = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.title}"