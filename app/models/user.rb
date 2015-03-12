class User < ActiveRecord::Base

  has_many :authored_posts, class_name: 'Post', foreign_key: :author_id

  has_attached_file :picture, default_url: "user_picture.png"
  validates_attachment_content_type :picture, :content_type => /\Aimage\/.*\Z/

end
