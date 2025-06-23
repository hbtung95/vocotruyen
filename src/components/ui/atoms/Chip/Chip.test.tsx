import { render, screen, fireEvent } from "@testing-library/react";
import Chip from "./Chip";

describe("Chip", () => {
  it("renders with children", () => {
    render(<Chip>Label</Chip>);
    expect(screen.getByText("Label")).toBeInTheDocument();
  });

  it("calls onClose when close clicked", () => {
    const fn = jest.fn();
    render(<Chip closable onClose={fn}>Close me</Chip>);
    fireEvent.click(screen.getByLabelText(/xoá/i));
    expect(fn).toHaveBeenCalled();
  });

  it("renders with icon left/right", () => {
    render(<Chip iconLeft="🔍" iconRight="➡️">Search</Chip>);
    expect(screen.getByText("🔍")).toBeInTheDocument();
    expect(screen.getByText("➡️")).toBeInTheDocument();
  });

  it("renders with color and size", () => {
    render(<Chip color="success" size="lg">Big</Chip>);
    expect(screen.getByText("Big")).toBeInTheDocument();
  });
});
