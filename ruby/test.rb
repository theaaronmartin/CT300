# Create an array of 5 car hashes containing make, model and color keys. Make sure one is color red

cars = [
    { make: 'Lamborghini', model: 'Diablo', color: 'Yellow' },
    { make: 'Ferrari', model: 'Enzo', color: 'Red' },
    { make: 'Aston Martin', model: 'Vantage', color: 'Black' },
    { make: 'Tesla', model: 'Model A', color: 'Green' },
    { make: 'Ford', model: 'Pinto', color: 'Brown' }
]

# Search for the car that has a color red

for car in cars
    puts car[:make] + ' ' + car[:model] if car[:color] == 'Red'
end

# => Ferrari Enzo

# Search for a car or car(s) that contains the letter i in its make. Hint: use http://ruby-docs.org as reference.

for car in cars
    puts car[:make] if car[:make].include? 'i'
end

# => Lamborghini
# => Ferrari
# => Aston Martin

# Print out the car make and model for each car using two ways to concatenate strings.

for car in cars
    puts car[:make] + ' ' + car[:model]
end

# => Aston Martin
# => Lamborghini Diablo
# => Ferrari Enzo
# => Aston Martin Vantage
# => Tesla Model A
# => Ford Pinto

# Print to console a string of all car makes separated by |

makes = []

for car in cars
    makes << car[:make]
end

puts makes.join ' | '

# => Lamborghini | Ferrari | Aston Martin | Tesla | Ford
