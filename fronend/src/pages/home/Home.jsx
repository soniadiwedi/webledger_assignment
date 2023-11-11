import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../components/card/cards/Card";
import Search from "../../components/card/search/Search";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const cousines = [
    "African",
    "Asian",
    "American",
    "British",
    "Cajun",
    "Caribbean",
    "Chinese",
    "Eastern European",
    "European",
    "French",
    "German",
    "Greek",
    "Indian",
    "Irish",
    "Italian",
    "Japanese",
    "Jewish",
    "Korean",
    "Latin American",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Nordic",
    "Southern",
    "Spanish",
    "Thai",
    "Vietnamese",
    "African",
    "Asian",
    "American",
    "British",
    "Cajun",
    "Caribbean",
    "Chinese",
    "Eastern European",
    "European",
    "French",
    "German",
    "Greek",
    "Indian",
    "Irish",
    "Italian",
    "Japanese",
    "Jewish",
    "Korean",
    "Latin American",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Nordic",
    "Southern",
    "Spanish",
    "Thai",
    "Vietnamese",
  ];
  useEffect(() => {
    getRecipeData();
  }, [search,filter]);

  const getRecipeData = async () => {
    setLoading(true);
    try {
      let res = await axios.get(
        `http://localhost:8080/api/food/find?search=${search}&filter=${filter}`
      );
      setRecipes(res.data.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log("error", err);
    }
  };

  const handleInput = (e) => {
    const setData = setTimeout(() => {
      setSearch(e.target.value);
    }, 3000);
  };

  return (
    <>
      <div>
        <Search
          search={search}
          setSearch={setSearch}
          handleInput={handleInput}
        />
        <select name="" id="" onChange={(e)=>{setFilter(e.target.value)}}>
          <option value="">Pls Select Your Favourite Cuisine.</option>
          {cousines.map((item)=>{
           return <option key={item} value={item}>{item}</option>
          })}
        </select>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          width: "95%",
          margin: "auto",
        }}
      >
        {loading ? (
          <div className="loading-skeleton-card">
            <h2 className="skeleton-title"></h2>
            <img className="skeleton-image" />
            <div className="skeleton-buttons">
              <div className="skeleton-button"></div>
              <div className="skeleton-button"></div>
            </div>
          </div>
        ) : (
          recipes?.map((recipe) => (
            <div key={recipe.id}>
              <Card {...recipe} />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Home;
