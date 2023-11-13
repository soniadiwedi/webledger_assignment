const mongoose= require('mongoose');

const FavoriteSchema=mongoose.Schema({
    userId:{type:'ObjectId'},
    favorites:[{type:String}]
},{
    versionKey:false
})

const FavoriteModel=mongoose.model("favorites",FavoriteSchema);


module.exports={
    FavoriteModel
}
// http://localhost:8080/api/fav/saveRecipe
// { "image": "https://spoonacular.com/recipeImages/716426-312x231.jpg",
//     "title": "Cauliflower, Brown Rice, and Vegetable Fried Rice"}