import { render, screen, fireEvent } from "@testing-library/react";
import TableIconCell from "./TableIconCell";

const icons = [
  { icon: <span>🟢</span>, tooltip: "Thành công", color: "#31ba63" },
  { icon: <span>⚠️</span>, tooltip: "Cảnh báo", color: "#ffaa33" },
  { icon: <span>❌</span>, tooltip: "Lỗi", color: "#e94f44" },
];

describe("TableIconCell", () => {
  it("renders icon cell", () => {
    render(<TableIconCell icons={icons} />);
    expect(screen.getByTestId("table-icon-cell")).toBeInTheDocument();
  });

  it("renders more if icons > max", () => {
    render(<TableIconCell icons={icons} max={2} />);
    expect(screen.getByText("+1")).toBeInTheDocument();
  });

  it("triggers onClick when icon clicked", () => {
    const fn = jest.fn();
    render(<TableIconCell icons={[{ icon: <span>🟢</span>, onClick: fn }]} />);
    fireEvent.click(screen.getByTestId("table-icon-cell").children[0]);
    expect(fn).toHaveBeenCalled();
  });

  it("renders nothing if no icons", () => {
    render(<TableIconCell icons={[]} />);
    expect(screen.queryByTestId("table-icon-cell")).toBeNull();
  });
});
