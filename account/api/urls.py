from django.urls import path, include
from .views import UserListCreateAPIView, UserRetrieveUpdateDestroyAPIView, UserLoginObtainView


urlpatterns = [

   path('', UserListCreateAPIView.as_view(),),
   path('<int:pk>/', UserRetrieveUpdateDestroyAPIView.as_view(),),
   path('signup/', UserListCreateAPIView.as_view(),),
   path('login/', UserLoginObtainView.as_view(), name="login"),
    
]