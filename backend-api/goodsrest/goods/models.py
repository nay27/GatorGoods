from django.db import models

class locations(models.Model):
    lid = models.IntegerField(max_length=50, primary_key=True)
    name = models.CharField(max_length=50)
    map = models.CharField(max_length=4096)
