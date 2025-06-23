import { render, screen } from "@testing-library/react";
import TableImageCell from "./TableImageCell";

const images = [
  "https://placehold.co/40x40",
  "https://placehold.co/40x40?2",
  "https://placehold.co/40x40?3",
];

describe("TableImageCell", () => {
  it("renders image cells", () => {
    render(<TableImageCell images={images} />);
    expect(screen.getByTestId("table-img-cell")).toBeInTheDocument();
  });

  it("renders more box if images > max", () => {
    render(<TableImageCell images={images} max={2} />);
    expect(screen.getByText("+1")).toBeInTheDocument();
  });

  it("renders fallback if image error", () => {
    render(<TableImageCell images={["broken.png"]} fallback={<span>F</span>} />);
    expect(screen.getByTestId("table-img-cell")).toBeInTheDocument();
  });

  it("renders nothing if no image", () => {
    render(<TableImageCell images={[]} />);
    expect(screen.queryByTestId("table-img-cell")).toBeNull();
  });
});
