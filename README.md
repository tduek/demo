# TTTTT
Tommy's Terrifyingly Tender Tech Talks

## 0. Heroku

0. Create an account at [Heroku](http://heroku.com).
0. Create a new 'app' on Heroku (Apps > Create a new app).
  - Give it a name
  - Copy the git URL for the app
0. Add the remote to your repo
  - `git remote add heroku [GIT URL HERE]`
0. Your app's ready to push up to heroku!
  - Your computer might not be though.
  - begin;
    0. `git push heroku master` && return
    0. If you have SSH problems, I feel bad for you son. I got 99 problems but SSH aint one.
      - This will look something like "you don't have access"
      - Make sure you're logged in to Heroku on the command line
        - `heroku login` && retry
      - Are the SSH keys in the computer yours? This is probably the problem if you're on one of our computers
        0. Blow out the SSH keys: `rm ~/.ssh/id_*`
        0. `heroku keys:add` to generate a new SSH key, and push them up to your Heroku account.
        0. Retry

## 1. [Paperclip][paperclip] and [Figaro][figaro]

- [Paperclip][paperclip]
  0. `gem 'paperclip'` and `gem 'aws-sdk'`
  0. Sign up for [AWS][aws], create an [S3][s3] bucket
    - Make sure you set the region to "US Standard"
  0. Check out:
    - `app/models/user.rb`
    - `config/application.rb`
    - `app/views/users/new.html.erb`
      - `<form enctype="multipart/form-data">`
- [Figaro][figaro]
  - `gem 'figaro'`
  - `rails generate figaro:install`
  - `rake figaro:heroku`
  - `ENV['KEY_NAME']`

[figaro]: https://github.com/laserlemon/figaro
[paperclip]: https://github.com/thoughtbot/paperclip
[aws]: http://aws.amazon.com/
[s3]: http://aws.amazon.com/s3/

## 2. Log in with Facebook!

- Create a new app at [Facebook Developers][fb-devs]
  - Go to Settings > Advanced
    - Whitelist your Oauth redirect URIs in the "Valid OAuth redirect URIs"
      - You should put `localhost:3000` and your Heroku url in there.
- Check out:
  - Gemfile: [`gem 'omniauth-facebook'`][oauth-fb]
  - `config/initializers/omniauth.rb`
  - `config/routes.rb`
  - `app/views/sessions/new.html.rb`
  - `app/controllers/oauth_callbacks.rb`
  - `app/models/user.rb`

[oauth-fb]: https://github.com/mkdynamic/omniauth-facebook
[fb-devs]: http://developers.facebook.com

