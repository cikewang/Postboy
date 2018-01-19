from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^test/$', views.test),
    url(r'^show/$', views.show),
    url(r'^project/$', views.project),
    url(r'^test_one/$', views.test_one),
]
