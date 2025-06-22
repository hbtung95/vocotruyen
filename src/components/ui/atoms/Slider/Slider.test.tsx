import { render, screen, fireEvent } from "@testing-library/react";
import { Slider } from "./Slider";

describe("Slider", () => {
  it("renders with label", () => {
    render(<Slider value={30} label="Âm lượng" />);
    expect(screen.getByText("Âm lượng")).toBeInTheDocument();
  });

  it("calls onChange", () => {
    const handleChange = jest.fn();
    render(<Slider value={10} onChange={handleChange} />);
    fireEvent.change(screen.getByRole("slider"), { target: { value: "20" } });
    expect(handleChange).toHaveBeenCalled();
  });

  it("shows value when showValue", () => {
    render(<Slider value={40} showValue label="Volume" />);
    expect(screen.getByText("40")).toBeInTheDocument();
  });
});
