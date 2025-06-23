import { render, screen } from "@testing-library/react";
import TableQuickChart from "./TableQuickChart";

const data = [
  { label: "A", value: 12 },
  { label: "B", value: 22 },
  { label: "C", value: 8 },
];

describe("TableQuickChart", () => {
  it("renders bar chart", () => {
    render(<TableQuickChart type="bar" data={data} />);
    expect(screen.getByTestId("table-quick-chart")).toBeInTheDocument();
  });
  it("renders donut chart", () => {
    render(<TableQuickChart type="donut" data={data} />);
    expect(screen.getByTestId("table-quick-chart")).toBeInTheDocument();
  });
});
