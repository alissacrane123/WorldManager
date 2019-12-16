@posts.each do |post|
  json.set! post.id do
    json.partial! "api/posts/post", post: post
    json.author (post.user.fname + ' ' + post.user.lname)
  end
end