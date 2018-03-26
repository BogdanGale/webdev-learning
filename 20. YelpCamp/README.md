## Synopsis

This is my largest project, YelpCamp. It is basically a presentation website in which any registered user can create a post for a campground by adding its name, a picture, a short description and a price/night and loged in users can comment on these posts.

Here are some of YelpCamp's features:

- User Sign up/Login/Logout
- Dynamic header for loged in/out visitors
- Registered users can create Campground pages
- Loged in users can comment on the campground pages
- Campground Pages and comments can be edited/deleted only by their "owners"
- Edit/Delete buttons show up only for the "owners"
- Flash messages for loging in/out, trying to access unauthorized pages, etc.
- Slideshow background on the landing page

I have deployed it on Heroku and used mLab for the database hosting

You can create your user and try it out here:

[Yelp Camp](https://boiling-depths-49801.herokuapp.com/)

## Technologies used:

- Node JS
- Express JS
- mongoDB
- User Authentication (passport)
- View Engine (ejs)
- body-parser
- [mLab (online database)](https://mlab.com/)
- [flash messages](https://www.npmjs.com/package/connect-flash)
- RESTful routing
- Bootstrap
