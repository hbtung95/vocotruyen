import { render, screen, fireEvent } from "@testing-library/react";
import TableLinkCell from "./TableLinkCell";

describe("TableLinkCell", () => {
  it("renders url as link", () => {
    render(<TableLinkCell value="https://google.com" />);
    expect(screen.getByTestId("table-link-cell")).toBeInTheDocument();
    expect(screen.getByText("https://google.com")).toBeInTheDocument();
  });

  it("renders email", () => {
    render(<TableLinkCell value="a@email.com" />);
    expect(screen.getByText("a@email.com")).toBeInTheDocument();
  });

  it("renders copyable", () => {
    render(<TableLinkCell value="test" copyable />);
    fireEvent.click(screen.getByTestId("table-link-cell"));
    expect(screen.getByText("✓ Copied!")).toBeInTheDocument();
  });

  it("renders invalid", () => {
    render(<TableLinkCell value="bad" invalid />);
    expect(screen.getByTestId("table-link-cell")).toHaveClass("invalid");
  });

  it("renders nothing if no value", () => {
    render(<TableLinkCell value={null} />);
    expect(screen.queryByTestId("table-link-cell")).toBeNull();
  });
});
