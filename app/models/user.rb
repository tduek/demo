class User < ActiveRecord::Base

  has_many :authored_posts, class_name: 'Post', foreign_key: :author_id

end
