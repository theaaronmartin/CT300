class Board
  attr_accessor :spots

  @spots = [' ',' ',' ',' ',' ',' ',' ',' ',' ']

  def print_board
    i = 1
    for values in @spots
      print " #{values} "
      if i % 3 == 0
        puts
        puts '-----------' if i != 9
      else
        print '|'
      end
      i += 1
    end
  end

  def play(choice, spot)
    if @spots[move - 1] == ' '
      @spots[move - 1] == spot
      return true
    else
      puts "Spot is filled. Choose another"
      return false
    end
  end
end

class Player

  def player_choice
    puts "Pick a spot, 1 - 9:"
    choice = gets.chomp.to_i
    while choice < 1 || choice > 9
      puts "Pick a number between 1 and 9"
      choice = gets.chomp.to_i
    end
    return choice
  end
end

class Game
  def start
    board = Board.new
    player1 = Player.new X
    player2 = Player.new O
    current_player = player1
  end
end

game = Game.new
game.start
