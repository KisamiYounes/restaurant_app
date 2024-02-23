import csv
from django.utils import timezone
import os
import django
import random

# Set the DJANGO_SETTINGS_MODULE environment variable
import sys
import os

# Add the directory containing your Django project to the Python path
sys.path.append(r'C:\Users\L15\OneDrive\Documents\younes\Younes\Resturent\Restaurent_food_app')

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Restaurent_food_app.settings')

# Configure Django settings
django.setup()

from Restaurent_Server.models import Restaurant, User, Order

# Paths to your CSV files
menu_csv_path = 'csvfiles/order.csv'

# Import data from CSV files
def import_order_from_csv(file_path):
    invalid_rows = []
    users = list(User.objects.all())
    restaurants = list(Restaurant.objects.all())

    with open(file_path, 'r') as file:
        reader = csv.reader(file)
        header = next(reader)
        orders_to_create = []
        for row in reader:
            try:
                user_id = int(row[5])
                user = next((u for u in users if u.id == user_id), None)
                if user is None:
                    user = random.choice(users)
                
                restaurant_id = int(row[6])
                restaurant = next((r for r in restaurants if r.id == restaurant_id), None)
                if restaurant is None:
                    restaurant = random.choice(restaurants)
                
                Order.objects.create(
                    order_date=timezone.now(),
                    sales_qty=row[2],
                    sales_amount=row[3],
                    currency=row[4],
                    user=user,
                    restaurant=restaurant
                )
                
            except Exception as e:
                print(f"Error processing row: {e}")
                invalid_rows.append(row)

        # Bulk create orders
        

    if invalid_rows:
        with open('invalid_orders.csv', 'w', newline='') as csvfile:
            writer = csv.writer(csvfile)
            writer.writerow(header)
            writer.writerows(invalid_rows)

import_order_from_csv(menu_csv_path)
