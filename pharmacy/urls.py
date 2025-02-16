from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('authentication/',include('authentication.urls')),
    path('',include('home.urls')),
    path('customers/',include('customers.urls')),
    path('products/',include('products.urls')),
    path('orders/',include('orders.urls'))
]
