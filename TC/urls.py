# appname/urls.py
from django.urls import path
from .views import ProjectUploadAPIView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('upload/', ProjectUploadAPIView.as_view()),
    path('get_projectdata/<int:pk>/', ProjectUploadAPIView.as_view()),

]
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
