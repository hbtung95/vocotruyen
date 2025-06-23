import { render, screen, fireEvent } from "@testing-library/react";
import Calendar from "./Calendar";

describe("Calendar", () => {
  it("renders days of month", () => {
    render(<Calendar />);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("28")).toBeInTheDocument(); // February (or adapt with real daysInMonth)
  });
  it("calls onSelect with date", () => {
    const fn = jest.fn();
    render(<Calendar onSelect={fn} />);
    fireEvent.click(screen.getByText("15"));
    expect(fn).toHaveBeenCalled();
  });
});
