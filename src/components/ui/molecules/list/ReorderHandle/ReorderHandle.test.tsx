import { render, screen, fireEvent } from "@testing-library/react";
import ReorderHandle from "./ReorderHandle";

describe("ReorderHandle", () => {
  it("renders default icon and label", () => {
    render(<ReorderHandle />);
    expect(screen.getByLabelText("Kéo để sắp xếp thứ tự")).toBeInTheDocument();
  });

  it("renders custom icon and label", () => {
    render(<ReorderHandle icon={<span>|||</span>} label="Move" />);
    expect(screen.getByText("|||")).toBeInTheDocument();
    expect(screen.getByLabelText("Move")).toBeInTheDocument();
  });

  it("calls onMouseDown", () => {
    const mockFn = jest.fn();
    render(<ReorderHandle onMouseDown={mockFn} />);
    fireEvent.mouseDown(screen.getByTestId("reorder-handle"));
    expect(mockFn).toHaveBeenCalled();
  });

  it("is disabled if disabled=true", () => {
    render(<ReorderHandle disabled />);
    expect(screen.getByTestId("reorder-handle")).toHaveClass("disabled");
    expect(screen.getByTestId("reorder-handle")).toHaveAttribute("aria-disabled", "true");
  });
});
