from django.contrib.auth.models import User
from rest_framework import generics
from .serializer import UserSerializer



# class view 
class UserListCreateAPIView (generics.ListCreateAPIView):
    
    ''' 
    Create and List User User 
    ''' 
    queryset = User.objects.all()
    serializer_class = UserSerializer
        
    
    
class UserRetrieveUpdateDestroyAPIView (generics.RetrieveUpdateDestroyAPIView):
    '''
    Retrive Update Destory User 
    '''
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
        