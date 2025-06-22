import { render, screen } from "@testing-library/react";
import { Label } from "./Label";

describe("Label", () => {
  it("renders children", () => {
    render(<Label>Họ tên</Label>);
    expect(screen.getByText("Họ tên")).toBeInTheDocument();
  });

  it("shows required *", () => {
    render(<Label required>Họ tên</Label>);
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("shows (tuỳ chọn) if optional", () => {
    render(<Label optional>Ghi chú</Label>);
    expect(screen.getByText("(tuỳ chọn)")).toBeInTheDocument();
  });

  it("applies error style", () => {
    render(<Label error>Họ tên</Label>);
    expect(screen.getByText("Họ tên")).toHaveClass("text-red-500");
  });

  it("is disabled", () => {
    render(<Label disabled>Họ tên</Label>);
    expect(screen.getByText("Họ tên").parentElement).toHaveAttribute("aria-disabled", "true");
  });
});
