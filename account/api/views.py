from django.contrib.auth.models import User
from rest_framework import viewsets
from .serializer import UserSerializer


# view classes
class UserViewSet(viewsets.ModelViewSet):
    """
    create CRUD opperations for users
    """
    class Meta:
        queryset=User.objects.all()
        serializer_class=UserSerializer