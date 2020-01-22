author = @post.user

json.set! @post.id do
  json.partial! "api/posts/post", post: @post
  json.author author.fname + ' ' + author.lname
end