const mongoose = require("mongoose");

const foodPreferenceSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  imageType: {
    type: String,
  },
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
