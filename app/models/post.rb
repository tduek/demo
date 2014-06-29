class Post < ActiveRecord::Base

  belongs_to :author, class_name: 'User'

  include PgSearch
  multisearchable against: [:title, :body]

end
