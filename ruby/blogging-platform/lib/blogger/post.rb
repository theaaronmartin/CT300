module Blogger
  class Post
    attr_accessor :title, :body, :author,
      :timestamp,
      :blog,  # belongs_to Blog
      :comments  # has_many Comment

  end
end
