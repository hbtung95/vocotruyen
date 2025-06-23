import { render, screen } from "@testing-library/react";
import RoleBadge from "./RoleBadge";

describe("RoleBadge", () => {
  it("renders the role label", () => {
    render(<RoleBadge role="manager" />);
    expect(screen.getByText("Quản lý")).toBeInTheDocument();
  });

  it("shows correct color and icon for admin", () => {
    render(<RoleBadge role="admin" />);
    const badge = screen.getByLabelText("Admin");
    expect(badge).toHaveClass("bg-red-500");
  });

  it("accepts custom className", () => {
    render(<RoleBadge role="athlete" className="my-custom-class" />);
    expect(screen.getByText("VĐV").parentElement).toHaveClass("my-custom-class");
  });
});
