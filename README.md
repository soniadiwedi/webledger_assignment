# How to setup application locally 

    1. Clone the repositry
    
## For frontend
    1. Go inside the frontend folder 
    2. Run "npm i" command (To download neccessory packages)
    3. Then, run "npm start / npm run start" command to run the frontend application.

## For backend
    1. Go inside the backend folder 
    2. Run "npm i" command (To download neccessory packages)
    3. Then, run "npm run server" command to run the backend application.

# Node 16.16.0

# Backend Documentation

  ## Base URL http://localhost:8080

  ## Login

    /api/auth/login  -> POST 
    with query data :-
    token  --> save the token for accessing protected routes
    data   --> save loggedin user details such as name,email to display on the frontend

  ## Recipes

    /api/food/find   -> GET 
    It will return Recipes data.

    /api/food/recipes/:id  -> GET 
    Use a recipe id to get full information about a recipe, such as ingredients, nutrition, diet and allergen information.

