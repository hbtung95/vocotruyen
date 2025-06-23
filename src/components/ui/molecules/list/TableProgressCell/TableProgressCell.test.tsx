import { render, screen } from "@testing-library/react";
import TableProgressCell from "./TableProgressCell";

describe("TableProgressCell", () => {
  it("renders progress bar", () => {
    render(<TableProgressCell value={75} />);
    expect(screen.getByTestId("table-progress-cell")).toBeInTheDocument();
    expect(screen.getByText("75%")).toBeInTheDocument();
  });

  it("renders progress circle", () => {
    render(<TableProgressCell value={33} barType="circle" />);
    expect(screen.getByText("33%")).toBeInTheDocument();
  });

  it("renders completed icon at 100%", () => {
    render(<TableProgressCell value={100} />);
    expect(screen.getByText("✅")).toBeInTheDocument();
  });

  it("renders error state", () => {
    render(<TableProgressCell value={40} error />);
    expect(screen.getByText("⚠️")).toBeInTheDocument();
  });

  it("renders nothing if no value", () => {
    render(<TableProgressCell value={null} />);
    expect(screen.queryByTestId("table-progress-cell")).toBeNull();
  });
});
