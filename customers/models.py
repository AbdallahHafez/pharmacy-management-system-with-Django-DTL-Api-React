from django.db import models

class Customer(models.Model):
    name=models.CharField(max_length=100,null=True,blank=True)
    address=models.CharField(max_length=100,null=True,blank=True)
    mobile=models.CharField(max_length=100,null=True,blank=True)
    created_at=models.DateField(auto_now_add=True)

    def __str__(self):
        return self.name