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

var createCar = function() {
  var make = prompt('What is the make of the car?');
  var model = prompt('What is the model?');
  var color = prompt('What color is it?');
  garage.cars.push({make: make, model: model, color: color});
};

var searchCar = function() {
  var pickCar = prompt('Pick a car model!');
    for (var i = 0; i < garage.cars.length; i++) {
      if (pickCar === garage.cars[i].model) {
        return garage.cars[i]
      }
    }
}
