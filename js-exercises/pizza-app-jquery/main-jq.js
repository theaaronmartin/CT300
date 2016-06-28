/*
GOALS FOR PIZZA UNICORN

2.  Orders contain one or many Pizzas

3.  Pizzas have one or many Items

4.  PU has many Delivery People

5.  Orders get assigned to a Random Delivery Person
*/

// *********** Initialize ***********
$(function() {
  var pageAddCustomer = $('page-add-customer');
  var pageAddPizza = $('page-add-pizza');
  var pageCart = $('page-cart');
  var pageReceipt = $('page-receipt');
  var buttonCustomer = $('btn-add-customer');
  var buttonPizza = $('btn-add-pizza');
  var buttonCart = $('btn-add-cart');
  var linkAddMorePizzas = $('add-more-pizzas');

  var firstName = $('firstName');
  var lastName = $('lastName');
  var email = $('email');
  var state = $('state');
  var zip = $('zip');
  var pizzaDropdown = $('pizza-dropdown');
  var pizzaSizeList = $('pizza-size-list');
  var toppingList = $('topping-list');
  var pizzaForm = $('pizza-form');
  var cartDisplay = $('cart-display');
  var navLinks = $('.nav-link');

  var customer = {};
  var order = {};
  var pizza = {};

  // *********** Create Customer Page ***********
  pageAddCustomer.style.display = 'block';
  var currentPage = pageAddCustomer;

  buttonCustomer.on('click', function() {
    customer = new Customer(firstName.value, lastName.value, email.value, state.value, zip.value);
    order = new Order(customer);

    loadPizzaOptions();

    console.log('');
    console.log('------ Customer Order Created! ------');
    console.log(customer);
    console.log(order);

    navigate(currentPage, pageAddPizza);
  });

  // *********** Add Pizzas Page ***********
  buttonPizza.addEventListener( 'click', function() {
    pizza = new Pizza();
    var pizzaSize = new PizzaSize(pizzaDropdown.dataset.name, pizzaDropdown.dataset.cost);
    pizza.setSize(pizzaSize);
    order.addPizza(pizza);

    console.log('');
    console.log('------ Pizza Added! ------');
    console.log(pizza);
    console.log(order.pizzas);

    navigate(currentPage, pageCart);
  });

  var loadPizzaOptions = function() {
    var caretText = ' <span class="caret"></span>';
    pizzaDropdown.innerHTML = "Select a Pizza" + caretText;
    delete pizzaDropdown.dataset.name;
    delete pizzaDropdown.dataset.cost;
    pizzaSizeList.innerHTML = '';


    for (i = 0; i < allPizzaSizes.length; i++) {
      var listItemLink = document.createElement('a');
      listItemLink.href = '#';
      listItemLink.dataset.name = allPizzaSizes[i].name;
      listItemLink.dataset.cost = allPizzaSizes[i].cost;
      listItemLink.innerHTML = allPizzaSizes[i].name;

      listItemLink.addEventListener( 'click', function() {
        pizzaDropdown.innerHTML = this.innerHTML + caretText;
        pizzaDropdown.dataset.name = this.dataset.name;
        pizzaDropdown.dataset.cost = this.dataset.cost;
      });

      var listItem = document.createElement('li');
      listItem.appendChild(listItemLink);
      pizzaSizeList.appendChild(listItem);
    }

  }

});
