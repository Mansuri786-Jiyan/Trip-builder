// src/components/ExperienceSection.jsx
import React from "react";
import experienceImg from "../assets/images/experience.png";

/**
 * ExperienceSection
 * Left: badge, heading, paragraph, stats
 * Right: circular image + overlay card
 */

const Stat = ({ number, label }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="bg-amber-500 text-white font-bold rounded-lg px-4 py-3 text-lg min-w-[64px] text-center">
      {number}
    </div>
    <div className="text-sm text-gray-600">{label}</div>
  </div>
);

export default function ExperienceSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2  items-center">
          {/* LEFT CONTENT */}
          <div>
            <span className="inline-block bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm mb-4">
              Experience
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              With our all experience
              <br />
              we will serve you
            </h2>

            <p className="text-gray-600 max-w-xl mb-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
              aliquam, hic tempora inventore suscipit unde.
            </p>

            <div className="flex gap-8">
              <Stat number="12k+" label="Successful trip" />
              <Stat number="2k+" label="Regular clients" />
              <Stat number="15" label="Years experience" />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          {/* RIGHT */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="relative">
              {/* 👉 JUST YOUR IMAGE (NO CIRCLE WRAPPER) */}
              <img
                src={experienceImg}
                alt="Experience"
                className="w-[700px] sm:w-[360px] md:w-[420px] 
                 h-auto rounded-xl s object-cover"
              />

              {/* decorative dotted path */}
              <svg
                className="absolute -left-8 -top-6 w-40 h-24 opacity-40"
                viewBox="0 0 200 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 50 C40 10, 80 10, 120 40"
                  stroke="#f7c3b4"
                  strokeWidth="3"
                  strokeDasharray="6 6"
                  strokeLinecap="round"
                />
              </svg>

              {/* overlay card */}
              <div className="absolute -bottom-6 right-2 bg-white rounded-lg shadow-md p-3 w-44 flex gap-3 items-center">
                <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-100">
                  <div className="w-full h-full bg-gray-200" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-gray-900">
                    Mountain Hiking
                  </div>
                  <div className="text-xs text-gray-500">
                    See details • Join Now
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
