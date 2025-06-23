import { render, screen, fireEvent } from "@testing-library/react";
import Alert from "./Alert";

describe("Alert", () => {
  it("renders with title and children", () => {
    render(<Alert title="Thông báo">Nội dung thông báo</Alert>);
    expect(screen.getByText("Thông báo")).toBeInTheDocument();
    expect(screen.getByText("Nội dung thông báo")).toBeInTheDocument();
  });

  it("renders with correct type", () => {
    render(<Alert type="success">OK</Alert>);
    expect(screen.getByText("OK")).toBeInTheDocument();
    expect(screen.getByText("✅")).toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", () => {
    const fn = jest.fn();
    render(<Alert closable onClose={fn}>Đóng đi</Alert>);
    fireEvent.click(screen.getByLabelText(/đóng/i));
    expect(fn).toHaveBeenCalled();
  });
});
