from django.test import TestCase, Client
import json
from django.urls import reverse

from .models import Tasks
from Authapp.models import User

# Create your tests here.
class TasksTest(TestCase):
    def setUp(self):
        user1 = User.objects.create(username='user1', email='user1@example.com', password='password123')
        Tasks.objects.create(user_id=user1, title="t1", text="TESTE 1", icon = "testeteste", status="concluded")
        Tasks.objects.create(user_id=user1, title="t2", text="TESTE 2", icon = "testeteste", status="progress")

    def test_task_created(self):
        self.assertEqual(Tasks.objects.count(), 2)

    def test_task_creation(self):
        task1 = Tasks.objects.get(title="t1")
        task2 = Tasks.objects.get(title="t2")

        self.assertEqual(task1.icon, "testeteste")
        self.assertEqual(task2.icon, "testeteste")

    def test_str_method(self):
        task1 = Tasks.objects.get(title="t1")
        self.assertEqual(str(task1), "t1")
    

# from django.contrib.auth.hashers import make_password

# class TaskCreationViewTest(TestCase):
#     def setUp(self):
#         self.client = Client()
#         hashed_password = make_password('password123')
#         self.user = User.objects.create(username='testuser', email='test@example.com', password=hashed_password)

#     def test_task_creation(self):
#         url_login = reverse('authapp:login')
#         login_data = {
#             'email': 'test@example.com',
#             'password': 'password123'
#         }
#         response = self.client.post(url_login, login_data, content_type='application/json')
#         self.assertEqual(response.json(), {'success': 'Login was a success'})
#         self.assertEqual(response.status_code, 200)


#         url = reverse('taskapp:taskscreation', kwargs={'user_id': self.user.id})
#         data = {
#             'title': 'New Task',
#             'text': 'This is a test task',
#             'icon': 'test-icon',
#             'status': 'pending'
#         }
#         response = self.client.post(url, data, format='application/json')
#         self.assertEqual(response.status_code, 200)
#         self.assertEqual(Tasks.objects.count(), 1)