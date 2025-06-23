import { render, screen, fireEvent } from "@testing-library/react";
import TablePercentCell from "./TablePercentCell";

describe("TablePercentCell", () => {
  it("renders positive percent", () => {
    render(<TablePercentCell value={37.25} />);
    expect(screen.getByText("37.25%")).toBeInTheDocument();
  });

  it("renders negative percent, bar", () => {
    render(<TablePercentCell value={-15.5} showBar />);
    expect(screen.getByText("-15.50%")).toBeInTheDocument();
  });

  it("renders copyable", () => {
    render(<TablePercentCell value={62.2} copyable />);
    fireEvent.click(screen.getByTestId("table-percent-cell"));
    expect(screen.getByText("✓ Copied!")).toBeInTheDocument();
  });

  it("renders error style", () => {
    render(<TablePercentCell value={12} error />);
    expect(screen.getByTestId("table-percent-cell")).toHaveClass("error");
  });

  it("renders nothing if no value", () => {
    render(<TablePercentCell value={null} />);
    expect(screen.queryByTestId("table-percent-cell")).toBeNull();
  });
});
