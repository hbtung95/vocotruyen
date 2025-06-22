import { render, screen, fireEvent } from "@testing-library/react";
import { Switch } from "./Switch";

describe("Switch", () => {
  it("renders with label", () => {
    render(<Switch label="Bật tắt" />);
    expect(screen.getByText("Bật tắt")).toBeInTheDocument();
  });

  it("calls onChange", () => {
    const handleChange = jest.fn();
    render(<Switch onChange={handleChange} />);
    fireEvent.click(screen.getByRole("switch"));
    expect(handleChange).toHaveBeenCalled();
  });

  it("is disabled", () => {
    render(<Switch disabled />);
    expect(screen.getByRole("switch")).toBeDisabled();
  });
});
