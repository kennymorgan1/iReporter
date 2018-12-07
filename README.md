# iReporter
[![Coverage Status](https://coveralls.io/repos/github/kennymorgan1/iReporter/badge.svg?branch=develop)](https://coveralls.io/github/kennymorgan1/iReporter?branch=develop) [![Build Status](https://travis-ci.com/kennymorgan1/iReporter.svg?branch=develop)](https://travis-ci.com/kennymorgan1/iReporter) <a href="https://codeclimate.com/github/kennymorgan1/iReporter/maintainability"><img src="https://api.codeclimate.com/v1/badges/536e10d46300b994a239/maintainability" /></a>
```
iReporter enables any/every citizen to bring any form of corruption to the notice of appropriate authorities and the general public.
```
## Features
```
Users can create an account
Users can log in to their accounts
Users can create a Red-flag
Users can edit a Red-Flag
Users can delete a Red-flag
Users can Log out
Admin can Log in
Admin can change the status of a Red-flag
```
## Getting Started
```
Clone the git repository by running the command
git clone https://github.com/kennymorgan1/iReporter.git
```

### Prerequisites
```
You need to have the following installed
- Nodejs
-Express
```

### Installing
- Navigate to the develop branch
- Update to origin branch
- Install all npm packages
- Start the server

```
- git checkout develop
- git pull
- npm install
- npm run dev
```

### Running the test
```
All Api endpoints are tested using postman or Heroku
```

## Test breakdown
### Get all red-flags report
GET localhost:3000/api/v1/red-flags
Heroku https://kennyireporter.herokuapp.com/api/v1/red-flags

### Get  a specific red-flag report
GET localhost:3000/api/v1/red-flags/id
Heroku https://kennyireporter.herokuapp.com/api/v1/red-flags/:id

### Create a red-flag report
POST localhost:3000/api/v1/red-flags
Heroku https://kennyireporter.herokuapp.com/api/v1/red-flags

### Update a red-flag report location
PATCH localhost:3000/api/v1/red-flags/id/location
Heroku https://kennyireporter.herokuapp.com/api/v1/red-flags/:id/location

### Update a red-flag report comment
PATCH localhost:3000/api/v1/red-flags/id/comment
Heroku https://kennyireporter.herokuapp.com/api/v1/red-flags/:id/comment

### Delete a red-flag report

DELETE localhost:3000/api/v1/red-flags/id
Heroku https://kennyireporter.herokuapp.com/api/v1/red-flags/:id
## Gh- pages
https://kennymorgan1.github.io/iReporter

## Heroku
https://kennyireporter.herokuapp.com/

### Credit
```
Credits to Andela
```

### License
```
MIT (c) 2018 Kenneth.
```
