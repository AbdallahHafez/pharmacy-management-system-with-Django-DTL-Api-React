from django.urls import path
from .import views

app_name = 'products'

urlpatterns = [
    path('',views.ProductsListView.as_view(),name='product-list'),
    path('create/',views.ProductCreateView.as_view(),name='product-create'),
    path('update/<str:pk>/',views.ProductUpdateView.as_view(),name='product-update'),
    path('delete/<str:pk>/',views.ProductDeleteView.as_view(),name='product-delete'),

]