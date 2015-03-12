# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

50.times do |i|

  user = User.create!(email: "user##{ i + 1 }@example.ninja")

  10.times do |j|
    user.authored_posts.create!(
      title: "Post ##{ (i * 10) + (j + 1) }",
      body: 'Check out my awesome (post) body. Ooh la la!'
    )
  end

  if i % 15 == 0
    user.authored_posts.create!(
      title: "Really rare post",
      body: "Try to find me"
    )
  end

end

u = User.create! email: "rare@user.com"
u.authored_posts.create!(
  title: "Rare user's first post",
  body: "NaNNaNNaNNaNNaNNaN Batman!"
)
