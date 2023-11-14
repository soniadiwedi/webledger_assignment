import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { baseurl } from "../../basedata";
import Card from "../../components/card/cards/Card";

const Fovorite = () => {
  const [fav, setFav] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    getRecipeData();
  }, []);

  const getRecipeData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${baseurl}/food/fav/${user._id}`);
      console.log("fav res", res.data.data);
      setFav(res.data.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };
  return (
    <div>
      {fav?.map((el, i) => {
        return <Card {...el} button={false} />;
      })}
    </div>
  );
};

export default Fovorite;
