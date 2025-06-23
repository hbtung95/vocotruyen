import { render, screen, fireEvent } from "@testing-library/react";
import TableColumnSettings from "./TableColumnSettings";

const columns = [
  { key: "name", label: "Họ tên", visible: true },
  { key: "score", label: "Điểm", visible: true, resizable: true, width: "80" },
];

describe("TableColumnSettings", () => {
  it("renders columns", () => {
    render(<TableColumnSettings columns={columns} onChange={jest.fn()} />);
    expect(screen.getByText("Họ tên")).toBeInTheDocument();
    expect(screen.getByText("Điểm")).toBeInTheDocument();
  });

  it("calls onChange when toggle visible", () => {
    const mockFn = jest.fn();
    render(<TableColumnSettings columns={columns} onChange={mockFn} />);
    fireEvent.click(screen.getAllByRole("checkbox")[1]);
    expect(mockFn).toHaveBeenCalled();
  });

  it("calls onChange when resize width", () => {
    const mockFn = jest.fn();
    render(<TableColumnSettings columns={columns} onChange={mockFn} />);
    const input = screen.getAllByPlaceholderText("px/%")[0];
    fireEvent.change(input, { target: { value: "100" } });
    expect(mockFn).toHaveBeenCalled();
  });
});
