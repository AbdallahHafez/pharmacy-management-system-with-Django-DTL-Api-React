from django.urls import path
from . import views
from .forms import UserForm
from django.contrib.auth.views import LoginView,LogoutView
app_name='authentication'
urlpatterns=[
    path('register/',views.UserCreateView.as_view(),name='register'),
    path('login/',LoginView.as_view(template_name='authentication/login.html'),name='login'),
    path('logout/',LogoutView.as_view(template_name='authentication/logout.html'),name='logout'),
]