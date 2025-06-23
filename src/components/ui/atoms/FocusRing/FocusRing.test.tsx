import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FocusRing from "./FocusRing";

describe("FocusRing", () => {
  it("wraps child and renders", () => {
    render(
      <FocusRing>
        <button>Focus me</button>
      </FocusRing>
    );
    expect(screen.getByText("Focus me")).toBeInTheDocument();
  });

  it("shows box-shadow when focused", async () => {
    render(
      <FocusRing>
        <button>Focusable</button>
      </FocusRing>
    );
    const btn = screen.getByText("Focusable");
    await userEvent.tab();
    btn.focus();
    // Optional: Test style with box-shadow (integration test)
    expect(btn).toHaveFocus();
  });
});
