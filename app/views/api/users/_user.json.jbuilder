json.extract! user, :id, :email, :created_at

json._type "User"

json.posts user.authored_posts, partial: "api/posts/post", as: :post