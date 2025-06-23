import { render, screen, fireEvent } from "@testing-library/react";
import TableCollapseCell from "./TableCollapseCell";

describe("TableCollapseCell", () => {
  it("renders and toggles", () => {
    const fn = jest.fn();
    render(<TableCollapseCell onToggle={fn} />);
    fireEvent.click(screen.getByTestId("table-collapse-cell"));
    expect(fn).toHaveBeenCalled();
  });

  it("shows content when expanded", () => {
    render(<TableCollapseCell expanded content={<span>Detail!</span>} />);
    expect(screen.getByText("Detail!")).toBeInTheDocument();
  });

  it("renders nothing if no toggle and no content", () => {
    render(<TableCollapseCell />);
    expect(screen.getByTestId("table-collapse-cell")).toBeInTheDocument();
  });
});
