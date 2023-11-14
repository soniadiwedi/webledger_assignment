import React, { useState } from "react";
import { FaHeart, FaInfo } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { baseurl } from "../../../basedata";

const Card = (props) => {
  const navigate = useNavigate();
  const { image, title,button } = props;


  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      { button&&
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
        
      </div>}
    </div>
  );
};

export default Card;
