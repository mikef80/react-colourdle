import React from "react";

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

  return (
    <div
      id={id}
      className={`w-40 h-40`}
      style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}></div>
  );
};

export default ColourSwatch;
