import { render, screen } from "@testing-library/react";
import TableRatingCell from "./TableRatingCell";

describe("TableRatingCell", () => {
  it("renders stars and value", () => {
    render(<TableRatingCell value={4} showValue />);
    expect(screen.getByText("4.0/5")).toBeInTheDocument();
  });

  it("renders custom max", () => {
    render(<TableRatingCell value={7} max={10} />);
    expect(screen.getAllByText("★").length).toBe(10);
  });

  it("renders nothing if value null", () => {
    render(<TableRatingCell value={null} />);
    expect(screen.queryByTestId("table-rating-cell")).toBeNull();
  });
});
