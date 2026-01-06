import React from "react";

/**
 * Card component for services
 * props:
 *  - Icon : a Heroicons component (imported and passed in)
 *  - title: string
 *  - desc : string
 */
const Card = ({ Icon, title, desc }) => {
  return (
    <div className="flex flex-col gap-3 p-6 bg-white rounded-lg h-full">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center shadow-sm">
          {/* Icon should be a React component passed as Icon */}
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>

      <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
};

export default Card;
