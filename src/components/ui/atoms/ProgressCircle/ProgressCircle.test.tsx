import { render, screen } from "@testing-library/react";
import ProgressCircle from "./ProgressCircle";

describe("ProgressCircle", () => {
  it("renders and shows label", () => {
    render(<ProgressCircle value={75} showLabel />);
    expect(screen.getByText("75%")).toBeInTheDocument();
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "75");
  });

  it("renders with custom color and size", () => {
    render(<ProgressCircle value={45} color="#4caf50" size={60} />);
    const svg = screen.getByRole("progressbar").querySelector("svg");
    expect(svg).toHaveAttribute("width", "60");
  });
});
