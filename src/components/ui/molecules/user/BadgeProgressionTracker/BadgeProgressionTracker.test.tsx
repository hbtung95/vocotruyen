import { render, screen } from "@testing-library/react";
import BadgeProgressionTracker from "./BadgeProgressionTracker";

const steps = [
  { label: "Beginner", achieved: true },
  { label: "Skilled", achieved: true },
  { label: "Expert", achieved: false },
];

describe("BadgeProgressionTracker", () => {
  it("renders all badge steps", () => {
    render(<BadgeProgressionTracker steps={steps} />);
    steps.forEach(step => {
      expect(screen.getByText(step.label)).toBeInTheDocument();
    });
  });

  it("shows achieved and non-achieved badges", () => {
    render(<BadgeProgressionTracker steps={steps} />);
    expect(screen.getByText("Beginner")).toHaveClass("text-xs");
    expect(screen.getByText("Expert")).toHaveClass("text-xs");
  });

  it("renders progress bar if progressPercent is set", () => {
    render(<BadgeProgressionTracker steps={steps} progressPercent={67} />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });
});
