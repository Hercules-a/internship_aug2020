from unittest import TestCase
from task_1 import Product


class TestTask1(TestCase):
    def setUp(self):
        self.product = Product('Potato', 50, 2.59)

    def test_show_name(self):
        show_name = self.product.show_name()
        self.assertEqual('Name of this product is Potato', show_name)

    def test_show_amount(self):
        show_amount = self.product.show_amount()
        self.assertEqual('Potato amount is 50', show_amount)

    def test_show_price(self):
        show_price = self.product.show_price('PLN')
        self.assertEqual('Potato price is 2.59PLN', show_price)

    def test_calculate_total_value(self):
        total_value = self.product.calculate_total_value()
        self.assertEqual(50*2.59, total_value)