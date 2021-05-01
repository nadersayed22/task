from rest_framework import permissions


class UpdateOwnProfile(permissions.BasePermission):
    '''
    add permissions to user ... user update on own profile 
    '''
    def has_object_permission(self, request, view, obj):
        '''
        check if user in safe method 
        '''
        if request.method in permissions.SAFE_METHODS:
            return True
        
        return obj.id == request.user.id
            
            
        
        