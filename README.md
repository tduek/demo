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

## 1. Paperclip and Figaro


