import type { Route } from "./+types/home";
import Title from "~/components/Title";
import SwatchesGroup from "~/components/SwatchesGroup";
import ColorGuessGrid from "~/components/ColourGuessGrid";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Colourdle!" },
    { name: "Colourdle!", content: "Welcome to Colourdle!, the colour guessing game!" },
  ];
}

export default function Home() {
  return (
    <>
      <Title />
      <SwatchesGroup />
      <ColorGuessGrid />
    </>
  );
}
