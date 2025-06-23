import { render, screen } from "@testing-library/react";
import Legend from "./Legend";

describe("Legend", () => {
  it("renders children", () => {
    render(<Legend>Nhóm thông tin</Legend>);
    expect(screen.getByText("Nhóm thông tin")).toBeInTheDocument();
  });

  it("renders with size", () => {
    render(<Legend size="lg">Tiêu đề lớn</Legend>);
    expect(screen.getByText("Tiêu đề lớn")).toBeInTheDocument();
  });

  it("applies custom class", () => {
    render(<Legend className="test-class">Test</Legend>);
    expect(screen.getByText("Test")).toHaveClass("test-class");
  });
});
