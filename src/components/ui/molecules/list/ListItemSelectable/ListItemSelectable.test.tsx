import { render, screen, fireEvent } from "@testing-library/react";
import ListItemSelectable from "./ListItemSelectable";

describe("ListItemSelectable", () => {
  it("renders label and icon", () => {
    render(<ListItemSelectable label="Selectable" icon={<span>🔗</span>} />);
    expect(screen.getByText("Selectable")).toBeInTheDocument();
    expect(screen.getByText("🔗")).toBeInTheDocument();
  });

  it("renders description if provided", () => {
    render(<ListItemSelectable label="A" description="desc" />);
    expect(screen.getByText("desc")).toBeInTheDocument();
  });

  it("shows checked style when checked", () => {
    render(<ListItemSelectable label="Checked" checked />);
    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("calls onChange when clicked", () => {
    const mockFn = jest.fn();
    render(<ListItemSelectable label="Click" onChange={mockFn} />);
    fireEvent.click(screen.getByRole("checkbox"));
    expect(mockFn).toHaveBeenCalledWith(true);
  });

  it("is disabled if disabled", () => {
    render(<ListItemSelectable label="Disabled" disabled />);
    expect(screen.getByRole("checkbox")).toBeDisabled();
  });
});
