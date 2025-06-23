import { render, screen } from "@testing-library/react";
import PresenceIndicator from "./PresenceIndicator";

describe("PresenceIndicator", () => {
  it("renders with correct status and aria-label", () => {
    render(<PresenceIndicator status="busy" />);
    const badge = screen.getByTestId("presence-indicator");
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveAttribute("aria-label", "busy");
  });

  it("applies correct color for status", () => {
    const { rerender } = render(<PresenceIndicator status="online" />);
    expect(screen.getByTestId("presence-indicator").className).toMatch(/bg-green-500/);

    rerender(<PresenceIndicator status="offline" />);
    expect(screen.getByTestId("presence-indicator").className).toMatch(/bg-gray-400/);
  });

  it("uses custom size and tooltip", () => {
    render(<PresenceIndicator status="away" size={20} tooltip="Test tooltip" />);
    const badge = screen.getByTestId("presence-indicator");
    expect(badge).toHaveStyle({ width: "20px", height: "20px" });
    expect(badge).toHaveAttribute("title", "Test tooltip");
  });
});
