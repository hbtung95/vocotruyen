import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SkipLink from "./SkipLink";

describe("SkipLink", () => {
  it("renders with default text", () => {
    render(<SkipLink href="#main" />);
    expect(screen.getByText(/Bỏ qua đến nội dung chính/i)).toBeInTheDocument();
  });

  it("renders with custom text", () => {
    render(<SkipLink href="#content">Go to Content</SkipLink>);
    expect(screen.getByText("Go to Content")).toBeInTheDocument();
  });

  it("should be focusable and visible on focus", async () => {
    render(<SkipLink href="#main" />);
    const link = screen.getByRole("link");
    link.focus();
    expect(link).toHaveFocus();
    // Optional: test css class when focused (integration/visual test)
  });
});
