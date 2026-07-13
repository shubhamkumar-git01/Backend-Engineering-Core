# Topic: Django ORM (Object-Relational Mapping)
# Notes: Django abstracts SQL away. You define Python classes, and Django generates the SQL database tables (SQLite by default, easily swapped to PostgreSQL).

"""
# models.py
from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    date_posted = models.DateTimeField(auto_now_add=True)
    # Foreign Key relationship: If User is deleted, their posts are also deleted (CASCADE)
    author = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title
"""

"""
# Django ORM Commands (Run in Django Shell: python manage.py shell)
from blog.models import Post

# CREATE
post = Post(title='My First Django Post', content='Hello World', author_id=1)
post.save()

# READ
all_posts = Post.objects.all()
specific_post = Post.objects.filter(author__username='shubham')

# UPDATE
post.title = 'Updated Title'
post.save()

# DELETE
post.delete()
"""
print("Check comments for Django ORM schema and CRUD syntax.")
