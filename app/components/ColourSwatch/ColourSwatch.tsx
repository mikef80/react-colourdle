import React, { useState } from "react";

interface ColourSwatchProps {
  value: {
    red: number;
    green: number;
    blue: number;
  };
  id: string;
}

const ColourSwatch: React.FC<ColourSwatchProps> = ({ value, id }) => {
  const { red, green, blue } = value;

  if (!red || !green || !blue) <div>Loading...</div>;

  return (
    <div
      id={id}
      className={`w-40 h-40 border border-gray-400 rounded-lg`}
      style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}></div>
  );
};

export default ColourSwatch;
