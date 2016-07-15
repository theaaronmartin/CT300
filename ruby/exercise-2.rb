@cars = [
    { make: 'Lamborghini', model: 'Diablo', color: 'Yellow' },
    { make: 'Ferrari', model: 'Enzo', color: 'Red' },
    { make: 'Aston Martin', model: 'Vantage', color: 'Black' },
    { make: 'Tesla', model: 'Model A', color: 'Green' },
    { make: 'Ford', model: 'Pinto', color: 'Brown' }
]

def select_cars
    @cars.select { |car| car[:make].include?('i') || car[:make].include?('a') || car[:make].include?('e') }
end

# puts select_cars

def print_cars selected_cars
    selected_cars.map { |car| car[:make] + ' | ' + car[:model] + ' | ' + car[:color] }
end

puts print_cars select_cars
