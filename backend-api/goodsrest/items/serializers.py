from .models import Category, Items, Images
from rest_framework import serializers


class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        fields = ('cid', 'name')


class ItemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Items
        fields = ('iid', 'title', 'description', 'price', 'seller', 'category', 
        'status', 'createdAt', 'modifiedAt', 'approvedAt', 'isBook', 'courseNumber')

class ImageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Images
        fields = ('imid', 'item', 'imagePath', 'thumbnailPath')