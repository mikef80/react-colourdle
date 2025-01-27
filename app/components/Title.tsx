const Title = () => {
  enum TitleColour {
    Red = "text-colourdle-red",
    Orange = "text-colourdle-orange",
    Yellow = "text-colourdle-yellow",
    Green = "text-colourdle-green",
    LightBlue = "text-colourdle-lightblue",
    Blue = "text-colourdle-blue",
    Purple = "text-colourdle-purple",
    Pink = "text-colourdle-pink",
    LightPink = "text-colourdle-lightpink",
    DarkRed = "text-colourdle-darkred",
  }

  const colours = Object.values(TitleColour);

  const ColouredTitle = () => {
    const title = "Colourdle!";
    return (
      <h1 className='text-4xl font-bold'>
        {title.split("").map((letter, index) => {
          return (
            <span key={index} className={colours[index % colours.length]}>
              {letter}
            </span>
          );
        })}
      </h1>
    );
  };

  return <ColouredTitle />;
};

export default Title;
