import { render, screen, fireEvent } from "@testing-library/react";
import TableToolbar from "./TableToolbar";

describe("TableToolbar", () => {
  it("renders title and actions", () => {
    render(<TableToolbar title="Danh sách" onAdd={jest.fn()} />);
    expect(screen.getByText("Danh sách")).toBeInTheDocument();
    expect(screen.getByText("+ Thêm mới")).toBeInTheDocument();
  });

  it("calls onAdd when add button clicked", () => {
    const mockFn = jest.fn();
    render(<TableToolbar title="T" onAdd={mockFn} />);
    fireEvent.click(screen.getByText("+ Thêm mới"));
    expect(mockFn).toHaveBeenCalled();
  });

  it("calls onSearch when input changed", () => {
    const mockFn = jest.fn();
    render(<TableToolbar onSearch={mockFn} />);
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "abc" } });
    expect(mockFn).toHaveBeenCalledWith("abc");
  });

  it("disables all buttons if disabled", () => {
    render(<TableToolbar onAdd={jest.fn()} disabled />);
    expect(screen.getByText("+ Thêm mới")).toBeDisabled();
  });
});
