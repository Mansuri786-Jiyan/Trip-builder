// src/pages/Home/Hero.jsx
import React from "react";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import heroImg from "../../assets/images/hero-img01.jpg";
import heroImg02 from "../../assets/images/hero-img02.jpg";
import heroVideo from "../../assets/images/hero-video.mp4";
import SearchBar from "../../components/Searchbar";
import CardList from "../../components/CardList";   
import FeaturedTourList from "../../components/FeaturedTours/FeaturedTourList";
import ExperienceSection from "../../components/Experience";

export default function Home() {
  return (
    <>
      <section className="bg-[#f8fafc] py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT SECTION */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-orange-200 px-5 py-2 rounded-full text-[1rem] font-medium text-orange-900 shadow-sm">
                Know Before You Go
                <GlobeAltIcon className="w-5 h-5 text-green-600" />
              </div>

              {/* Heading */}
              <h1 className="mt-6 text-5xl font-bold leading-tight text-gray-900">
                Traveling opens the door
                <br />
                to creating <span className="text-orange-400">memories</span>
              </h1>

              {/* Description Text */}
              <p className="mt-6 text-gray-600 text-[1.1rem] leading-relaxed max-w-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
                ipsum nobis asperiores soluta voluptas quas voluptates. Molestiae
                tempora dignissimos, animi praesentium molestias perferendis porro
                expedita delectus. Soluta natus porro.
              </p>
            </div>

            {/* RIGHT SECTION - THREE IMAGE CARDS */}
            <div className="flex justify-center lg:justify-end gap-6 items-start">
              {/* CARD 1 */}
              <div className="w-36 sm:w-44 md:w-52 h-72 rounded-3xl overflow-hidden shadow-md">
                <img
                  src={heroImg}
                  alt="travel 1"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CARD 2 (video) */}
              <div className="w-36 sm:w-44 md:w-52 h-72 rounded-3xl overflow-hidden shadow-md">
                <video
                  src={heroVideo}
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  loop
                  muted
                />
              </div>

              {/* CARD 3 */}
              <div className="w-36 sm:w-44 md:w-52 h-72 rounded-3xl overflow-hidden shadow-md">
                <img
                  src={heroImg02}
                  alt="travel 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search bar - full width below hero */}
      <div className="relative -mt-14 bg-[#f8fafc]"> {/* lifts the search bar up like in screenshot */}
        <SearchBar />
      </div>

      {/* Services / cards section below the searchbar */}
      <CardList />

      <FeaturedTourList />


      {/* Expreriance section */}

      <ExperienceSection />
    </>
  );
}
