from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView,RetrieveAPIView,CreateAPIView,UpdateAPIView,DestroyAPIView
from customers.models import Customer
from products.models import Product
from orders.models import Order,OrderItem
from authentication.models import User
from datetime import date
from .serializers import(
    OrderSerializer,
    CustomerSerializer,
    ProductSerializer,
    OrderItemSerializer,
    UserSerializer
)
from .serializer2 import CustomCustomerSerializer

class OrderListApiView(ListAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class OrderRetrieveApiView(RetrieveAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class OrderCompleteApiView(APIView):
    def put(self,request,pk):
        order = Order.objects.get(id=pk)
        order.complete=True
        order.save()
        serializer = OrderSerializer(order)
        return Response(serializer.data)

class CustomerListApiView(ListAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

class CustomerRetrieveApiView(RetrieveAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomCustomerSerializer

class CustomerCreateApiView(CreateAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    
class CustomerUpdateApiView(UpdateAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

class CustomerDestroyApiView(DestroyAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

class ProductListApiView(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductCreateApiView(CreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    
class ProductUpdateApiView(UpdateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDestroyApiView(DestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class OrderItemCreateApiView(APIView):
    def post(self,request,pk):
        usercode = request.data.get('usercode')
        quantity = request.data.get('quantity')
        try:
            quantity=int(quantity)
        except:
            return Response({'message':'quantity must be a number'})
        try:
            customer = Customer.objects.get(id=usercode)
            product = Product.objects.get(id=pk)
        except:
            customer = None
            return Response({'message':'seomething went wrong'})
        order,created = Order.objects.get_or_create(customer=customer,complete=False)
        order_item,created = OrderItem.objects.get_or_create(order=order,product=product)
        order_item.quantity = quantity
        order_item.save()       
        return Response({'message':'created'})
  
class OrderItemUpdateApiView(UpdateAPIView):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer

class OrderItemDestroyApiView(DestroyAPIView):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer

class TodayDataView(APIView):
    def get(self,request):
        today = date.today()
        orders = Order.objects.all().order_by('-created_at')
        for order in orders:
            print('looping')
            if order.orderitems.count() == 0 :
                print('deleted')
                order.delete()
        new_customers_count = Customer.objects.filter(created_at=today).count()
        todays_orders = Order.objects.filter(created_at=today)
        todays_orders_count = todays_orders.count()
        today_money = sum([order.total_price for order in todays_orders])
        data = {
            'orders':OrderSerializer(orders,many=True).data,
            'new_customers_count':new_customers_count,
            'todays_orders_count':todays_orders_count,
            'today_money':today_money
        }
        return Response({'data':data})
    
class UserCreateView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    