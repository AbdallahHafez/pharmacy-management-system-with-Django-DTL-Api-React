from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import redirect

class CustomLoginRequiredMixin(LoginRequiredMixin):
    """Verify that the current user is authenticated."""

    def dispatch(self, request, *args, **kwargs):
        if not request.user.is_authenticated:
            return redirect('authentication:login')
        if  not request.user.is_stuff:
            return redirect('authentication:login')
        return super().dispatch(request, *args, **kwargs)