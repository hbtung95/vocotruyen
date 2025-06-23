import { render, screen } from "@testing-library/react";
import AccessLevelChip from "./AccessLevelChip";

describe("AccessLevelChip", () => {
  it("renders the correct label", () => {
    render(<AccessLevelChip level="editor" />);
    expect(screen.getByText("Editor")).toBeInTheDocument();
  });

  it("shows correct color and icon for owner", () => {
    render(<AccessLevelChip level="owner" />);
    const chip = screen.getByLabelText("Owner");
    expect(chip).toHaveClass("from-yellow-400");
  });

  it("applies custom className", () => {
    render(<AccessLevelChip level="guest" className="my-custom-class" />);
    expect(screen.getByText("Guest").parentElement).toHaveClass("my-custom-class");
  });
});
