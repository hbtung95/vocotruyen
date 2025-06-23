import { render, screen, fireEvent } from "@testing-library/react";
import TableCurrencyCell from "./TableCurrencyCell";

describe("TableCurrencyCell", () => {
  it("renders VND value", () => {
    render(<TableCurrencyCell value={1200000} />);
    expect(screen.getByText(/₫/)).toBeInTheDocument();
  });

  it("renders USD, negative, bold", () => {
    render(<TableCurrencyCell value={-82.3} currency="USD" bold />);
    expect(screen.getByText(/-/)).toHaveClass("bold");
    expect(screen.getByText(/\$/)).toBeInTheDocument();
  });

  it("renders copyable", () => {
    render(<TableCurrencyCell value={888} copyable />);
    fireEvent.click(screen.getByTestId("table-currency-cell"));
    expect(screen.getByText("✓ Copied!")).toBeInTheDocument();
  });

  it("renders error style", () => {
    render(<TableCurrencyCell value={200} error />);
    expect(screen.getByTestId("table-currency-cell")).toHaveClass("error");
  });

  it("renders nothing if no value", () => {
    render(<TableCurrencyCell value={null} />);
    expect(screen.queryByTestId("table-currency-cell")).toBeNull();
  });
});
