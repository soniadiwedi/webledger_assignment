const express=require("express")
const favoriteRouter=express.Router()
const { authenticateToken } = require("../middleware/authMiddleware");
const { addFavorites } = require("../controllers/recipeController");
// http://localhost:8080/api/fav/saveRecipe/782585
favoriteRouter.post('/:id',authenticateToken, addFavorites);
// favoriteRouter.get('/savedRecipes', getSavedRecipes);

module.exports=favoriteRouter
