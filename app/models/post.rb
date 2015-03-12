class Post < ActiveRecord::Base
  include PgSearch
  multisearchable against: [:title, :body]

  belongs_to :author, class_name: 'User'
end
