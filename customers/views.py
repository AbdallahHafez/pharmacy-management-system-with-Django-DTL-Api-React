from django.shortcuts import render
from django.views.generic import ListView,DetailView,CreateView,UpdateView,DeleteView
from .models import Customer
from .forms import CustomerForm
from django.urls import reverse
from orders.models import OrderItem,Order
from products.models import Product
from home.permissions import CustomLoginRequiredMixin

class CustomersListView(CustomLoginRequiredMixin,ListView):
    template_name = 'customers/customers.html'
    context_object_name = 'customers'
    
    def get_queryset(self):
        queryset = Customer.objects.all()
        return queryset


class CustomerCreateView(CustomLoginRequiredMixin,CreateView):
    template_name = "customers/customer_create.html"
    form_class = CustomerForm
    
    def get_success_url(self):
        return reverse('customers:customers-list')
    

class CustomerDetailView(CustomLoginRequiredMixin,DetailView):
    template_name = 'customers/customer.html'
    context_object_name = 'customer'
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        customer = self.get_object()
        orders = Order.objects.filter(customer=customer).order_by('-created_at')
        context.update({
            'orders':orders
        })
        return context
    def get_queryset(self):
        return Customer.objects.all()

class CustomerUpdateView(CustomLoginRequiredMixin,UpdateView):
    template_name = 'customers/customer_update.html'
    form_class = CustomerForm
    def get_queryset(self):
        return Customer.objects.all()
    def get_success_url(self):
        return reverse('customers:customer-detail',kwargs={'pk':self.get_object().id})
    
class CustomerDeleteView(CustomLoginRequiredMixin,DeleteView):
    template_name = 'customers/customer_delete.html'
    context_object_name = 'customer'

    def get_queryset(self):
        return Customer.objects.all()
    
    def get_success_url(self):
        return reverse('customers:customers-list')