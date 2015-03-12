json.extract! user, :id, :email

json.posts user.authored_posts, partial: "api/posts/post", as: :post