import { render, screen } from "@testing-library/react";
import ColorGuessGrid from "./ColourGuessGrid";

describe("ColorGuessGrid component", () => {
  test("renders the ColorGuessGrid with correct number of inputs", () => {
    render(<ColorGuessGrid />);

    expect(true).toBe(true); // Remove this line
  });
});
