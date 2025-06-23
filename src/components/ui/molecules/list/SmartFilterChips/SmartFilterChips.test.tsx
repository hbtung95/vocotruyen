import { render, screen, fireEvent } from "@testing-library/react";
import SmartFilterChips from "./SmartFilterChips";

const chips = [
  { key: "status", label: "Trạng thái", valueLabel: "Đang hoạt động" },
  { key: "score", label: "Điểm", valueLabel: "≥ 8.0" },
];

describe("SmartFilterChips", () => {
  it("renders filter chips", () => {
    render(<SmartFilterChips chips={chips} onRemove={jest.fn()} />);
    expect(screen.getByText("Trạng thái: Đang hoạt động")).toBeInTheDocument();
    expect(screen.getByText("Điểm: ≥ 8.0")).toBeInTheDocument();
  });

  it("calls onRemove when close clicked", () => {
    const fn = jest.fn();
    render(<SmartFilterChips chips={chips} onRemove={fn} />);
    fireEvent.click(screen.getAllByTitle("Xóa lọc này")[0]);
    expect(fn).toHaveBeenCalledWith("status");
  });

  it("calls onClearAll when clear all clicked", () => {
    const fn = jest.fn();
    render(<SmartFilterChips chips={chips} onRemove={jest.fn()} onClearAll={fn} />);
    fireEvent.click(screen.getByText("Xóa tất cả"));
    expect(fn).toHaveBeenCalled();
  });

  it("renders nothing if no chip", () => {
    render(<SmartFilterChips chips={[]} onRemove={jest.fn()} />);
    expect(screen.queryByTestId("filter-chips")).toBeNull();
  });
});
