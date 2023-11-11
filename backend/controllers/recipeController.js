const axios = require("axios");
require("dotenv").config();

const { recipeModel } = require("../models/recipeModel");

exports.BasicRecipesController = async (req, res) => {
  try {
    const { search, filter } = req.query;
    const apiKey = process.env.API_KEY;
    const baseUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${search}&cuisine=${filter}&apiKey=${apiKey}`;
    const response = await axios.get(baseUrl);

    if (response.data) {
      const recipes = response.data.results;
      res.status(200).json({
        data: recipes,
        number: response.data.number,
        totalResults: response.data.totalResults,
      });
    } else {
      res.status(500).json({
        Message: "Failed to retrieve recipes",
      });
    }
  } catch (error) {
    res.status(500).json({
      Message: error.message,
    });
  }
};

exports.getAdditionalRecepieInformation = async (req, res) => {
  try {
    let id = req.params.id;
    const apiKey = process.env.API_KEY;
    // const baseUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`;
    const baseUrl = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${apiKey}`;

    const response = await axios.get(baseUrl);
    // console.log(response.data);
    if (response.data) {
      const recipes = response.data.results;
      res.status(200).json({
        data: recipes,
        number: response.data.number,
        totalResults: response.data.totalResults,
      });
    } else {
      res.status(500).json({
        Message: "Failed to retrieve recipes",
      });
    }
  } catch (error) {
    res.status(500).json({
      Message: error.message,
    });
  }
};

exports.saveRecipeController = async (req, res) => {
  try {
    const payload = req.body;
    const user = req.userId;

    const existingRecipes = await recipeModel.findOne({ userId: user });

    if (!existingRecipes) {
      // If the user has no existing saved recipes, create a new document
      const newData = new recipeModel({
        userId: user,
        foodPreference: [payload],
      });
      await newData.save();
    } else {
      // If the user has existing saved recipes, check if the new recipe already exists
      const recipeExists = existingRecipes.foodPreference.some(
        (recipe) => recipe.id === payload.id
      );

      if (recipeExists) {
        return res.status(401).json({
          status: 401,
          success: false,
          message: "User Preference Food Already Saved",
        });
      }

      // If the recipe doesn't exist, add it to the foodPreference array
      existingRecipes.foodPreference.push(payload);
      await existingRecipes.save();
    }

    return res.status(200).json({
      status: 200,
      success: true,
      message: "User Preference Saved Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.getSaveReceipeDeatailsByUser = async (req, res) => {
  try {
    const userId = req.userId;
    const ifExist = await recipeModel.findOne({ userId });
    if (!ifExist) {
      return res.status(401).json({
        status: 401,
        success: false,
        message: "You don't have any preferences",
      });
    }

    return res.status(200).json({
      status: 200,
      success: true,
      message: "Preference retrived successfully",
      data: ifExist.foodPreference,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
