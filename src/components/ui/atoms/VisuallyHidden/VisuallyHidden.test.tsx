import { render, screen } from "@testing-library/react";
import VisuallyHidden from "./VisuallyHidden";

describe("VisuallyHidden", () => {
  it("renders children but not visible", () => {
    render(<VisuallyHidden>Hidden for screen reader only</VisuallyHidden>);
    const el = screen.getByText(/Hidden for screen reader only/);
    expect(el).toBeInTheDocument();
    // Optional: check class exists
    expect(el.className).toMatch(/visuallyHidden/);
  });
});
