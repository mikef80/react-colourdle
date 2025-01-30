import { render, screen } from "@testing-library/react";
import Title from "./Title";

describe("Title component", () => {
  test("renders each letter with the correct color class", () => {
    render(<Title />);

    // Get all the span elements within the h1
    const spans = screen.getByRole("heading", { level: 1 }).querySelectorAll("span");

    // Check each span's text and class
    expect(spans[0]).toHaveTextContent("C");
    expect(spans[0]).toHaveClass("text-colourdle-red");

    expect(spans[1]).toHaveTextContent("o");
    expect(spans[1]).toHaveClass("text-colourdle-orange");

    expect(spans[2]).toHaveTextContent("l");
    expect(spans[2]).toHaveClass("text-colourdle-yellow");

    expect(spans[3]).toHaveTextContent("o");
    expect(spans[3]).toHaveClass("text-colourdle-green");

    expect(spans[4]).toHaveTextContent("u");
    expect(spans[4]).toHaveClass("text-colourdle-lightblue");

    expect(spans[5]).toHaveTextContent("r");
    expect(spans[5]).toHaveClass("text-colourdle-blue");

    expect(spans[6]).toHaveTextContent("d");
    expect(spans[6]).toHaveClass("text-colourdle-purple");

    expect(spans[7]).toHaveTextContent("l");
    expect(spans[7]).toHaveClass("text-colourdle-pink");

    expect(spans[8]).toHaveTextContent("e");
    expect(spans[8]).toHaveClass("text-colourdle-lightpink");

    expect(spans[9]).toHaveTextContent("!");
    expect(spans[9]).toHaveClass("text-colourdle-darkred");
  });

  test("renders h1 element", () => {
    render(<Title />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});
