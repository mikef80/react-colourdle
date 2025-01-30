const Title = () => {
  const colours = [
    "text-colourdle-red",
    "text-colourdle-orange",
    "text-colourdle-yellow",
    "text-colourdle-green",
    "text-colourdle-lightblue",
    "text-colourdle-blue",
    "text-colourdle-purple",
    "text-colourdle-pink",
    "text-colourdle-lightpink",
    "text-colourdle-darkred",
  ];

  return (
    <h1 className="text-4xl font-bold mb-10">
      {"Colourdle!".split("").map((letter, index) => (
        <span key={index} className={colours[index % colours.length]}>
          {letter}
        </span>
      ))}
    </h1>
  );
};

export default Title;
