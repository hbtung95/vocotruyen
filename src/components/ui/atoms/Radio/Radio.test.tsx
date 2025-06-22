import { render, screen, fireEvent } from "@testing-library/react";
import { Radio } from "./Radio";

describe("Radio", () => {
  it("renders label", () => {
    render(<Radio label="Nam" value="male" />);
    expect(screen.getByText("Nam")).toBeInTheDocument();
  });

  it("calls onChange when clicked", () => {
    const handleChange = jest.fn();
    render(<Radio label="Nữ" value="female" onChange={handleChange} />);
    fireEvent.click(screen.getByRole("radio"));
    expect(handleChange).toHaveBeenCalled();
  });

  it("is disabled", () => {
    render(<Radio value="a" disabled />);
    expect(screen.getByRole("radio")).toBeDisabled();
  });
});
