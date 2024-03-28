# Generated by Django 4.2.5 on 2023-09-19 13:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254)),
                ('images', models.ImageField(upload_to='profile_images/')),
                ('project_name', models.CharField(max_length=100)),
                ('github_link', models.URLField()),
                ('project_images', models.ImageField(upload_to='project_images/')),
                ('compressed_file', models.FileField(upload_to='compressed_files/')),
                ('description', models.CharField(max_length=1000)),
            ],
        ),
    ]
