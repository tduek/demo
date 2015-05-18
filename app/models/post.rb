class Post < ActiveRecord::Base
  include PgSearch


  belongs_to :author, class_name: 'User'

  multisearchable against: [:title, :body]

end
