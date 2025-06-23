import { render, screen } from "@testing-library/react";
import TableQuickSummary from "./TableQuickSummary";

const fields = [
  { key: "total", label: "Tổng số dòng", value: 50 },
  { key: "sum", label: "Tổng điểm", value: 401 },
  { key: "avg", label: "TB", value: 8.02 },
];

describe("TableQuickSummary", () => {
  it("renders summary fields", () => {
    render(<TableQuickSummary fields={fields} />);
    expect(screen.getByText("401")).toBeInTheDocument();
    expect(screen.getByText("8.02")).toBeInTheDocument();
  });

  it("renders nothing if no field", () => {
    render(<TableQuickSummary fields={[]} />);
    expect(screen.queryByTestId("table-summary")).toBeNull();
  });

  it("applies loading blur", () => {
    render(<TableQuickSummary fields={fields} loading />);
    expect(screen.getByTestId("table-summary")).toHaveClass("loading");
  });
});
