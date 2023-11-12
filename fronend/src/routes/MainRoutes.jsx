import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Home from "../pages/home/Home";
import Fovorite from "../pages/favorite/Fovorite";
import RecipeDetails from "../pages/Single Page/RecipeDetails";
import { PrivateRoute } from "./PrivateRoute";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/:id"
        element={
          <PrivateRoute>
            <RecipeDetails />
          </PrivateRoute>
        }
      />
      <Route
        path="/favorite"
        element={
          <PrivateRoute>
            <Fovorite />
          </PrivateRoute>
        }
      />
      {/* <Route path='/login' element={<Login/>} /> */}
    </Routes>
  );
};

export default MainRoutes;
