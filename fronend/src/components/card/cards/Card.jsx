import React, { useState } from "react";
import { FaHeart, FaInfo } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();
  const { image, title } = props;
  console.log("recipe properties ", props);
  const [fav, setFav] = useState([]);

  const handleAddFav = async () => {
    try {
      // let res=await axios.post(``)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <div className="card-buttons">
        <button
          className="favorite-button"
          onClick={() => {
            navigate(`/${props.id}`);
          }}
        >
          <FaInfo />
          Details
        </button>
        <button className="details-button" onClick={handleAddFav}>
          <FaHeart className="favorite-icon" />
          Favorite
        </button>
      </div>
    </div>
  );
};

export default Card;
