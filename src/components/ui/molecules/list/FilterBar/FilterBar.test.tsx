import { render, screen, fireEvent } from "@testing-library/react";
import FilterBar from "./FilterBar";

const fields = [
  { key: "name", label: "Tên", type: "text" as const },
  { key: "status", label: "Trạng thái", type: "select" as const, options: [
    { value: "active", label: "Đang hoạt động" },
    { value: "inactive", label: "Ngưng" },
  ]},
];

describe("FilterBar", () => {
  it("renders filter fields", () => {
    render(<FilterBar fields={fields} value={{}} onChange={jest.fn()} />);
    expect(screen.getByLabelText("Tên")).toBeInTheDocument();
    expect(screen.getByLabelText("Trạng thái")).toBeInTheDocument();
  });

  it("calls onChange when input changes", () => {
    const onChange = jest.fn();
    render(<FilterBar fields={fields} value={{}} onChange={onChange} />);
    fireEvent.change(screen.getByLabelText("Tên"), { target: { value: "abc" } });
    expect(onChange).toHaveBeenCalled();
  });

  it("calls onSubmit when form submitted", () => {
    const onSubmit = jest.fn();
    render(<FilterBar fields={fields} value={{}} onChange={jest.fn()} onSubmit={onSubmit} />);
    fireEvent.click(screen.getByText("Lọc"));
    expect(onSubmit).toHaveBeenCalled();
  });

  it("calls onReset when reset clicked", () => {
    const onReset = jest.fn();
    render(<FilterBar fields={fields} value={{}} onChange={jest.fn()} onReset={onReset} />);
    fireEvent.click(screen.getByText("Xóa lọc"));
    expect(onReset).toHaveBeenCalled();
  });
});
