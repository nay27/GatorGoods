from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from rest_framework import routers
from goods import views
from rest_framework.authtoken import views as view

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)
router.register(r'categories', views.CategoryViewSet)
router.register(r'items', views.ItemViewSet)
router.register(r'images', views.ImageViewSet)
router.register(r'locations', views.LocationViewSet)
router.register(r'messages', views.MessageViewSet)
router.register(r'wishlist', views.WishListViewSet)
router.register(r'search', views.SearchViewSet, base_name='search-view')


urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api-token-auth/', view.obtain_auth_token, name='api-token-auth'),
    path('admin/', admin.site.urls),
]