import { render, screen } from "@testing-library/react";
import MiniProfilePopover from "./MiniProfilePopover";

describe("MiniProfilePopover", () => {
  it("renders name and avatar", () => {
    render(<MiniProfilePopover name="Kate Lee" avatar="/kate.jpg" />);
    expect(screen.getByText("Kate Lee")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("renders subtitle and email if provided", () => {
    render(<MiniProfilePopover name="Kate" avatar="/k.jpg" subtitle="Admin" email="a@a.com" />);
    expect(screen.getByText("Admin")).toBeInTheDocument();
    expect(screen.getByText("a@a.com")).toBeInTheDocument();
  });

  it("renders status badge if status is set", () => {
    render(<MiniProfilePopover name="Kate" avatar="/k.jpg" status="busy" />);
    expect(screen.getByLabelText("busy")).toBeInTheDocument();
  });

  it("renders actions if provided", () => {
    render(<MiniProfilePopover name="Kate" avatar="/k.jpg" actions={<button>Follow</button>} />);
    expect(screen.getByText("Follow")).toBeInTheDocument();
  });
});
