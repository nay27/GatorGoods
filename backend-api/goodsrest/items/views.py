from django.shortcuts import render
from .models import Category, Items, Images
from rest_framework import viewsets
from .serializers import CategorySerializer, ItemSerializer, ImageSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ItemViewSet(viewsets.ModelViewSet):
    queryset = Items.objects.all().order_by('title')
    serializer_class = ItemSerializer

class ImageViewSet(viewsets.ModelViewSet):
    queryset = Images.objects.all()
    serializer_class = ImageSerializer