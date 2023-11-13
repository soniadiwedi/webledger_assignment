const express = require('express');
const recipeRouter = express.Router();
const {  getAdditionalRecepieInformation, BasicRecipesController } = require('../controllers/recipeController');

// Basic Route To Get All The Recepies With Additional Functions Like Filter & Search.
recipeRouter.get('/find',BasicRecipesController)

// Route For Getting A Specific Recepie By ID & Get Additional Details About The Recepies.
recipeRouter.get('/recipes/:id',getAdditionalRecepieInformation);



module.exports = { recipeRouter };