import { render, screen } from "@testing-library/react";
import StatusBadge from "./StatusBadge";

describe("StatusBadge", () => {
  it("renders default label by status", () => {
    render(<StatusBadge status="active" />);
    expect(screen.getByText("Đang hoạt động")).toBeInTheDocument();
  });

  it("renders custom label if provided", () => {
    render(<StatusBadge status="pending" label="Sắp duyệt" />);
    expect(screen.getByText("Sắp duyệt")).toBeInTheDocument();
  });

  it("shows icon if provided", () => {
    render(<StatusBadge status="approved" icon={<span>✓</span>} />);
    expect(screen.getByText("✓")).toBeInTheDocument();
  });

  it("uses custom tooltip if provided", () => {
    render(<StatusBadge status="error" tooltip="Có lỗi hệ thống" />);
    expect(screen.getByTitle("Có lỗi hệ thống")).toBeInTheDocument();
  });

  it("has correct aria-label", () => {
    render(<StatusBadge status="rejected" />);
    expect(screen.getByLabelText("Từ chối")).toBeInTheDocument();
  });
});
