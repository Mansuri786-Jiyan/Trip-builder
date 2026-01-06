import React, { useState } from "react";
import { Form, FormGroup, Input } from "reactstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  MapPinIcon,
  ArrowsRightLeftIcon,
  UserGroupIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

import { searchTours } from "../Redux/slices/tourSlice";

export default function SearchBar() {
  const [formData, setFormData] = useState({
    location: "",
    distance: "",
    maxGroupSize: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const searchHandler = (e) => {
    e.preventDefault();

    const { location, distance, maxGroupSize } = formData;

    if (!location || !distance || !maxGroupSize) {
      return alert("All fields are required");
    }

    // Navigate first, then dispatch search
    navigate("/search");
    
    // Dispatch search after navigation
    dispatch(
      searchTours({
        location,
        distance: Number(distance),
        maxGroupSize: Number(maxGroupSize),
      })
    );
  };

  return (
    <div className="w-full pt-6 flex justify-center">
      <Form
        onSubmit={searchHandler}
        className="shadow-md bg-white rounded-full px-8 py-4 flex gap-8 items-center max-w-5xl w-full"
      >
        {/* LOCATION */}
        <FormGroup className="flex items-center gap-3 mb-0">
          <MapPinIcon className="w-6 h-6 text-red-500" />
          <Input
            type="text"
            name="location"
            placeholder="Where are you going?"
            value={formData.location}
            onChange={handleChange}
          />
        </FormGroup>

        {/* DISTANCE */}
        <FormGroup className="flex items-center gap-3 mb-0">
          <ArrowsRightLeftIcon className="w-6 h-6 text-orange-500" />
          <Input
            type="number"
            name="distance"
            placeholder="Distance (km)"
            value={formData.distance}
            onChange={handleChange}
          />
        </FormGroup>

        {/* MAX PEOPLE */}
        <FormGroup className="flex items-center gap-3 mb-0">
          <UserGroupIcon className="w-6 h-6 text-red-500" />
          <Input
            type="number"
            name="maxGroupSize"
            placeholder="Max People"
            value={formData.maxGroupSize}
            onChange={handleChange}
          />
        </FormGroup>

        <button 
          type="submit" 
          className="bg-orange-400 rounded-full p-4 hover:bg-orange-500 transition-colors"
          onClick={(e) => {
            // Ensure form submission works
            if (!formData.location || !formData.distance || !formData.maxGroupSize) {
              e.preventDefault();
              alert("All fields are required");
            }
          }}
        >
          <MagnifyingGlassIcon className="w-6 h-6 text-white" />
        </button>
      </Form>
    </div>
  );
}
