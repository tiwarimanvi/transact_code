# appname/urls.py
from django.urls import path
from .views import ProjectUploadAPIView

urlpatterns = [
    path('upload/', ProjectUploadAPIView.as_view()),
]
