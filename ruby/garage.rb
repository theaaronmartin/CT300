class Ticket
  attr_accessor :timestamp

  def initialize
    @timestamp = Time.new
  end
end

class Vehicle
  attr_accessor :make, :model, :color, :width, :length, :height, :ticket, :type, :spot
end

class Spot
  attr_accessor :type, :level, :number
  attr_accessor :quantity
  attr_accessor :vehicle

  def initialize type, level, number
    @type = type
    @level = level
    @number = number
  end
end

class Garage
  @@number_of_garages = 0

  attr_accessor :spots, :vehicles, :available_spot_types

  def self.all_available_spot_types
    ["Motorcycle", "Car", "Truck", "Handicap"]
  end

  def self.number_of_garages
    @@number_of_garages
  end

  def initialize
    @@number_of_garages += 1
    @vehicles = []
  end

  def assign_spot vehicle
    for spot in @spots
      if spot.vehicle == nil && spot.type == vehicle.type
        spot.vehicle = vehicle
        spot.vehicle.spot = spot
        return
      end
    end
  end

  #def free_spot vehicle
  #  @vehicles.delete(vehicle)
  #end

  def on_vehicle_enter vehicle
    vehicle.ticket = Ticket.new
    @vehicles << vehicle
    assign_spot vehicle
  end

  def on_vehicle_exit vehicle
    #vehicle.ticket
    @vehicles.delete vehicle
    vehicle.spot.vehicle = nil
  end
end

garage = Garage.new
garage.available_spot_types = [
  Garage.all_available_spot_types[0],
  Garage.all_available_spot_types[1],
]
garage.spots = [
  Spot.new(garage.available_spot_types[0], 1, 100),
  Spot.new(garage.available_spot_types[1], 1, 101),
  Spot.new(garage.available_spot_types[0], 2, 200),
  Spot.new(garage.available_spot_types[1], 2, 201),
]


vehicle = Vehicle.new
vehicle.height = 60
vehicle.type = Garage.all_available_spot_types[1]

garage.on_vehicle_enter vehicle

lambo = Vehicle.new
lambo.height = 72
lambo.type = Garage.all_available_spot_types[1]

garage.on_vehicle_enter lambo

ferrari = Vehicle.new
ferrari.height = 48
ferrari.type = Garage.all_available_spot_types[1]

garage.on_vehicle_enter ferrari

ducati = Vehicle.new
ducati.height = 36
ducati.type = Garage.all_available_spot_types[0]

garage.on_vehicle_enter ducati

garage.on_vehicle_exit ducati

#garage.vehicles[0].ticket.timestamp
p garage.spots[0]
p garage.spots[1]
p garage.spots[2]
p garage.spots[3]
