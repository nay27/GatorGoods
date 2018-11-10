from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

class Category(models.Model):
    cid = models.AutoField(primary_key=True)
    name = models.CharField(max_length=25)

    def __str__(self):
        return self.cid

class Items(models.Model):
    iid = models.AutoField(primary_key=True)
    title = models.CharField(max_length=60)
    description = models.TextField(max_length=500)
    price = models.IntegerField()
    seller = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    PENDING = 'PE'
    APPROVED = 'AP'
    DENIED = 'DE'
    SOLD = 'SO'
    STATUS_OF_ITEM_CHOICES = (
        (PENDING, 'Pending'),
        (APPROVED, 'Approved'),
        (DENIED, 'Denied'),
        (SOLD, 'Sold'),
    )
    status = models.CharField(
        max_length=2,
        choices=STATUS_OF_ITEM_CHOICES,
        default=PENDING,
    )
    createdAt = models.DateTimeField(auto_now_add=True)
    modifiedAt = models.DateTimeField(auto_now=True)
    approvedAt = models.DateTimeField(auto_now_add=True)
    isBook = models.BooleanField()
    courseNumber = models.CharField(max_length=10)

    def __str__(self):
        return self.iid

class Images(models.Model):
    imid = models.AutoField(primary_key=True)
    item = models.ForeignKey(Items, on_delete=models.CASCADE)
    imagePath = models.CharField(max_length=4096)
    thumbnailPath = models.CharField(max_length=4096)

    def __str__(self):
        return self.imid