from django.db import models
from django.core.validators import int_list_validator
#import random

# Create your models here.

class Data_table(models.Model):
    
    '''
     creating list of integer number 
     
     '''
    exiting_value = models.CharField(validators=[int_list_validator], max_length=100)
    
    
    
        
        
  
    
        
    