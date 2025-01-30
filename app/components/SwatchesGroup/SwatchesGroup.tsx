import ColourSwatch from "../ColourSwatch/ColourSwatch";

const SwatchesGroup = () => {
  return (
    <div className='flex gap-5 mb-10'>
      <ColourSwatch
        aria_label='Target colour swatch'
        role='presentation'
        id='targetColour'
        value={{ red: 98, green: 176, blue: 254 }}
      />
      <ColourSwatch
        aria_label='Current colour swatch'
        role='presentation'
        id='currentColour'
        value={{ red: 124, green: 176, blue: 98 }}
      />
    </div>
  );
};

export default SwatchesGroup;
