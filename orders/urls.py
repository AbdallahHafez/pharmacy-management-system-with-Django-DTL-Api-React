from django.urls import path
from . import views

app_name = 'orders'
urlpatterns = [
    path('add-item/<int:pk>/',views.OrderItemCreateView.as_view(),name='add-item'),
    path('delete-item/<int:pk>/',views.OrderItemDeleteView.as_view(),name='delete-item'),
    path('order/<str:pk>/',views.OrderDetailView.as_view(),name='order'),
    path('update_order/<str:pk>',views.update_order,name='update-order')
]