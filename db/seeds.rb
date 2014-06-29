# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.delete_all
Post.delete_all

50.times do |i|

  user = User.create!(email: "user##{ i + 1 }@example.ninja", password: '123456')

  10.times do |j|
    user.authored_posts.create!(
      title: "Post ##{ (i * 10) + (j + 1) }",
      body: 'Check out my awesome (post) body. Ooh la la!'
    )

    if j % 3 == 0 && i % 5 == 0 && i % 3 == 0
      user.authored_posts.create!(
        title: 'Hello, I love you, won\'t you tell me your name?',
        body: 'It\'s Tommy!'
      )
    end
  end

end

tommy = User.create!(email: 'tommy@appacademy.io', password: '123456')
