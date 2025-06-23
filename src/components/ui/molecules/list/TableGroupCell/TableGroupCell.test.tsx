import { render, screen, fireEvent } from "@testing-library/react";
import TableGroupCell from "./TableGroupCell";

describe("TableGroupCell", () => {
  it("renders label and count", () => {
    render(<TableGroupCell label="Group A" count={8} />);
    expect(screen.getByText("Group A")).toBeInTheDocument();
    expect(screen.getByText("(8)")).toBeInTheDocument();
  });

  it("renders actions", () => {
    render(<TableGroupCell label="G" actions={[<button key="b">Test</button>]} />);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("calls onToggle when clicked", () => {
    const fn = jest.fn();
    render(<TableGroupCell label="C" onToggle={fn} />);
    fireEvent.click(screen.getByTestId("table-group-cell"));
    expect(fn).toHaveBeenCalled();
  });

  it("renders nothing if no label", () => {
    render(<TableGroupCell label="" />);
    expect(screen.getByTestId("table-group-cell")).toBeInTheDocument();
  });
});
