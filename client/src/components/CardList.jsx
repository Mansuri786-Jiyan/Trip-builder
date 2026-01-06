import React from "react";
import Card from "../Services/CardService";

import { CloudIcon, MapPinIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

const servicesData = [
  {
    id: 1,
    Icon: CloudIcon,
    title: "Calculate Weather",
    desc:
      "Quick weather estimate to plan your trip: hourly forecast, temperature and chance of rain.",
  },
  {
    id: 2,
    Icon: MapPinIcon,
    title: "Best Tour Guide",
    desc:
      "Local, expert guides to show you the must-see spots and hidden gems — personalized to your taste.",
  },
  {
    id: 3,
    Icon: Cog6ToothIcon,
    title: "Customization",
    desc:
      "Tailor-made itineraries, flexible schedules and special requests handled by our travel team.",
  },
];

const CardList = () => {
  return (
    <section className="py-27  bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left column - heading */}
          <div className="lg:col-span-1 -mb-20">
            <p className="text-lg italic text-amber-500 mb-3">What we serve</p>
            <h2 className="text-4xl lg:text-7xl font-bold text-gray-900 leading-tight">
              We offer our <br /> best services
            </h2>
          </div>

          {/* Right column - cards row (3 columns) */}
          <div className="lg:col-span-2">
            {/* Use items-stretch so all grid children become equal height */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {servicesData.map((s, idx) => (
                // wrapper must be h-full so Card inside can stretch
                <div
                  key={s.id}
                  className={`relative h-full ${idx !== 0 ? "md:pl-8 md:border-l md:border-gray-200" : ""}`}
                >
                  <Card Icon={s.Icon} title={s.title} desc={s.desc} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardList;
