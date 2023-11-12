import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { baseurl } from "../../basedata";
import { FaHeart, FaInfo } from "react-icons/fa";

const RecipeDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [instruction,setInstruction] = useState("")
  const [fav, setFav] = useState([]);

  const handleAddFav = async () => {
    try {
      let res=await axios.post(`${baseurl}/food/recipes/save`,{
        data
      })
      console.log(res)
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getRecipeData();
  }, []);

  const getRecipeData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${baseurl}/food/recipes/${id}`);
      setData(res.data.data);
      setInstruction(res.data.data.analyzedInstructions[0])
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };
 
  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>Error in Backend</div>
  ) : (
    <>
    
    <div>
      <h1>data</h1>
      <img src={data.image} alt={data.name} style={{ maxWidth: "100%" }} />
      <div>
        <h2>Ingredients:</h2>
        <ul>
          {data?.nutrition?.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient.name}</li>
            ))}
        </ul>
      </div>
      <div>
        <h2>Nutrients:</h2>
        <ol>
          {data?.nutrition?.nutrients?.map((instruction, index) => (
            <li key={index}>{instruction.name}</li>
            ))}
        </ol>
      </div>
       <div>
          {instruction!=="" && instruction?.steps.map((el,i)=>{
           return <p>{el.step}</p>
        })}  
      </div> 
    </div>
    <div>
    <button className="details-button" onClick={handleAddFav}>
          <FaHeart className="favorite-icon" />
          Favorite
        </button>
    </div>
            </>
  );
  
};

export default RecipeDetails;
