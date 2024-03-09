from django.test import TestCase, Client
from django.urls import reverse
from .models import User
import json

# Create your tests here.
class UserTest(TestCase):
    def setUp(self):
        User.objects.create(username='user1', email='user1@example.com', password='password123')
        User.objects.create(username='user2', email='user2@example.com', password='password456')

    def test_User_created(self):
        self.assertEqual(User.objects.count(), 2)


    def test_User_creation(self):
        user1 = User.objects.get(username='user1')
        user2 = User.objects.get(username='user2')
        
        self.assertEqual(user1.email, 'user1@example.com')
        self.assertEqual(user2.email, 'user2@example.com')

    def test_unique_email_constraint(self):
        with self.assertRaises(Exception):
            User.objects.create(username='user3', email='user1@example.com', password='password789')

    def test_str_method(self):
        user1 = User.objects.get(username='user1')
        self.assertEqual(str(user1), 'user1 /// user1@example.com')



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


        self.assertTrue(User.objects.get(username='testuser'))

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


from django.contrib.auth.hashers import make_password, check_password

class LoginTestCase(TestCase):
    def setUp(self):
        password_hash = make_password('FelipeWai0132?')
        User.objects.create(username='felipe', email='felipe@gmail.com', password=password_hash)
        self.client = Client()

    def test_login_successful(self):
        data = {
            'email': 'felipe@gmail.com',
            'password': 'FelipeWai0132?'
        }

        response = self.client.post('/auth/login/', json.dumps(data), content_type='application/json')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {'success': 'Login was a success'})

    def test_login_wrong_password(self):
        data = {
            'email': 'felipe@gmail.com',
            'password': 'FelipeWai013?'
        }

        response = self.client.post('/auth/login/', json.dumps(data), content_type='application/json')
        self.assertEqual(response.status_code, 401)
        self.assertEqual(response.json(), {'error': "Email or password wrong"})

    def test_login_wrong_email(self):
        data = {
            'email': 'fele@gmail.com',
            'password': 'FelipeWai013?'
        }
        response = self.client.post('/auth/login/', json.dumps(data), content_type='application/json')
        self.assertEqual(response.status_code, 404)
        self.assertEqual(response.json(), {'error': "Email or password wrong"})

    def test_login_no_email(self):
        data = {
            'email': '',
            'password': 'FelipeWai013?'
        }
        response = self.client.post('/auth/login/', json.dumps(data), content_type='application/json')
        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.json(), {'error': 'Todos os campos são obrigatórios'})

    def test_login_no_password(self):
        data = {
            'email': 'felipe@gmail.com',
            'password': ''
        }
        response = self.client.post('/auth/login/', json.dumps(data), content_type='application/json')
        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.json(), {'error': 'Todos os campos são obrigatórios'})


class LogoutTest(TestCase):
    def setUp(self):
        self.user = User.objects.create(username='user1', email='user1@example.com', password='password123')
        self.client = Client()

    def test_logout(self):
        self.client.login(email='user1@example.com', password='password123')

        response = self.client.post('/auth/logout/', content_type='application/json')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {'success': 'Logout was a success'})
        self.assertIsNone(self.client.session.get('_auth_user_id'))