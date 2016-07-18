require 'pp'
require './lib/blogger'

# user comes to the site
# for the first time
user = Blogger::User.new

user.first_name = "Aaron"
user.last_name = "Martin"
user.email = "grav3serker@gmail.com"

blog = Blogger::Blog.new
blog.title = "Mechanical Keyboards"
blog.author = user

user.blogs = []
user.blogs.push(blog)

# Now user wants to create a post

  post = Blogger::Post.new
  post.title = "PFU HHKB Pro 2"
  post.body = "This is the best keyboard ever. Such amazing feels."
  post.author = user
  post.timestamp = Time.new
  post.blog = blog

  if blog.posts == nil
    blog.posts = []
  end

  blog.posts.push(post)

# Another user comments
another_user = Blogger::User.new
another_user.first_name = "Rush"
another_user.last_name = "Tehrani"

comment = Blogger::Comment.new
comment.body = "Loser!"
comment.author = another_user
comment.timestamp = Time.new
comment.post = post

if post.comments == nil
  post.comments = []
end

post.comments.push(comment)


# Aaron comments on Rush's comment
another_comment = Blogger::Comment.new
another_comment.body = "Hey man, don't be a troll"
another_comment.author = user
another_comment.timestamp = Time.new
another_comment.comment = comment

if comment.comments == nil
  comment.comments = []
end

comment.comments.push(another_comment)

sleep 2

post = Blogger::Post.new
post.title = "Leopold FC660M"
post.body = "This is also amazing. The MX Browns feel great. Love it!"
post.author = user
post.timestamp = Time.new
post.blog = blog

if blog.posts == nil
  blog.posts = []
end

blog.posts.push(post)

# pp Blogger.users.map { |u| u.first_name + ' ' + u.last_name }

pp blog.posts
  .sort { |p| p.timestamp <=> p.timestamp }
  .map { |p| p.title + ' - ' + p.timestamp.to_s }
