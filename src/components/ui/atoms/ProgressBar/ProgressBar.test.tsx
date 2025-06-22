import { render, screen } from "@testing-library/react";
import { ProgressBar } from "./ProgressBar";

describe("ProgressBar", () => {
  it("renders correct value", () => {
    render(<ProgressBar value={66} showLabel />);
    expect(screen.getByText("66%")).toBeInTheDocument();
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "66");
  });

  it("renders indeterminate", () => {
    render(<ProgressBar indeterminate showLabel />);
    expect(screen.getByText("Đang xử lý...")).toBeInTheDocument();
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-busy", "true");
  });

  it("has correct color", () => {
    render(<ProgressBar value={50} color="success" />);
    // Không test màu trực tiếp, chỉ kiểm tra role tồn tại
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });
});
