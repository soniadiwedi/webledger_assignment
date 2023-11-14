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

## UI
![image](https://github.com/soniadiwedi/webledger_assignment/assets/112754761/b614bc7f-8fd3-4b7b-8510-7d546fe16581)

![image](https://github.com/soniadiwedi/webledger_assignment/assets/112754761/6a169836-d689-47cd-8b42-8bc8a66b0074)

![image](https://github.com/soniadiwedi/webledger_assignment/assets/112754761/bc59126a-a7dd-49ba-9b3b-1d93042f779c)

![image](https://github.com/soniadiwedi/webledger_assignment/assets/112754761/97e02859-c9dd-410a-abdc-924736a4a03a)






