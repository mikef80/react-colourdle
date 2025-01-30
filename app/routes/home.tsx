import type { Route } from "./+types/home";
import Title from "~/components/Title/Title";
import SwatchesGroup from "~/components/SwatchesGroup/SwatchesGroup";
import ColorGuessGrid from "~/components/ColourGuessGrid/ColourGuessGrid";

export const meta: Route.MetaFunction = ({}: Route.MetaArgs) => {
  return [
    { title: "Colourdle!" },
    { name: "Colourdle!", content: "Welcome to Colourdle!, the colour guessing game!" },
  ];
};

const Home = () => (
  <>
    <Title />
    <SwatchesGroup />
    <ColorGuessGrid />
  </>
);

export default Home;
