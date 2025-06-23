import { render, screen, fireEvent, act } from "@testing-library/react";
import Toast from "./Toast";

describe("Toast", () => {
  it("renders with children and type", () => {
    render(<Toast open type="success">Thành công!</Toast>);
    expect(screen.getByText("Thành công!")).toBeInTheDocument();
    expect(screen.getByText("✅")).toBeInTheDocument();
  });

  it("does not render when open=false", () => {
    render(<Toast open={false}>Hidden</Toast>);
    expect(screen.queryByText("Hidden")).not.toBeInTheDocument();
  });

  it("calls onClose when close button clicked", () => {
    const fn = jest.fn();
    render(<Toast open closable onClose={fn}>Có thể đóng</Toast>);
    fireEvent.click(screen.getByLabelText(/đóng/i));
    expect(fn).toHaveBeenCalled();
  });

  it("auto closes after duration", () => {
    jest.useFakeTimers();
    const fn = jest.fn();
    render(<Toast open onClose={fn} duration={500}>Auto close</Toast>);
    act(() => {
      jest.advanceTimersByTime(500);
    });
    expect(fn).toHaveBeenCalled();
    jest.useRealTimers();
  });
});
