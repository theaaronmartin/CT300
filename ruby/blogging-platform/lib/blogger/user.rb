module Blogger
  class User
    attr_accessor :first_name, :last_name,
      :username, :email, :password,
      :blogs,
      :posts,
      :comments

      def initialize
        Blogger.users.push(self)
      end
  end
end
