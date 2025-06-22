import { render, screen, fireEvent } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  it("renders label", () => {
    render(<Checkbox label="Chấp nhận điều khoản" />);
    expect(screen.getByText("Chấp nhận điều khoản")).toBeInTheDocument();
  });

  it("calls onChange when toggled", () => {
    const handleChange = jest.fn();
    render(<Checkbox onChange={handleChange} />);
    fireEvent.click(screen.getByRole("checkbox"));
    expect(handleChange).toHaveBeenCalled();
  });

  it("supports indeterminate", () => {
    render(<Checkbox indeterminate />);
    expect(screen.getByRole("checkbox")).toHaveAttribute("aria-checked", "mixed");
  });

  it("is disabled", () => {
    render(<Checkbox disabled />);
    expect(screen.getByRole("checkbox")).toBeDisabled();
  });
});
