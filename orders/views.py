from django.shortcuts import render,redirect
from django.views.generic import View,DeleteView,DetailView
from customers.models import Customer
from products.models import Product
from .models import Order,OrderItem
from django.urls import reverse
from home.permissions import CustomLoginRequiredMixin

class OrderItemCreateView(View):
    def get(self,request,pk):
        context={}
        return render(request,'orders/add_item.html',context)
    def post(self,request,pk):
        usercode = request.POST.get('usercode')
        quantity = request.POST.get('quantity')
        try:
            quantity=int(quantity)
        except:
            return redirect('orders:add-item',pk=pk)
        try:
            customer = Customer.objects.get(id=usercode)
            product = Product.objects.get(id=pk)
        except:
            customer = None
            return redirect('orders:add-item',pk=pk)
        order,created = Order.objects.get_or_create(customer=customer,complete=False)
        order_item,created = OrderItem.objects.get_or_create(order=order,product=product)
        order_item.quantity = quantity
        order_item.save()
        
        return redirect('products:product-list')
    
class OrderItemDeleteView(CustomLoginRequiredMixin,DeleteView):
    template_name = 'orders/order_item_delete.html'
    context_object_name = 'orderitem'
    def get_queryset(self):
        return OrderItem.objects.all()
    def get_success_url(self):
        return reverse('customers:customer-detail',kwargs={'pk':self.get_object().order.customer.id})
    
class OrderDetailView(CustomLoginRequiredMixin,DetailView):
    template_name = 'orders/order.html'
    context_object_name = 'order'
    def get_queryset(self):
        return Order.objects.all()
    
def update_order(request,pk):
    if request.method == 'POST':
        order = Order.objects.get(id=pk)
        order.complete = True
        order.save()
        return redirect('orders:order',pk=pk)