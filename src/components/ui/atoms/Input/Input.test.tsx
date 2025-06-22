import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "./Input";

describe("Input", () => {
  it("renders with label", () => {
    render(<Input label="Tên" />);
    expect(screen.getByText("Tên")).toBeInTheDocument();
  });

  it("calls onChange", () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} />);
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "A" } });
    expect(handleChange).toHaveBeenCalled();
  });

  it("shows error message", () => {
    render(<Input error="Sai rồi" />);
    expect(screen.getByText("Sai rồi")).toBeInTheDocument();
  });

  it("shows leftIcon/rightIcon", () => {
    render(<Input leftIcon={<span>Icon</span>} rightIcon={<span>Right</span>} />);
    expect(screen.getByText("Icon")).toBeInTheDocument();
    expect(screen.getByText("Right")).toBeInTheDocument();
  });
});
