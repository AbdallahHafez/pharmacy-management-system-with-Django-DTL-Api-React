from rest_framework import serializers
from customers.models import Customer
from .serializers import OrderSerializer
class CustomCustomerSerializer(serializers.ModelSerializer):
    orders = OrderSerializer(many=True)
    class Meta:
        model = Customer
        fields =['id','name','created_at','address','mobile','orders']
