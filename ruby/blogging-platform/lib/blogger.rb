require './lib/blogger/blog'
require './lib/blogger/post'
require './lib/blogger/user'
require './lib/blogger/comment'

module Blogger
  @blogs = []
  @users = []

  def self.blogs
    @blogs
  end

  def self.users
    @users
  end
end
