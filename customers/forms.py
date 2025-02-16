from django import forms

from .models import Customer

class CustomerForm(forms.ModelForm):
    name=forms.CharField(widget=forms.TextInput(attrs={'class':'form-control','id':'name'}))
    address=forms.CharField(widget=forms.TextInput(attrs={'class':'form-control','id':'address'}))
    mobile=forms.CharField(widget=forms.TextInput(attrs={'class':'form-control','id':'mobile'}))

    class Meta:
        model =  Customer
        fields = ['name','address','mobile']