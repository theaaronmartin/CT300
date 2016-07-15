class Blog
  attr_accessor :title, :author, :posts
end

class User
  attr_accessor :name
end

class Post
  attr_accessor :title, :body, :author, :comments
end


class Comment
  attr_accessor :author, :body, :timestamp

  def initialize
    @timestamp = Time.new
  end
end
