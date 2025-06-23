import { render, screen } from "@testing-library/react";
import Skeleton from "./Skeleton";

describe("Skeleton", () => {
  it("renders with default variant (rect)", () => {
    render(<Skeleton />);
    const el = screen.getByLabelText(/loading/i);
    expect(el).toBeInTheDocument();
  });

  it("renders as circle", () => {
    render(<Skeleton variant="circle" width={40} />);
    expect(screen.getByLabelText(/loading/i)).toHaveStyle("border-radius: 50%");
  });

  it("can set custom size", () => {
    render(<Skeleton width={80} height={12} />);
    expect(screen.getByLabelText(/loading/i)).toHaveStyle("width: 80px");
    expect(screen.getByLabelText(/loading/i)).toHaveStyle("height: 12px");
  });

  it("has animate class", () => {
    render(<Skeleton animate />);
    expect(screen.getByLabelText(/loading/i)).toHaveClass("animate");
  });
});
