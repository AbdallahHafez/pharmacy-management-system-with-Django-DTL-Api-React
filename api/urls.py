from django.urls import path
from .import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


app_name= 'api'
urlpatterns = [
    path('',views.OrderListApiView.as_view(),name='orders-list'),
    path('order/<str:pk>/',views.OrderRetrieveApiView.as_view(),name='orders-detail'),
    path('order-update/<str:pk>/',views.OrderCompleteApiView.as_view(),name='order-update'),
    path('customers/',views.CustomerListApiView.as_view(),name='customers'),
    path('products/',views.ProductListApiView.as_view(),name='products'),
    path('customer-detail/<str:pk>/',views.CustomerRetrieveApiView.as_view(),name='customer-retrieve'),
    path('customer-create/',views.CustomerCreateApiView.as_view(),name='customer-create'),
    path('customer-update/<str:pk>/',views.CustomerUpdateApiView.as_view(),name='customer-update'),
    path('customer-destroy/<str:pk>/',views.CustomerDestroyApiView.as_view(),name='customer-destroy'),
    path('product-create/',views.ProductCreateApiView.as_view(),name='product-create'),
    path('product-update/<str:pk>/',views.ProductUpdateApiView.as_view(),name='product-update'),
    path('product-destroy/<str:pk>/',views.ProductDestroyApiView.as_view(),name='product-destroy'),
    path('orderitem-create/<str:pk>/',views.OrderItemCreateApiView.as_view(),name='orderitem-create'),
    path('orderitem-update/<str:pk>/',views.OrderItemUpdateApiView.as_view(),name='orderitem-update'),
    path('orderitem-destroy/<str:pk>/',views.OrderItemDestroyApiView.as_view(),name='orderitem-destroy'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('today/',views.TodayDataView.as_view(),name='today'),
    path('register/',views.UserCreateView.as_view(),name='register')
]

