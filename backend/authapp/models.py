from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission
# Create your models here.
# class Users(models.Model):
#     username = models.CharField(max_length=100)
#     email = models.EmailField(unique=True)
#     password = models.CharField(max_length=200)

#     def __str__(self):
#         return f'{self.username} /// {self.email}'

class User(AbstractUser):
    
    email = models.EmailField(unique=True)

    def __str__(self):
        return f'{self.username} /// {self.email}'
    
    groups = models.ManyToManyField(Group, related_name='custom_user_groups')
    user_permissions = models.ManyToManyField(Permission, related_name='custom_user_permissions')

    def seralize(self):
        return {
            "id": self.id,
            "email": self.email,
            "username": self.username,
        }
