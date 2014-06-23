WeekendsPlanner is a webapp that will be utilized by users to search for  an event and add the weekly plan and then send it to his/her friends and relatives on Facebook or through e-mail and several other ways available to him/her in this application. All in one.

Technologies used in the production of this app include:
  1) ruby 2.1.1p76
  2) Rails 4.1.1
  3) CSS
  4) Javascript
  5) Jquery
  6) HTML5
  7) JSON API Parsing

User Stories:
  User can search for any event or activity.
  User can base his/her search on the area and type of interst.
  User can create, read, update, destroy a plan.
  User can see a details of a plan without leaving the main page.
  User can login and logout.

This README would normally document whatever steps are necessary to get the application up and running.

Things you may want to cover:

* Ruby version
  ruby 2.1.1p76
  Rails 4.1.1

* System dependencies
 This has not been tested by our app.

* Configuration in Heroku
  HEROKU DEPLOYMENTS
  heroku login
  git add .
  git commit -m "your commit name"
  git push
  bundle install --without production
  git add gemfile
  git add gemfile.lock
  git push heroku master
  heroku run rake db:migrate
  heroku config:set SECRET_KEY_BASE=<your secret key>

* Database creation
  heroku run rake db:create
  Requires Postgres 9.3.4.1 (23)

* Database initialization
  heroku run rake db:migrate
  heroku run rake db:seed

* How to run the test suite
  command is "$ RSPEC" from the root directory

* Deployment instructions
  Download from Github
  Create your own Environment key (rake secret) and add to the env file
  Push to Heroku
