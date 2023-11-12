const express = require('express');
const recipeRouter = express.Router();
const { getSaveReceipeDeatailsByUser ,getAdditionalRecepieInformation, saveRecipeController, BasicRecipesController, selectRecipesController } = require('../controllers/recipeController');
const { authenticateToken } = require('../middleware/authMiddleware');
// Basic Route To Get All The Recepies With Additional Functions Like Filter & Search.
recipeRouter.get('/find',BasicRecipesController)

// Route For Getting A Specific Recepie By ID & Get Additional Details About The Recepies.
recipeRouter.get('/recipes/:id',getAdditionalRecepieInformation);

// Route For Saving The Favourite Recepies 
recipeRouter.post('/recipes/save',authenticateToken, saveRecipeController);

recipeRouter.get('/recipes_by_user',authenticateToken, getSaveReceipeDeatailsByUser);

module.exports = { recipeRouter };