import { writeFile } from 'fs';
import {ParentProduct, products, obj_list} from './module/data.js';

// Create class "Product" that inherits from data.ParentProduct class.
class Product extends ParentProduct{
    // Class should have a parameterized constructor that takes the following args: name, amount, price.
    constructor(name, amount, price) {
        super(name);
        this.amount = amount
        this.price = price
    }
    // show_price - takes one string argument "currency"
    // and print string in format: '<product_name> price is <product_price>'
    show_price(currency) {
        console.log(`${this.name} price is ${this.price}`);
    }
    // show_amount method that print in format '<product_name> amount is <product_amount>'
    show_amount(){
        console.log(`${this.name} amount is ${this.amount}`);
    }
    // calculate_total_value return total value of product (amount * price)
    calculate_total_value(){
        return this.amount * this.price;
    }
}

// Basing on MIN and MAX values from data.products dictionary generate prices and stock levels (amount).
function getRandom(min, max, digits = 0) {
    let multiplier = 1
    for (let i = 0; i<digits; i++) {
        multiplier *= 10
    }
    max *= multiplier
    return Math.floor(Math.random()*(max-min+1)+min)/multiplier;
}

for (let i in products) {
    products[i]['amount'] = getRandom(products[i]['amount']['min'], products[i]['amount']['max']);
    products[i]['price'] = getRandom(products[i]['price']['min'], products[i]['price']['max'], 2);
}

// Using previously updated data.products records (amount and price) create
// Product class instances and push them into data.obj_list.
for (let i in products) {
    obj_list.push(new Product(products[i]['name'], products[i]['amount'], products[i]['price']));
}

function roundToTwo(num, digit) {
    return Math.round(num * 100) / 100;
}

// Create a list of summary values for each product (amount times price).
let summary = [];
for (let i in obj_list) {
    summary.push(roundToTwo(obj_list[i].calculate_total_value()));
}

// Save summary value, data.products and data.obj_list to results_01.txt file in a comprehensive format.
let txt = summary.join([' ']);
txt += '\n\n';

txt += JSON.stringify(products);

txt += '\n\nname, amount, price\n';
for (let i in obj_list) {
    txt += `${obj_list[i].name}, ${obj_list[i].amount}, ${obj_list[i].price}\n`
}

writeFile('js/results_01.txt', txt, function (err, data) {} );