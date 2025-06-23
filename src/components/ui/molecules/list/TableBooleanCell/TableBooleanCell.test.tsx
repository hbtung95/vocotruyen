import { render, screen, fireEvent } from "@testing-library/react";
import TableBooleanCell from "./TableBooleanCell";

describe("TableBooleanCell", () => {
  it("renders true value", () => {
    render(<TableBooleanCell value={true} />);
    expect(screen.getByText("Đạt")).toBeInTheDocument();
  });

  it("renders false value", () => {
    render(<TableBooleanCell value={false} />);
    expect(screen.getByText("Không đạt")).toBeInTheDocument();
  });

  it("toggles value when toggleable", () => {
    const fn = jest.fn();
    render(<TableBooleanCell value={true} toggleable onToggle={fn} />);
    fireEvent.click(screen.getByTestId("table-bool-cell"));
    expect(fn).toHaveBeenCalled();
  });

  it("renders nothing if value is null", () => {
    render(<TableBooleanCell value={null} />);
    expect(screen.queryByTestId("table-bool-cell")).toBeNull();
  });
});
