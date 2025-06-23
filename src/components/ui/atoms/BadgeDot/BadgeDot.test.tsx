import { render, screen } from "@testing-library/react";
import BadgeDot from "./BadgeDot";

describe("BadgeDot", () => {
  it("renders as dot when no count", () => {
    render(<BadgeDot />);
    const dot = screen.getByLabelText(/notification/i);
    expect(dot).toBeInTheDocument();
    expect(dot.textContent).toBe("");
  });

  it("renders with count", () => {
    render(<BadgeDot count={5} />);
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("renders with max", () => {
    render(<BadgeDot count={110} max={99} />);
    expect(screen.getByText("99+")).toBeInTheDocument();
  });

  it("has correct color class for status", () => {
    render(<BadgeDot status="success" />);
    expect(screen.getByLabelText("notification")).toHaveClass("success");
  });
});
