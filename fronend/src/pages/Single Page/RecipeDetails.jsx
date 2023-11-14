import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { baseurl } from "../../basedata";
import { FaHeart } from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Recipe.css"; 
import Fovorite from "../favorite/Fovorite";

const RecipeDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [instruction, setInstruction] = useState("");

  useEffect(() => {
    getRecipeData();
  }, []);

  const saveRecipeToFavorite = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const headers = {
      "Content-Type": "application/json",
      Authorization: token,
    };

    try {
      const response = await axios.post(
        `${baseurl}/food/recipes/save`,
        { id:data.id,image:data.image,title:data.title },
        { headers: headers }
      );

      console.log("Response on adding favorite", response);
      toast.success("Recipe added to favorites successfully!")
    } catch (error) {
      console.log("Error on adding favorite", error);
      toast.error("Error adding recipe to favorites. Please try again.")
    }
  };

  const getRecipeData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${baseurl}/food/recipes/${id}`);
      setData(res.data.data);
      setInstruction(res.data.data.analyzedInstructions[0]);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="recipe-details-container">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error in Backend</div>
      ) : (
        <>
          <div className="recipe-header">
            <img src={data.image} alt={data.name} className="recipe-image" />
          </div>

          <div className="recipe-content">
            <div className="ingredients">
              <h2>Ingredients</h2>
              <ul>
                {data?.nutrition?.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient.name}</li>
                ))}
              </ul>
            </div>
            <div className="nutrients">
              <h2>Nutrients</h2>
              <ul>
                {data?.nutrition?.nutrients
                  ?.slice(0, 10)
                  .map((instruction, index) => (
                    <li key={index}>{instruction.name}</li>
                  ))}
              </ul>
            </div>
          </div>

          <div className="recipe-steps">
            <h2>Instructions</h2>
            {instruction !== "" &&
              instruction?.steps.map((el, i) => (
                <p key={i} className="step">
                  <span className="step-number">Step {i + 1}:</span> {el.step}
                </p>
              ))}
          </div>

          <div className="favorite-button-container">
            <button className="details-button" onClick={() => saveRecipeToFavorite()}>
              <FaHeart className="favorite-icon" />
              Add to Favorites
            </button>
          </div>

         
        </>
      )}
    </div>
  );
};

export default RecipeDetails;
