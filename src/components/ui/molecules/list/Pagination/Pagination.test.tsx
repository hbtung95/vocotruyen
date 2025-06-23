import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Pagination", () => {
  it("renders page buttons", () => {
    render(<Pagination page={2} pageSize={10} total={100} onPageChange={jest.fn()} />);
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByLabelText("Trang sau")).toBeInTheDocument();
    expect(screen.getByLabelText("Trang đầu")).toBeInTheDocument();
  });

  it("calls onPageChange when page button clicked", () => {
    const fn = jest.fn();
    render(<Pagination page={2} pageSize={10} total={30} onPageChange={fn} />);
    fireEvent.click(screen.getByText("3"));
    expect(fn).toHaveBeenCalledWith(3);
  });

  it("shows ... when many pages", () => {
    render(<Pagination page={6} pageSize={10} total={150} onPageChange={jest.fn()} />);
    expect(screen.getAllByText("…").length).toBeGreaterThan(0);
  });

  it("disables buttons if disabled", () => {
    render(<Pagination page={1} pageSize={10} total={20} onPageChange={jest.fn()} disabled />);
    expect(screen.getByLabelText("Trang đầu")).toBeDisabled();
    expect(screen.getByLabelText("Trang sau")).toBeDisabled();
  });

  it("renders page size select if showPageSize", () => {
    render(<Pagination page={1} pageSize={10} total={20} onPageChange={jest.fn()} showPageSize />);
    expect(screen.getByLabelText("Số dòng/trang")).toBeInTheDocument();
  });
});
