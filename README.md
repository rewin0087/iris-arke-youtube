# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# SETUP

To setup you need to install ruby 2.7.4 and install `bundler` gem.
After installing bundler run `bundle install` then run migration and seed

```
bundle exec rake db:setup

or

bundle exec rake db:create
bundle exec rake db:migrate
bundle exec rake db:seed
```

Install npm packages

```
npm install
```

Run rails app and visit http://localhost:3000

```
rails s
```

Run rspec test

```
bundle exec rspec spec
```

Access rails admin

```
visit: http://localhost:3000/admin
```