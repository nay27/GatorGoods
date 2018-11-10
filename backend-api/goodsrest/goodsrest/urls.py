from django.contrib import admin
from django.urls import path

from django.conf.urls import url, include
from rest_framework import routers
from goods import views

from items.views import CategoryViewSet, ItemViewSet, ImageViewSet

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)

router.register(r'category', CategoryViewSet)
router.register(r'items', ItemViewSet)
router.register(r'images', ImageViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('admin/', admin.site.urls),
]

