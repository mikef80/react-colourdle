import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Title from "~/components/Title";
import ColourGuessGridRow from "~/components/ColourGuessGridRow";

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
      <ColourGuessGridRow />
    </>
  );
}
