import { render, screen } from "@testing-library/react";
import TableStatsWidget from "./TableStatsWidget";

const stats = [
  { key: "total", label: "Tổng số", value: 87 },
  { key: "avg", label: "Điểm TB", value: 8.35 },
];

describe("TableStatsWidget", () => {
  it("renders stat items", () => {
    render(<TableStatsWidget stats={stats} />);
    expect(screen.getByText("Tổng số")).toBeInTheDocument();
    expect(screen.getByText("8.35")).toBeInTheDocument();
  });

  it("applies loading blur", () => {
    render(<TableStatsWidget stats={stats} loading />);
    expect(screen.getByTestId("table-stats")).toHaveClass("loading");
  });

  it("renders nothing if no stats", () => {
    render(<TableStatsWidget stats={[]} />);
    expect(screen.queryByTestId("table-stats")).toBeNull();
  });
});
