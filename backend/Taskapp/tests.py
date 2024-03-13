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
    

from django.contrib.auth.hashers import make_password

class TasksViewsTest(TestCase):
    def setUp(self):
        password_hash = make_password('FelipeWai0132?')
        User.objects.create(username='felipe', email='felipe@gmail.com', password=password_hash)
        self.client = Client()

    def test_create_view(self):
        data = {
            'email': 'user1@example.com',
            'password': 'password123'
        }
        response = self.client.post('/auth/login/', json.dumps(data), content_type='application/json')
        self.assertIn(response.status_code, [200, 302])

        data = {
            "title": "test title",
            "text": "test text",
            "icon": "test icon",
            "status": "test status"
        }

        response = self.client.post(f'/tasks/create/{self.user1.id}', json.dumps(data), content_type='application/json')
        self.assertEqual(response.status_code, 200)