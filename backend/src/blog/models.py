import datetime

from django.db import models
from django.template.defaultfilters import slugify


class Category(models.Model):
    class Meta:
        verbose_name_plural = "Categories"

    name = models.CharField(max_length=50, null=True, blank=True, unique=True)
    slug = models.SlugField(max_length=120, null=True, blank=True, unique=True)

    def __str__(self):
        return f'{self.name}'

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super().save(*args, **kwargs)

        
class Blog(models.Model):
    class Meta:
        verbose_name_plural = "Blogs"

    title = models.CharField(max_length=255, unique=True)
    slug = models.SlugField(max_length=520, null=True, blank=True, unique=True)
    category = models.ManyToManyField(Category)
    body = models.TextField(max_length=3000, null=True, blank=True)
    created_dt = models.DateTimeField(auto_now_add=True)
    last_update_dt = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.title}'

    def save(self, *args, **kwargs):
        # if id exists it means this is update request
        if self.pk is None:
            self.slug = slugify(self.title)
        else:
            old_slug = Blog.objects.get(pk=self.pk).slug
            new_slug = slugify(self.title)
            if old_slug != new_slug:
                self.slug = new_slug
        super().save(*args, **kwargs)