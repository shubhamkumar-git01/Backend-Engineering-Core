# Topic: Django REST Framework (DRF)
# Notes: Building modern JSON APIs to connect with React/Next.js frontends.

"""
# serializers.py
# Serializers convert complex Python objects (like QuerySets) to JSON, and vice versa.
from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'title', 'content', 'date_posted', 'author']
"""

"""
# api_views.py (Class-Based API Views)
from rest_framework import generics
from .models import Post
from .serializers import PostSerializer

# This single class automatically handles GET (list all) and POST (create new) endpoints!
class PostListCreateAPIView(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
"""

print("Check comments for Django REST Framework setup.")
