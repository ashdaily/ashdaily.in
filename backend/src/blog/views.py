from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from blog.models import (
    Category,
    Blog
)
from .serializers import (
    BlogSerializer,
    CategorySerializer
)


class CategoryView(APIView):
    def get(self, request, format=None):
        o = Category.objects.all()
        serializer = CategorySerializer(o, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BlogView(APIView):
    def get(self, request, format=None):
        o = Blog.objects.all()
        serializer = BlogSerializer(o, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = BlogSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)