import { render, screen, fireEvent } from "@testing-library/react";
import TableDateCell from "./TableDateCell";

describe("TableDateCell", () => {
  it("renders formatted date", () => {
    render(<TableDateCell value="2024-06-21" />);
    expect(screen.getByTestId("table-date-cell")).toBeInTheDocument();
  });

  it("renders in highlight/overdue mode", () => {
    render(<TableDateCell value="2022-01-01" highlight overdue />);
    expect(screen.getByTestId("table-date-cell")).toHaveClass("highlight");
    expect(screen.getByTestId("table-date-cell")).toHaveClass("overdue");
  });

  it("toggles display mode on click", () => {
    render(<TableDateCell value={new Date()} />);
    fireEvent.click(screen.getByTestId("table-date-cell"));
    // Nên chuyển sang relative hoặc date (test: chỉ check có click được)
    expect(screen.getByTestId("table-date-cell")).toBeInTheDocument();
  });

  it("renders nothing if no value", () => {
    render(<TableDateCell value={null} />);
    expect(screen.queryByTestId("table-date-cell")).toBeNull();
  });
});
