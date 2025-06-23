import { render, screen, fireEvent } from "@testing-library/react";
import TableTextCell from "./TableTextCell";

describe("TableTextCell", () => {
  it("renders text and label", () => {
    render(<TableTextCell value="Demo text" label="Nhãn" />);
    expect(screen.getByText("Demo text")).toBeInTheDocument();
    expect(screen.getByText("Nhãn")).toBeInTheDocument();
  });

  it("renders ellipsis when text too long", () => {
    render(<TableTextCell value={"A".repeat(100)} maxLength={12} />);
    expect(screen.getByText(/…$/)).toBeInTheDocument();
  });

  it("renders multiLine", () => {
    render(<TableTextCell value={"Dòng 1\nDòng 2"} multiLine />);
    expect(screen.getByText(/Dòng 1/)).toBeInTheDocument();
  });

  it("renders copyable", () => {
    render(<TableTextCell value="copy text" copyable />);
    fireEvent.click(screen.getByTestId("table-text-cell"));
    expect(screen.getByText("✓ Copied!")).toBeInTheDocument();
  });

  it("renders nothing if no value", () => {
    render(<TableTextCell value={null} />);
    expect(screen.queryByTestId("table-text-cell")).toBeNull();
  });
});
