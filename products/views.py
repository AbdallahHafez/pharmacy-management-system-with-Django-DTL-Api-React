from django.shortcuts import render
from django.urls import reverse
from django.views.generic import ListView,CreateView,UpdateView,DeleteView
from .models import Product
from .forms import ProductForm
from home.permissions import CustomLoginRequiredMixin


class ProductsListView(CustomLoginRequiredMixin,ListView):
    template_name = 'products/products.html'
    context_object_name = 'products'
    def get_queryset(self):
        return Product.objects.all()
    
class ProductCreateView(CustomLoginRequiredMixin,CreateView):
    template_name = 'products/product_create.html'
    form_class = ProductForm

    def get_success_url(self):
        return reverse('products:product-list')
    

class ProductUpdateView(CustomLoginRequiredMixin,UpdateView):
    template_name = 'products/product_update.html'
    context_object_name = 'product'
    form_class = ProductForm

    def get_queryset(self):
        return Product.objects.all()

    def get_success_url(self):
        return reverse('products:product-list')

class ProductDeleteView(CustomLoginRequiredMixin,DeleteView):
    template_name = 'products/product_delete.html'
    context_object_name = 'product'
    def get_queryset(self):
        return Product.objects.all()
    def get_success_url(self):
        return reverse('products:product-list')