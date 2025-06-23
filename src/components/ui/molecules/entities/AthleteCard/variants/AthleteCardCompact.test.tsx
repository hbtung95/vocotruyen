import { render, screen, fireEvent } from "@testing-library/react";
import AthleteCardCompact from "./AthleteCardCompact";

describe("AthleteCardCompact", () => {
  it("renders name and avatar", () => {
    render(<AthleteCardCompact id="1" name="A" avatarUrl="avatar.jpg" />);
    expect(screen.getByText("A")).toBeInTheDocument();
    expect(screen.getByAltText("A")).toBeInTheDocument();
  });

  it("shows rank if provided", () => {
    render(<AthleteCardCompact id="2" name="B" avatarUrl="b.jpg" rank="A" />);
    expect(screen.getByText("A")).toBeInTheDocument();
  });

  it("handles onClick", () => {
    const fn = jest.fn();
    render(<AthleteCardCompact id="3" name="C" avatarUrl="c.jpg" onClick={fn} />);
    fireEvent.click(screen.getByText("C"));
    expect(fn).toHaveBeenCalled();
  });

  it("applies highlight class when highlight prop is true", () => {
    const { container } = render(
      <AthleteCardCompact id="4" name="D" avatarUrl="d.jpg" highlight />
    );
    expect(container.firstChild).toHaveClass("highlight");
  });
});
