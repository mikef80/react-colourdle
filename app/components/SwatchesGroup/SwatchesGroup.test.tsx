import { render, screen } from "@testing-library/react";
import SwatchesGroup from "./SwatchesGroup";

describe("SwatchesGroup component", () => {
  test("renders two Swatches Components", () => {
    render(<SwatchesGroup />);

    const swatches = screen.getAllByRole("presentation");
    expect(swatches).toHaveLength(2);
  });

  test("swatches are visible", () => {
    render(<SwatchesGroup />);

    const swatches = screen.getAllByRole("presentation");

    swatches.forEach((swatch) => {
      expect(swatch).toBeVisible();
    });
  });

  test("elements have the correct aria-labels", () => {
    render(<SwatchesGroup />);

    const targetSwatch = screen.getByLabelText("Target colour swatch");
    const currentSwatch = screen.getByLabelText("Current colour swatch");

    expect(targetSwatch).toBeInTheDocument();
    expect(currentSwatch).toBeInTheDocument();
  });
});
