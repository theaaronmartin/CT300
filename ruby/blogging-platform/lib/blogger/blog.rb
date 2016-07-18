module Blogger
  class Blog
    attr_accessor :title, :author,  # a User
      :posts,  # Array of Post

    def initialize
      Blogger.blogs.push(self)
    end
  end
end
