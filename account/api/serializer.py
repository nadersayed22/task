from django.contrib.auth.models import User
from rest_framework import serializers


#serializer class 
class UserSerializer(serializers.ModelSerializer):
    
    '''serialize user model to jason '''
                  
    class class Meta:
        model = User
        fields=['url', 'username', 'email', 'is_staff']
        verbose_name = 'User'
        verbose_name_plural = 'Users'