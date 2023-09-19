# appname/admin.py
from django.contrib import admin
from .models import Project

class ProjectAdmin(admin.ModelAdmin):
    list_display = ('project_name', 'name', 'email', 'github_link')  # Fields to display in the list view
    search_fields = ('project_name', 'name', 'email')  # Fields to enable search
    list_filter = ('project_name',)  # Filter options

# Register the model and admin class
admin.site.register(Project, ProjectAdmin)
