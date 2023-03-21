# LapNow API
A LapNow is a simple mobile app that connect buyers of laptops to those that want to sell laptops want to create a thier API,This project was built using the node js express framework and used mongodb as the database management system..I have been tasked to work as Backend Developer to create the following for the application.

##### User
- [x] User should be able to register
- [x] User should be able to login
- [x] User should be able to view all laptop available for sale


##### Admin
- [x] Admin should be able to view all registered users
- [x] Admin should be able to search user 
- [x] Admin should be able to update if a is laptop available for sale


## To get started with this project, follow these steps:

1. Clone this repository
2. Install the required dependencies by running `npm i or inpm install`
3. Create a `.env` file and add your environment variables
4. Start the server by running `npm run dev`

## Installed Dependencies

1. Express
2. bcrypt
3. jsonwebtoken
4. dotenv
5. mongoose


# API Endpoints

# User Signup Endpoint

Creates a new user account.

**Endpoint:** `POST ap1/v1/user/signup`

**Request Body:**

```
*# User Login Endpoint
## Authenticate an existing user.

Endpoint: `POST ap1/v1/user/login`


# Fetch all Users Endpoint

## `GET ap1/v1/user/allusers`

Fetches all users.

**Query Parametre**

http://localhost:4532/api/v1/user/allusers

 

# Get User by Email Endpoint
## `GET ap1/v1/user/:email`

Fetches details of a single user by email using query parametres.

#### Query Parameters

- `email` (string, required) - The email address of the user to fetch details for.

```json
http://localhost:4532/api/v1/user/johndoe@examplemail.com
```


# Add or Update existing drink
## Endpoint: `ap1/v1/user/createdrink` 

Adds a new drink or updates an existing one.



**Request**
```json
http://localhost:4532/api/v1/user/alldrinks
```

# POSTMAN DOCUMENTATION
```json
https://documenter.getpostman.com/view/25494840/2s93JzM175
```

# DEV.TO ARTICLE
```json
https://dev.to/famakinwaris/major-difference-between-encryption-hashing-and-salting-4heg


