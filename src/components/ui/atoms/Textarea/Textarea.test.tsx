import { render, screen, fireEvent } from "@testing-library/react";
import { Textarea } from "./Textarea";

describe("Textarea", () => {
  it("renders with label", () => {
    render(<Textarea label="Nội dung" />);
    expect(screen.getByText("Nội dung")).toBeInTheDocument();
  });

  it("shows error message", () => {
    render(<Textarea error="Lỗi rồi" />);
    expect(screen.getByText("Lỗi rồi")).toBeInTheDocument();
  });

  it("calls onChange", () => {
    const handleChange = jest.fn();
    render(<Textarea onChange={handleChange} />);
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "test" } });
    expect(handleChange).toHaveBeenCalled();
  });

  it("is disabled", () => {
    render(<Textarea disabled />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });
});
