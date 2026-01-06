import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "../pages/Home/About";
import TourDetails from "../pages/Home/TourDetails";
import Tours from "../pages/Home/Tours";
import SearchResult from "../pages/Home/SearchResult";
import Login from '../pages/Auth/Login.jsx'
import Register from '../pages/Auth/Register.jsx'
import ProtectedRoute from "./protectore.jsx";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function AppRoutes() {
  const { user } = useSelector((state) => state.auth);

  return (
    <Routes>
      
      <Route path="/" element={<Home />} />       
      <Route path="/about" element={<About />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/tour/:id" element={<TourDetails />} />
      <Route path="/search" element={<SearchResult />} />
      <Route  path="/login"  element={!user ? <Login /> : <Navigate to="/" />} />
      <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />

    </Routes>
  );
}

export default AppRoutes;
