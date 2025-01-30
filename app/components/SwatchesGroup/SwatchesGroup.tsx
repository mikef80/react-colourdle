import ColourSwatch from "../ColourSwatch/ColourSwatch";

const SwatchesGroup = () => {
  return (
    <div className='flex gap-5 mb-10'>
      <ColourSwatch id='targetColour' value={{ red: 98, green: 176, blue: 254 }} />
      <ColourSwatch id='currentColour' value={{ red: 124, green: 176, blue: 98 }} />
    </div>
  );
};

export default SwatchesGroup;
