import { render, screen, fireEvent } from "@testing-library/react";
import FilterDropdown from "./FilterDropdown";

const options = [
  { value: "ok", label: "Đạt" },
  { value: "fail", label: "Không đạt" },
];

describe("FilterDropdown", () => {
  it("renders label and options", () => {
    render(<FilterDropdown label="Lọc" options={options} value="" onChange={jest.fn()} />);
    expect(screen.getByText("Lọc")).toBeInTheDocument();
  });

  it("opens and selects an option", () => {
    const fn = jest.fn();
    render(<FilterDropdown label="Lọc" options={options} value="" onChange={fn} />);
    fireEvent.click(screen.getByText("Lọc"));
    fireEvent.click(screen.getByText("Đạt"));
    expect(fn).toHaveBeenCalledWith("ok");
  });

  it("multi select works", () => {
    const fn = jest.fn();
    render(<FilterDropdown options={options} value={[]} onChange={fn} multi />);
    fireEvent.click(screen.getByText("Chọn..."));
    fireEvent.click(screen.getByText("Đạt"));
    expect(fn).toHaveBeenCalled();
  });

  it("disabled disables trigger", () => {
    render(<FilterDropdown options={options} value="" onChange={jest.fn()} disabled />);
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
