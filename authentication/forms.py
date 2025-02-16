from django import forms
from .models import User


class UserForm(forms.ModelForm):
    username = forms.CharField(widget=forms.TextInput(attrs={'class':'form-control','id':'username'}))
    password = forms.CharField(widget=forms.PasswordInput(attrs={'class':'form-control','id':'password'}))
    class Meta:
        model  = User
        fields = ['username','password']