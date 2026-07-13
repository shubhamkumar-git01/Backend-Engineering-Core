# Topic: Django MTV Architecture (Model-Template-View)
# Notes: Django uses MTV, which is fundamentally the same as MVC.
# Model = Database Schema (ORM)
# Template = HTML/UI (The "View" in traditional MVC)
# View = Business Logic (The "Controller" in traditional MVC)

"""
# views.py (The Controller Logic)
from django.shortcuts import render
from .models import Post

def blog_home(request):
    # Fetch all blog posts from the database using Django ORM
    posts = Post.objects.all()
    
    # Render an HTML template and pass the data (context) to it
    context = {'posts': posts}
    return render(request, 'blog/home.html', context)
"""

"""
# urls.py (Routing)
from django.urls import path
from . import views

urlpatterns = [
    path('', views.blog_home, name='blog-home'),
]
"""

print("Check comments for Django MTV implementation.")
