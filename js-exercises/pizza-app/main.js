/*
GOALS FOR PIZZA UNICORN
1.  PU has Customers
      - Customers can Sign Up
      - Customers create Orders
2.  Orders contain one or many Pizzas
3.  Pizzas have one or many Items
4.  PU has many Delivery People
5.  Orders get assigned to a Random Delivery Person
*/

//1.  PU has Customers
//      - Customers can Sign Up
//      - Customers create Orders

var pageAddCustomer = document.getElementById('page-add-customer')
var pageAddPizza = document.getElementById('page-add-pizza')
var pageCart = document.getElementById('page-cart')
var pageReceipt = document.getElementById('page-receipt')
var navLinks = document.querySelectorAll('.nav-link');
var buttonCustomer = document.getElementById('btn-add-customer');
var buttonPizza = document.getElementById('btn-add-pizza');
var buttonCart = document.getElementById('btn-add-cart');

var firstName = document.getElementById('firstName')
var lastName = document.getElementById('lastName')
var email = document.getElementById('email')
var state = document.getElementById('state')
var zip = document.getElementById('zip')

var customers = [];

var customer = {};
var order = {};
var pizza = {};

// Page 1
buttonCustomer.addEventListener( 'click', function() {
  customer = new Customer(firstName.value, lastName.value, email.value, state.value, zip.value);
  customers.push(customer);
  var order = new Order(customer);

  navigate(currentPage, pageAddPizza);
});

//Page 2
buttonPizza.addEventListener( 'click', function() {
  pizza = new Pizza();
  var pizzaSize = new PizzaSize('name', 'cost');
  pizza.setSize(pizzaSize);

  customers.push(customer);
  navigate(currentPage, pageCart);
});

//Page 3
buttonCart.addEventListener( 'click', function() {
  var deliveryPerson = deliveryPeople[ Math.floor(Math.random() * deliveryPeople.length) ];
  order.addDeliveryPerson(deliveryPerson);

  console.log(customer);
  console.log(order);
  console.log(pizza);
  navigate(currentPage, pageReceipt);

});

pageAddCustomer.style.display = 'block';
var currentPage = pageAddCustomer;

var navigate = function(pageFrom, pageTo) {
  pageFrom.style.display = 'none';
  currentPage = pageTo;
  currentPage.style.display = 'block';
}

for (i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener( 'click', function() {
    switch (this.id) {
      case 'link-customer':
        navigate(currentPage, pageAddCustomer);
        break;

      case 'link-pizza':
        navigate(currentPage, pageAddPizza);
        break;

      case 'link-cart':
        navigate(currentPage, pageCart);
        break;

      case 'link-receipt':
        navigate(currentPage, pageReceipt);
        break;

      default:
        console.log('You clicked a link that I don\'t know about! Hurry! Run back!');

    }
  });
}

var Customer = ( function() {
  var incrementedId = 1;

  return function Customer(firstname, lastname, phone, email, address1, city, state, zip) {
    this.id = incrementedId++,
    this.firstname = firstname,
    this.lastname = lastname,
    this.phone = phone,
    this.email = email,
    this.address1 = address1,
    this.city = city,
    this.state = state,
    this.zip = zip
  }

})();

var Order = ( function(customer) {
  var incrementedId = 10001;

  return function Order(customer) {
    this.id = incrementedId++,
    this.customerId = customer.id,
    this.deliveryPerson = {},
    this.pizzas = []
    this.totalCost = 0,
    this.addPizzas = function(pizza) {
      this.pizzas.push(pizza);
      this.totalCost = pizza.totalCost;
    },
    this.addDeliveryPerson = function(deliveryPerson) {
      this.deliveryPerson = deliveryPerson;
    }
  }

} )();

var Pizza = function() {
  this.toppings = [],
  this.totalCost = 0;
  this.size = {};
  this.setSize = function(size) {
    this.size = size;
    this.totalCost += parseInt(size.cost)
  }
  this.addTopping = function(topping) {
    this.toppings.push(topping);
    this.totalCost += parseFloat(topping.cost);
  }
};

var Topping = function(name, cost) {
  this.name = name,
  this.cost = cost
};

var allToppings = [
  new Topping('Pepperoni', 0),
  new Topping('Bacon', .50),
  new Topping('Jalepeno', 0),
  new Topping('Lobster', 3),
  new Topping('Mac \'n Cheese', 2),
  new Topping('Caviar', 10),
]

var PizzaSize = function(name, cost) {
  this.name = name,
  this.cost = cost
};

var allPizzaSizes = [
  new PizzaSize('Small', 10),
  new PizzaSize('Medium', 14),
  new PizzaSize('Large', 20)
]



// Make a pizza in console!

pizza = new Pizza();
pizza.setSize(allPizzaSizes[1])
pizza.addTopping(allToppings[1]);
pizza.addTopping(allToppings[3]);
pizza.addTopping(allToppings[4]);

// End make pizza in console

var DeliveryPerson = function(name, phone, car) {
  this.name = name,
  this.phone = phone,
  this.car = car
}

var deliveryPeople = [
  new DeliveryPerson('Markus', '415-555-1212', 'Ferrari'),
  new DeliveryPerson('Liam', '666-555-1212', 'Pinto'),
  new DeliveryPerson('Markham', '948-444-1212', 'Bently'),
  new DeliveryPerson('Blaze', '309-995-1212', 'Moped'),
  new DeliveryPerson('Jayson', '818-995-1212', 'Hover Board'),
  new DeliveryPerson('Markus', '233-555-1212', 'Ford Fiesta'),
]
