class User < ActiveRecord::Base
  include PgSearch


  has_many :authored_posts, class_name: 'Post', foreign_key: :author_id

  multisearchable against: :email

end
