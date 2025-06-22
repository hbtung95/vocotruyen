import { render, screen, fireEvent } from "@testing-library/react";
import { Select } from "./Select";

describe("Select", () => {
  const options = [
    { label: "A", value: "a" },
    { label: "B", value: "b" },
  ];

  it("renders options", () => {
    render(<Select options={options} />);
    expect(screen.getByText("A")).toBeInTheDocument();
    expect(screen.getByText("B")).toBeInTheDocument();
  });

  it("calls onChange", () => {
    const handleChange = jest.fn();
    render(<Select options={options} onChange={handleChange} />);
    fireEvent.change(screen.getByRole("combobox"), { target: { value: "b" } });
    expect(handleChange).toHaveBeenCalled();
  });

  it("shows error", () => {
    render(<Select options={options} error="Lỗi" />);
    expect(screen.getByText("Lỗi")).toBeInTheDocument();
  });
});
