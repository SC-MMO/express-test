# Express Test

This project is being created to learn & understand how express + react works (ts versions)


## Deployment
1. Install `docker` and `docker compose`
2. Build & start the project  
   - Build only via  
     `docker compose build`

     > Use the `--no-cache` flag to force a complete rebuild  

   - Start only via  
     `docker compose up -d`

   - Build and start together via  
     `docker compose up -d --build`

3. Wait for the process to finish
4. Run `docker ps` to verify that all the containers (`express-backend`, `react-frontend` and `postgres-db`) are up & running
5. Done


## Public Views

### Home
- **URL:** `:5173/`
- **Description:** Home Page

### Sign In
- **URL:** `:5173/sign-in`
- **Description:** Sign In Page

### Sign Up
- **URL:** `:5173/sign-up`
- **Description:** Sign Up Page

### FAQ
- **URL:** `:5173/faq`
- **Description:** Frequently asked questions Page

### About
- **URL:** `:5173/about`
- **Description:** About Page

### Contact
- **URL:** `:5173/about`
- **Description:** Contact Page


## Private Views

### Posts
- **URL:** `:5173/posts`
- **Description:** Posts Page
- **Nested Routes:** `/car` and `/bike`

### Test
- **URL:** `:5173/test`
- **Description:** Test Page

### Products
- **URL:** `:5173/about`
- **Description:** Products Page
- **Nested Routes:** `/car` and `/bike`


## API Endpoints

### Login
- **URL:** `:3000/api/login`
- **Method:** `POST`
- **Description:** Logs in to a current User
- **Requires Authentication:** `No`

### Logout
- **URL:** `:3000/api/`
- **Method:** `POST`
- **Description:** Logs out the current User
- **Requires Authentication:** `Yes`

### Create User
- **URL:** `:3000/api/create_user`
- **Method:** `POST`
- **Description:** Creates a new User
- **Requires Authentication:** `No`

### Get Users
- **URL:** `:3000/api/users`
- **Method:** `GET`
- **Description:** Get information about all users
- **Requires Authentication:** `Yes`

### Get User
- **URL:** `:3000/api/user`
- **Method:** `GET`
- **Description:** Get information about one specific user
- **Requires Authentication:** `Yes`

### Get me
- **URL:** `:3000/api/me`
- **Method:** `GET`
- **Description:** Get information about yourself
- **Requires Authentication:** `No`

### Create Post
- **URL:** `:3000/api/create_post`
- **Method:** `POST`
- **Description:** Creates a new Post
- **Requires Authentication:** `Yes`

### Get Posts
- **URL:** `:3000/api/posts`
- **Method:** `GET`
- **Description:** Returns a list of all Posts
- **Requires Authentication:** `Yes`

### Get fruits
- **URL:** `:3000/api/fruits`
- **Method:** `GET`
- **Description:** Returns a list containing 20 fruits.
- **Requires Authentication:** `No`
