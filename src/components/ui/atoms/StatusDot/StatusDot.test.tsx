import { render, screen } from "@testing-library/react";
import StatusDot from "./StatusDot";

describe("StatusDot", () => {
  it("renders with correct status color and label", () => {
    render(<StatusDot status="success" label="Online" />);
    const dot = screen.getByLabelText("Online");
    expect(dot).toBeInTheDocument();
    expect(dot).toHaveAttribute("title", "Online");
  });

  it("renders with custom size", () => {
    render(<StatusDot size={20} />);
    const dot = screen.getByLabelText("success");
    expect(dot).toHaveStyle("width: 20px");
    expect(dot).toHaveStyle("height: 20px");
  });

  it("renders correct status color for error", () => {
    render(<StatusDot status="error" />);
    expect(screen.getByLabelText("error")).toBeInTheDocument();
  });
});
