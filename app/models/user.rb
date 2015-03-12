class User < ActiveRecord::Base
  include PgSearch
  multisearchable against: :email

  has_many :authored_posts, class_name: 'Post', foreign_key: :author_id

end
