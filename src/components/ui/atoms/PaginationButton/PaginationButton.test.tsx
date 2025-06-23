import { render, screen, fireEvent } from "@testing-library/react";
import PaginationButton from "./PaginationButton";

describe("PaginationButton", () => {
  it("renders number as children", () => {
    render(<PaginationButton>5</PaginationButton>);
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("renders icon for prev/next/first/last", () => {
    render(<PaginationButton variant="prev" />);
    expect(screen.getByText("<")).toBeInTheDocument();
    render(<PaginationButton variant="ellipsis" />);
    expect(screen.getByText("…")).toBeInTheDocument();
  });

  it("applies active style", () => {
    render(<PaginationButton active>3</PaginationButton>);
    expect(screen.getByRole("button")).toHaveAttribute("aria-current", "page");
  });

  it("is disabled when disabled prop set", () => {
    render(<PaginationButton disabled>8</PaginationButton>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("calls onClick when clicked", () => {
    const fn = jest.fn();
    render(<PaginationButton onClick={fn}>2</PaginationButton>);
    fireEvent.click(screen.getByText("2"));
    expect(fn).toHaveBeenCalled();
  });
});
