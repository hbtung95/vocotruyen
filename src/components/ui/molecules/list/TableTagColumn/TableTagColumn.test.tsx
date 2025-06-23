import { render, screen } from "@testing-library/react";
import TableTagColumn from "./TableTagColumn";

const options = [
  { value: "a", label: "A", color: "#36c", icon: <span>🏅</span> },
  { value: "b", label: "B", color: "#eb5d34", icon: <span>🏆</span> },
];

describe("TableTagColumn", () => {
  it("renders single tag", () => {
    render(<TableTagColumn tags={["a"]} options={options} />);
    expect(screen.getByText("A")).toBeInTheDocument();
  });

  it("renders multiple tags and +more", () => {
    render(<TableTagColumn tags={["a", "b", "a", "b"]} options={options} max={2} />);
    expect(screen.getAllByText("A").length).toBeGreaterThan(0);
    expect(screen.getByText("+2")).toBeInTheDocument();
  });

  it("renders nothing if no tags", () => {
    render(<TableTagColumn tags={[]} />);
    expect(screen.queryByTestId("table-tag-cell")).toBeNull();
  });
});
