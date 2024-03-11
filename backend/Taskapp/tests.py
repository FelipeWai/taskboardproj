from django.test import TestCase

from .models import Tasks

# Create your tests here.
class TasksTest(TestCase):
    def setUp(self):
        Tasks.objects.create(title="t1", description="TESTE 1", status="concluded")
        Tasks.objects.create(title="t2", description="TESTE 2", status="progress")

    def test_db_working(self):
        self.assertEqual(Tasks.objects.count(), 2)