from django.contrib.auth.models import User
from .serializer import UserSerializer
from .permissions import UpdateOwnProfile

from rest_framework import generics
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.settings import api_settings



# class view 
class UserListCreateAPIView (generics.ListCreateAPIView):
    
    ''' 
    Create and List User User 
    ''' 
    serializer_class = UserSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (UpdateOwnProfile,)
    queryset = User.objects.all()
        
    
    
class UserRetrieveUpdateDestroyAPIView (generics.RetrieveUpdateDestroyAPIView):
    '''
    Retrive Update Destory User 
    '''
    serializer_class = UserSerializer
    authentication_classes= (TokenAuthentication,)
    permission_classes = (UpdateOwnProfile,)
    queryset = User.objects.all()
    


class UserLoginObtainView(ObtainAuthToken):
    """
    handle create user auth tokens
    """
    renderer_classes = api_settings.DEFAULT_RENDERER_CLASSES
    
        