from django.contrib.auth.models import User
from rest_framework import serializers


#serializer class 
class UserSerializer(serializers.ModelSerializer):
    
    '''serialize user model to jason '''
                  
    class Meta:
        model = User
        fields=[ 'username', 'email', 'password','is_staff']
        extra_kwargs = {
            'password': {'write_only': True, 'style': {'input_type': 'password'}}
        }
        verbose_name = 'User'
        verbose_name_plural = 'Users'