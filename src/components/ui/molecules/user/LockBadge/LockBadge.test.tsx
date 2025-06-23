import { render, screen } from "@testing-library/react";
import LockBadge from "./LockBadge";

describe("LockBadge", () => {
  it("renders default lock icon", () => {
    render(<LockBadge />);
    expect(screen.getByTestId("lock-badge")).toBeInTheDocument();
    expect(screen.getByLabelText("locked")).toBeInTheDocument();
  });

  it("renders custom icon if provided", () => {
    render(<LockBadge icon={<span>🔒</span>} />);
    expect(screen.getByText("🔒")).toBeInTheDocument();
  });

  it("shows lockedBy in tooltip/aria-label if provided", () => {
    render(<LockBadge lockedBy="Nguyễn Văn A" />);
    expect(screen.getByTitle(/Nguyễn Văn A/)).toBeInTheDocument();
    expect(screen.getByLabelText("Nguyễn Văn A")).toBeInTheDocument();
  });

  it("shows reason in tooltip/aria-label if provided", () => {
    render(<LockBadge reason="Khóa do admin" />);
    expect(screen.getByTitle(/Khóa do admin/)).toBeInTheDocument();
    expect(screen.getByLabelText("Khóa do admin")).toBeInTheDocument();
  });
});
