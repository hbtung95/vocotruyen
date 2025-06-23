import { render, screen, fireEvent } from "@testing-library/react";
import TableColorCell from "./TableColorCell";

describe("TableColorCell", () => {
  it("renders color swatch and label", () => {
    render(<TableColorCell value="#ffa82b" label="Vàng" />);
    expect(screen.getByText("Vàng")).toBeInTheDocument();
  });

  it("renders copyable", () => {
    render(<TableColorCell value="#36c" copyable />);
    fireEvent.click(screen.getByTestId("table-color-cell"));
    expect(screen.getByText("✓ Copied!")).toBeInTheDocument();
  });

  it("renders nothing if no value", () => {
    render(<TableColorCell value={null} />);
    expect(screen.queryByTestId("table-color-cell")).toBeNull();
  });
});
