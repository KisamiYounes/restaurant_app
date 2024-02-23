from django.contrib import admin
from .models import User, Restaurant, Food, Menu, Order


# Register your models here.
admin.site.register(User)
admin.site.register(Restaurant)
admin.site.register(Food)
admin.site.register(Menu)
admin.site.register(Order)
