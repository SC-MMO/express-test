## Express JS Test

This website is designed to learn & understand how express + react works (ts versions)


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
4. Run `docker ps` to verify that all the containers (`express-backend` and `react-frontend`) are up & running
5. Done

## Views

### Home
- **URL:** `:5173/`
- **Description:** Home Page

### About
- **URL:** `:5173/about`
- **Description:** About Page

### Products
- **URL:** `:5173/about`
- **Description:** Products Page
- **Nested Routes:** `/car` and `/bike`

### Test
- **URL:** `:5173/test`
- **Description:** Test Page


## API Endpoints

### Convert Markdown to HTML
- **URL:** `:3000/api/`
- **Method:** `GET`
- **Description:** Returns a list containing 20 fruits.
