import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

describe("Card", () => {
  it("renders children", () => {
    render(<Card>Test content</Card>);
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("has rounded and shadow", () => {
    render(<Card rounded shadow>Content</Card>);
    const card = screen.getByText("Content").parentElement;
    expect(card).toHaveClass("rounded-2xl");
    expect(card).toHaveClass("shadow-md");
  });

  it("can change variant", () => {
    render(<Card variant="bordered">Border</Card>);
    const card = screen.getByText("Border").parentElement;
    expect(card).toHaveClass("border");
  });
});
