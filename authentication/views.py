from django.shortcuts import render
from django.urls import reverse
from .forms import UserForm
from django.views.generic import CreateView
from django.contrib.auth.hashers import make_password
from django.contrib.auth.views import LoginView
class UserCreateView(CreateView):
    template_name = 'authentication/register.html'
    form_class = UserForm
    # def get_success_url(self):
    #     return reverse('base:index.html')

    def form_valid(self, form):
        user = form.save(commit=False)
        user.password=make_password(form.cleaned_data['password'])
        user.save()
        return super().form_valid(form)
