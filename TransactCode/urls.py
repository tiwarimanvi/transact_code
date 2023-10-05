from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings  # Don't forget to import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('TC/', include('TC.urls')),
]

# Only include the following line if DEBUG is True
# if settings.DEBUG:
#     urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,     document_root=settings.MEDIA_URL)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_URL)
