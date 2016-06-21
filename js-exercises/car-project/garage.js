var garage = {
  cars: [
    {
      make: 'BMW',
      model: '328Ci',
      color: 'Black'
    },
    {
      make: 'Mercedes',
      model: 'G500',
      color: 'White'
    },
    {
      make: 'Toyota',
      model: 'Tundra',
      color: 'Blue'
    },
    {
      make: 'Kia',
      model: 'Soul',
      color: 'Champagne'
    },
    {
      make: 'Subaru',
      model: 'Impreza',
      color: 'Red'
    }
  ]
};

garage.createCar = function() {
  var make = prompt('What is the make of the car?');
  var model = prompt('What is the model?');
  var color = prompt('What color is it?');
  this.cars.push({make: make, model: model, color: color});
};

garage.searchCar = function() {
  var pickCar = prompt('Pick a car model!');
    for (var i = 0; i < this.cars.length; i++) {
      if (pickCar === this.cars[i].model) {
        return this.cars[i]
      }
    }
    console.log('Car model not found')
};

var Garage = function(cars) {
  this.cars = cars;
};

Garage.prototype.getCars = function() {
  return this.cars;
};


var Car = function(make, model, color) {
  this.make = make;
  this.model = model;
  this.color = color;
}

Car.prototype.getMake = function () {
  return this.make;
};

Car.prototype.getModel = function () {
  return this.model;
};

Car.prototype.getColor = function () {
  return this.color;
};
