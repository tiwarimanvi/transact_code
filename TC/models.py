# appname/models.py
from django.db import models


class Project(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    images = models.ImageField(upload_to='profile_images')
    project_name = models.CharField(max_length=100)
    github_link = models.URLField()
    project_images = models.ImageField(upload_to='project_images')
    compressed_file = models.FileField(upload_to='compressed_files')
    description = models.CharField(max_length=1000)
    # Add additional fields as needed, such as project description, price, etc.

    def __str__(self):
        return self.project_name
