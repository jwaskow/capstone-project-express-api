# Tea Time API

### Links

Client Repository: https://github.com/jwaskow/capstone-project-frontend

Client Application: https://jwaskow.github.io/capstone-project-frontend/

Deployed API: https://dry-oasis-74645.herokuapp.com/

### Entity Relationship Diagram

![Entity Relationship Diagram](http://i.imgur.com/ROkbJEW.png)

### Routes

```
.post('/sign-up', 'users#signup')
.post('/sign-in', 'users#signin')
.delete('/sign-out/:id', 'users#signout')
.patch('/change-password/:id', 'users#changepw')
.resources('users', { only: ['index', 'show'] })
.resources('teas', { only: ['create', 'index', 'show', 'update', 'destroy'] })
```

#### Dependencies

Dependencies are installed with `npm install`

### Technologies

I built this API with Express.js, MongoDB, and Mongoose.  I chose this setup because my app did not require any relationships (or foreign keys) between tables, and express & MongoDB work very well without foreign keys.  Setting up the API took a very short time since it did not require very complicated relationships.

### General Approach

This API did not take a long time to build.  I began by creating a teas controller and model, then adding the correct routes and authentication.  I tested all CRUD actions with curl scripts before deploying to Heroku.

When creating the teas resource, I had to consider how to best send steep time data to the server while maintaining a user friendly view.  I decided to make steep time be stored in seconds (so 2 minutes 30 seconds is 150 seconds), because I thought this would be the easiest way to send the time data to the timer.  However, a user wouldn't want to see '150 seconds' under steep time, so on the front end I had the select element display '2 minutes 30 seconds', and when selected would send a value of '150' to the server and timer.  

### Hurdles

Honestly, I did not have any problems creating the API.  As I stated previously, this API is relatively simple, and the main complexity occurs on the front end.  Because of this, I spent the majority of my time working through problems with javascript, CSS, and jQuery.
