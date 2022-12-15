from django.conf import settings
from django.urls import path
from .views import  *
from django.conf.urls.static import static


urlpatterns = [
    path('', index,name='index'),
    path('index', index,name='index'),
    path('nosotros', nosotros, name='nosotros'),
    path('contact', contact, name='contact'),   
]

urlpatterns+=static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)