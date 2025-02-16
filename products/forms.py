from django import forms
from .models import Product

class ProductForm(forms.ModelForm):
    name = forms.CharField(widget=forms.TextInput(attrs={'class':'form-control','id':'name'}))
    price = forms.DecimalField(widget=forms.NumberInput(attrs={'class':'form-control','id':'price'}))
    
    class Meta:
        model = Product
        fields = ['name','price']