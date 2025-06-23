import { render, screen, fireEvent } from "@testing-library/react";
import TableFieldUsageStats from "./TableFieldUsageStats";

describe("TableFieldUsageStats", () => {
  it("renders stats correctly", () => {
    render(
      <TableFieldUsageStats
        label="Điểm"
        totalRows={100}
        nonEmptyRows={95}
        filteredCount={5}
        sortedCount={10}
        isVisible={true}
      />
    );
    expect(screen.getByText("Điểm")).toBeInTheDocument();
    expect(screen.getByText("95/100")).toBeInTheDocument();
    expect(screen.getByText("Sort:")).toBeInTheDocument();
    expect(screen.getByText("Filter:")).toBeInTheDocument();
  });

  it("shows correct percent", () => {
    render(<TableFieldUsageStats label="Tên" totalRows={50} nonEmptyRows={25} />);
    expect(screen.getByText("(50%)")).toBeInTheDocument();
  });

  it("toggle visible calls onToggleVisible", () => {
    const mockFn = jest.fn();
    render(<TableFieldUsageStats label="Điểm" totalRows={10} nonEmptyRows={10} isVisible={true} onToggleVisible={mockFn} />);
    fireEvent.click(screen.getByLabelText("Ẩn cột này"));
    expect(mockFn).toHaveBeenCalledWith(false);
  });
});
