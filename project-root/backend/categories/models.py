from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100)
    zone = models.CharField(max_length=100, blank=True)
    image = models.ImageField(upload_to='categories/', null=True, blank=True)
    status = models.BooleanField(default=True)
    featured = models.BooleanField(default=False)
