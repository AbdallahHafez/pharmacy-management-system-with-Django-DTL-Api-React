from django.urls import path
from . import views

app_name= 'customers'
urlpatterns = [
    path('',views.CustomersListView.as_view(),name='customers-list'),
    path('create/',views.CustomerCreateView.as_view(),name='customer-create'),
    path('profile/<str:pk>/',views.CustomerDetailView.as_view(),name='customer-detail'),
    path('profile-update/<str:pk>/',views.CustomerUpdateView.as_view(),name='customer-update'),
    path('profile-delete/<str:pk>/',views.CustomerDeleteView.as_view(),name='customer-delete'),
]