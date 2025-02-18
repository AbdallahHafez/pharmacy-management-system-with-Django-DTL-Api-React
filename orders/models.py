from django.db import models
from products.models import Product
from customers.models import Customer

class Order(models.Model):
    customer = models.ForeignKey(Customer,on_delete=models.CASCADE,related_name='orders')
    complete = models.BooleanField(default=False)
    created_at = models.DateField(auto_now_add=True)
    def __str__(self):
        return self.customer.name
    
    @property
    def total_items(self):
        total_numbers = 0
        for item in self.orderitems.all():
            total_numbers += item.quantity
        return total_numbers
    
    @property
    def total_price(self):
        price = 0
        for item in self.orderitems.all():
            price += item.quantity * item.product.price
        return price


class OrderItem(models.Model):
    order = models.ForeignKey(Order,on_delete=models.CASCADE,related_name='orderitems')
    product = models.ForeignKey(Product,on_delete=models.CASCADE)
    quantity =models.PositiveIntegerField(default=0)

    @property
    def total_price(self):
        price = self.quantity * self.product.price
        return price   
