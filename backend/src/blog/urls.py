from django.urls import path

from .views import BlogView, CategoryView


urlpatterns = [
    path('blog/', BlogView),
    path('category/', CategoryView),
]
