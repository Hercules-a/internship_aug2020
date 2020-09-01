from internship_aug2020 import data
from random import randrange, uniform
from json import dump


# Create class "Product" that inherits from data.ParentProduct class.
class Product(data.ParentProduct):

    # Class should have a parameterized constructor that takes the following args: name, amount, price.
    def __init__(self, name, amount, price):
        super().__init__(name=name)
        self.amount = amount
        self.price = price

    # show_price - takes one string argument "currency"
    # and print string in format: '<product_name> price is <product_price>'
    def show_price(self, currency):
        print('{} price is {}'.format(self.name, self.price))

    # show_amount method that print in format '<product_name> amount is <product_amount>'
    def show_amount(self):
        print('{} amount is {}'.format(self.name, self.amount))

    # calculate_total_value return total value of product (amount * price)
    def calculate_total_value(self):
        return self.amount * self.price


# Basing on MIN and MAX values from data.products dictionary generate prices and stock levels (amount).
for element in data.products:
    element['amount'] = randrange(element['amount']['min'], element['amount']['max'], 1)
    element['price'] = round(uniform(element['price']['min'], element['price']['max']), 2)

# Using previously updated data.products records (amount and price) create
# Product class instances and push them into data.obj_list.
for element in data.products:
    data.obj_list.append(Product(element['name'], element['amount'], element['price']))

# Create a list of summary values for each product (amount times price).
summary = []
for product in data.obj_list:
    summary.append(round(product.calculate_total_value(), 2))

# Save summary value, data.products and data.obj_list to results_01.txt file in a comprehensive format.
with open('results_01.txt', 'w') as file:

    file.write(str(summary))
    file.write('\n\n')

    dump(data.products, file)
    file.write('\n\nname, amount, price\n')

    for product in data.obj_list:
        file.write('{}, {}, {} \n'.format(product.name, product.amount, product.price))
