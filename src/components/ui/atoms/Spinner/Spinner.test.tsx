import { render, screen } from "@testing-library/react";
import { Spinner } from "./Spinner";

describe("Spinner", () => {
  it("renders with label", () => {
    render(<Spinner label="Đang xử lý..." />);
    expect(screen.getByText("Đang xử lý...")).toBeInTheDocument();
  });

  it("has role status and aria-busy", () => {
    render(<Spinner />);
    expect(screen.getByRole("status")).toHaveAttribute("aria-busy", "true");
  });

  it("can hide label", () => {
    render(<Spinner hideLabel />);
    expect(screen.queryByText("Đang tải...")).not.toBeInTheDocument();
  });
});
