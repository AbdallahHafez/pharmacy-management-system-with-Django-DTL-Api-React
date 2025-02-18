from customers.models import Customer
from products.models import Product
from orders.models import Order,OrderItem
from authentication.models import User
from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
import json
from authentication.models import User

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['username','password']
        fields_kwargs={'password':{'read_only':True}}

    def create(self,validated_data):
        user = User.objects.create_user(**validated_data)
        return user
class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class CustomerSerializer(ModelSerializer):
    class Meta:
        model = Customer
        fields ='__all__'

class OrderItemSerializer(ModelSerializer):
    total_price = serializers.SerializerMethodField()
    product = ProductSerializer()
    class Meta:
        model = OrderItem
        fields = ('id','order','quantity','product','total_price')

    def get_total_price(self,obj):
        price=0
        if obj.quantity :
            price = obj.quantity * obj.product.price
        return price  
 

class OrderSerializer(ModelSerializer):
    total_items = serializers.SerializerMethodField()
    total_price = serializers.SerializerMethodField()
    orderitems = OrderItemSerializer(many=True)
    customer=CustomerSerializer()
    class Meta:
        model = Order
        fields = ('id','customer','complete','created_at','total_items','total_price','orderitems')

    def get_total_items(self,obj):
        total_numbers = 0
        for item in obj.orderitems.all():
            total_numbers += item.quantity
        return total_numbers
    
    def get_total_price(self,obj):
        price = 0
        for item in obj.orderitems.all():
            price += item.quantity * item.product.price
        return price