import React, { useState } from "react";

interface ColourSwatchProps {
  value: {
    red: number;
    green: number;
    blue: number;
  };
  id: string;
  role: string;
  aria_label: string;
}

const ColourSwatch: React.FC<ColourSwatchProps> = ({ aria_label, role, value, id }) => {
  const { red, green, blue } = value;

  return (
    <div
      aria-label={aria_label}
      role={role}
      id={id}
      className={`w-40 h-40 border border-gray-400 rounded-lg`}
      style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}></div>
  );
};

export default ColourSwatch;
