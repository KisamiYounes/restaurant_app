
from django.db import models

# Create your models here.


class User(models.Model):  # Assuming this is the intended User model
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=False)
    password = models.CharField(max_length=255)
    age = models.IntegerField()
    gender = models.CharField(max_length=10)
    marital_status = models.CharField(max_length=255)
    occupation = models.CharField(max_length=255)
    monthly_income = models.CharField(max_length=255)
    educational_qualifications = models.TextField()
    family_size = models.IntegerField()

class Restaurant(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    rating = models.CharField(max_length=255)
    rating_count = models.CharField(max_length=255)
    cost = models.CharField(max_length=255)  # Assuming cost refers to price range or category
    cuisine = models.CharField(max_length=255)
    lic_no = models.CharField(max_length=255)
    link = models.URLField()
    address = models.TextField()



class Food(models.Model):
    f_id = models.AutoField(primary_key=True)
    item = models.CharField(max_length=255)
    veg_or_non_veg = models.CharField(max_length=10)

class Menu(models.Model):
    menu_id = models.AutoField(primary_key=True)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)  # Assuming a connection to Restaurant model
    food = models.ForeignKey(Food, on_delete=models.CASCADE)
    cuisine = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)

class Order(models.Model):
    order_date = models.DateTimeField()
    sales_qty = models.IntegerField()
    sales_amount = models.DecimalField(max_digits=10, decimal_places=2)
    currency = models.CharField(max_length=10)
    user = models.ForeignKey(User, on_delete=models.CASCADE)  # Assuming a connection to User model
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)  # Assuming a connection to Restaurant model
