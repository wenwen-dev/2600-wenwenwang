# best-food-in-vancouver

This is my first ever full stack project!

It is part of the CPSC 2600 Full Stack Web Dev I course taught by Prof. Jordan Miller.

The application contains a front-end built by React, and a backend and database built by Node.js(incl. Express) and Mongoose.

## Design

### MongoDB Schema

- Food (name, description, cuisine)
- Restaurant (name, neighborhood, cuisine, has Michelin Star, location on map)
- Cuisine (name)
- Neighborhood (using a map API)(name, coordinates)

### UI/API

- /foods

  - GET / [get all food]
  - GET /cuisine [get foods of a particular cuisine]
  - POST / [create a new food]

- /restaurants

  - GET / [get all restaurants]
  - GET /:restaurant [get all foods of a restaurant, location, cuisine]
  - GET /:cuisine [get all restaurants of a particular cuisine]
  - GET /:michelin [get all restaurants with Michelin star]

- /cuisines
  - GET / [get all cuisines]
