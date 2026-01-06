// src/shared/CommonSection.jsx
import React from "react";
import TourImg from "../assets/images/tour.jpg";

const CommonSection = ({ title }) => {
  return (
    <section
      className="w-full py-80 bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${TourImg})`,
      }}
    >
      <h1 className="text-4xl sm:text-5xl font-extrabold drop-shadow-lg text-center">
        {title}
      </h1>
    </section>
  );
};

export default CommonSection;
