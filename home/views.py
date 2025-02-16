from django.shortcuts import render
from django.views.generic import TemplateView
from orders.models import Order
from datetime import date
from customers.models import Customer
from .permissions import CustomLoginRequiredMixin
# Create your views here.

class HomeView(CustomLoginRequiredMixin,TemplateView):
    template_name = 'home/home.html'
    def get_context_data(self, **kwargs):
        today=date.today()
        context = super().get_context_data(**kwargs)
        orders = Order.objects.all().order_by('-created_at')
        new_customers_count = Customer.objects.filter(created_at=today).count
        todays_orders = Order.objects.filter(created_at=today)
        todays_orders_count = todays_orders.count
        today_money = sum([order.total_price for order in todays_orders])
        context.update({
            'orders':orders,
            'new_customers_count':new_customers_count,
            'todays_orders_count':todays_orders_count,
            'today_money':today_money
        })
        return context