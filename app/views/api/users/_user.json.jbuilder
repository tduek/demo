json.extract! user, :id, :email

json.picture_url image_url(user.picture.url)