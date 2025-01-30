import { render, screen } from "@testing-library/react";
import ColourSwatch from "./ColourSwatch";

describe("ColourSwatch component", () => {
  test("renders the ColourSwatch with correct background color", () => {
    const testValue = { red: 98, green: 176, blue: 254 };
    const testId = "swatch1";
    const testRole = "presentation";
    const testAriaLabel = "Target colour swatch";

    render(
      <ColourSwatch value={testValue} id={testId} role={testRole} aria_label={testAriaLabel} />
    );

    // Check if the ColourSwatch div is in the document
    const swatch = screen.getByRole("presentation");
    expect(swatch).toBeInTheDocument();

    // Check if the background color is correctly applied based on the RGB values
    const expectedColor = `rgb(${testValue.red}, ${testValue.green}, ${testValue.blue})`;
    expect(swatch).toHaveStyle({ backgroundColor: expectedColor });

    // Ensure the aria-label and id are correct
    expect(swatch).toHaveAttribute("aria-label", testAriaLabel);
    expect(swatch).toHaveAttribute("id", testId);
  });

  test("renders with different color values", () => {
    const testValue = { red: 124, green: 176, blue: 98 };
    const testId = "swatch2";
    const testRole = "presentation";
    const testAriaLabel = "Current colour swatch";

    render(
      <ColourSwatch value={testValue} id={testId} role={testRole} aria_label={testAriaLabel} />
    );

    // Check if the ColourSwatch div is in the document
    const swatch = screen.getByRole("presentation");
    expect(swatch).toBeInTheDocument();

    // Check if the background color is correctly applied based on the RGB values
    const expectedColor = `rgb(${testValue.red}, ${testValue.green}, ${testValue.blue})`;
    expect(swatch).toHaveStyle({ backgroundColor: expectedColor });
  });
});
