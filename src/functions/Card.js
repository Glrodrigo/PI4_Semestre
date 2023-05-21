import React, { useState } from 'react';

const Card = ({ title, image, icon, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative max-w-sm rounded overflow-hidden shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img className="w-full h-full" src={image} alt={title} />
      {isHovered && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-80">
          <img src={icon} alt={title} className="w-16 h-16" />
          <p className="text-white mt-2 font-bold text-2xl">{description}</p>
        </div>
      )}
    </div>
  );
};

export default Card;






