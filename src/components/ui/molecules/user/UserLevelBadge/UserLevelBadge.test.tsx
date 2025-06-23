import { render, screen } from "@testing-library/react";
import UserLevelBadge from "./UserLevelBadge";

describe("UserLevelBadge", () => {
  it("renders default label by level", () => {
    render(<UserLevelBadge level="member" />);
    expect(screen.getByText("Thành viên")).toBeInTheDocument();
  });

  it("renders custom label if provided", () => {
    render(<UserLevelBadge level="vip" label="Very VIP" />);
    expect(screen.getByText("Very VIP")).toBeInTheDocument();
  });

  it("renders custom icon if provided", () => {
    render(<UserLevelBadge level="pro" icon={<span>🌟</span>} />);
    expect(screen.getByText("🌟")).toBeInTheDocument();
  });

  it("applies correct style by level", () => {
    render(<UserLevelBadge level="elite" />);
    expect(screen.getByTestId("user-level-badge").className).toMatch(/indigo/);
  });

  it("uses custom tooltip if provided", () => {
    render(<UserLevelBadge level="pro" tooltip="Pro tooltip" />);
    expect(screen.getByTitle("Pro tooltip")).toBeInTheDocument();
  });
});
