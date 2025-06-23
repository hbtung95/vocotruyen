import { render, screen } from "@testing-library/react";
import StickyHeader from "./StickyHeader";

describe("StickyHeader", () => {
  it("renders children", () => {
    render(<StickyHeader>Header content</StickyHeader>);
    expect(screen.getByText("Header content")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<StickyHeader className="test-c">Content</StickyHeader>);
    expect(screen.getByTestId("sticky-header")).toHaveClass("test-c");
  });

  it("sets custom top and zIndex", () => {
    render(<StickyHeader top={40} zIndex={88}>A</StickyHeader>);
    const div = screen.getByTestId("sticky-header");
    expect(div).toHaveStyle({ top: "40px", zIndex: 88 });
  });
});
