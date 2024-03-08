from django.test import TestCase, Client
from django.urls import reverse
from .views import signup
from .models import Users
import json

# Create your tests here.

class SignupTestCase(TestCase):
    def setUp(self):
        self.client = Client()


    def test_signup_success(self):
        data = {
            'username': 'testuser',
            'email': 'felipe@teste.com',
            'password': 'FelipeWai0132?',
            'confirmPassword': 'FelipeWai0132?'
        }

        response = self.client.post('/auth/signup/', json.dumps(data), content_type='application/json')
        self.assertEqual(response.status_code, 201)


        self.assertTrue(Users.objects.get(username='testuser'))

    def test_signup_missing_fields(self):
        data = {
            'username': '',
            'email': 'felipe@teste.com',
            'password': 'FelipeWai0132?',
            'confirmPassword': 'FelipeWai0132?'
        }

        response = self.client.post('/auth/signup/', json.dumps(data), content_type='application/json')
        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.json(), {'error': 'Todos os campos são obrigatórios'})



    def test_signup_password_mismatch(self):
        data = {
            'username': 'testuser',
            'email': 'test@example.com',
            'password': 'password123',
            'confirmPassword': 'password456'
        }

        response = self.client.post('/auth/signup/', json.dumps(data), content_type='application/json')
        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.json(), {'error': 'As senhas não coincidem'})


    def test_signup_wrong_email(self):
        data = {
            'username': 'testuser',
            'email': 'test.com',
            'password': 'password123',
            'confirmPassword': 'password123'
        }

        response = self.client.post('/auth/signup/', json.dumps(data), content_type='application/json')
        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.json(), {'error': 'Email incorreto'})


class GetCSRFTokenTestCase(TestCase):
    def test_get_csrf_token(self):
        response = self.client.get(reverse('authapp:getcsrf'))
        self.assertEqual(response.status_code, 200)
        self.assertIn('csrfToken', response.json())
        csrf_token = response.json()['csrfToken']
        self.assertIsNotNone(csrf_token)
        self.assertIsInstance(csrf_token, str)