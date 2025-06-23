import { render, screen, fireEvent } from "@testing-library/react";
import Backdrop from "./Backdrop";

describe("Backdrop", () => {
  it("renders when open is true", () => {
    render(<Backdrop open />);
    const el = screen.getByRole("presentation", { hidden: true }) || screen.getByTestId("backdrop");
    expect(el).toBeInTheDocument();
  });

  it("does not render when open is false", () => {
    render(<Backdrop open={false} />);
    expect(screen.queryByTestId("backdrop")).not.toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const fn = jest.fn();
    render(<Backdrop onClick={fn} data-testid="backdrop" />);
    fireEvent.click(screen.getByTestId("backdrop"));
    expect(fn).toHaveBeenCalled();
  });
});
