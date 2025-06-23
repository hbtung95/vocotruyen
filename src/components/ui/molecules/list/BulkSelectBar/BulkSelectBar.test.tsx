import { render, screen, fireEvent } from "@testing-library/react";
import BulkSelectBar from "./BulkSelectBar";

const actions = [
  {
    key: "delete",
    label: "Xóa đã chọn",
    onClick: jest.fn(),
    danger: true,
  },
];

describe("BulkSelectBar", () => {
  it("renders label and actions", () => {
    render(<BulkSelectBar selectedCount={2} totalCount={5} onClearSelection={jest.fn()} actions={actions} />);
    expect(screen.getByText("Đã chọn 2/5")).toBeInTheDocument();
    expect(screen.getByText("Xóa đã chọn")).toBeInTheDocument();
    expect(screen.getByText("Bỏ chọn")).toBeInTheDocument();
  });

  it("calls onClearSelection when clicked", () => {
    const mockFn = jest.fn();
    render(<BulkSelectBar selectedCount={1} totalCount={3} onClearSelection={mockFn} actions={actions} />);
    fireEvent.click(screen.getByText("Bỏ chọn"));
    expect(mockFn).toHaveBeenCalled();
  });

  it("calls action handler when action clicked", () => {
    render(<BulkSelectBar selectedCount={1} totalCount={3} onClearSelection={jest.fn()} actions={actions} />);
    fireEvent.click(screen.getByText("Xóa đã chọn"));
    expect(actions[0].onClick).toHaveBeenCalled();
  });

  it("hides bar if nothing selected", () => {
    render(<BulkSelectBar selectedCount={0} totalCount={3} onClearSelection={jest.fn()} actions={actions} />);
    expect(screen.queryByTestId("bulk-select-bar")).toBeNull();
  });
});
