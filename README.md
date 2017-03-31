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

### Hurdles

Honestly, I did not have any problems creating the API.  As I stated previously, this API is relatively simple, and the main complexity occurs on the front end.  Because of this, I spent the majority of my time working through problems with javascript, CSS, and jQuery.  
