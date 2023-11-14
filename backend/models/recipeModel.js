const mongoose = require("mongoose");

const foodPreferenceSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  }
});

const recipeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  foodPreference: [foodPreferenceSchema],
}, {
  timestamps: true,
});

module.exports.recipeModel = mongoose.model("Recipe", recipeSchema);
