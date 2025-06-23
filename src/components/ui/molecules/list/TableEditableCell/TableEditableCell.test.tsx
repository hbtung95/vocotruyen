import { render, screen, fireEvent } from "@testing-library/react";
import TableEditableCell from "./TableEditableCell";

describe("TableEditableCell", () => {
  it("renders value", () => {
    render(<TableEditableCell value="Chỉnh sửa" />);
    expect(screen.getByText("Chỉnh sửa")).toBeInTheDocument();
  });

  it("can edit and save", () => {
    const onSave = jest.fn();
    render(<TableEditableCell value="A" editable onSave={onSave} />);
    fireEvent.click(screen.getByTestId("table-editable-cell"));
    fireEvent.change(screen.getByDisplayValue("A"), { target: { value: "B" } });
    fireEvent.click(screen.getByText("✔️"));
    expect(onSave).toHaveBeenCalledWith("B");
  });

  it("can cancel edit", () => {
    const onCancel = jest.fn();
    render(<TableEditableCell value="A" editable onCancel={onCancel} />);
    fireEvent.click(screen.getByTestId("table-editable-cell"));
    fireEvent.click(screen.getByText("✖️"));
    expect(onCancel).toHaveBeenCalled();
  });

  it("renders select", () => {
    render(<TableEditableCell value="1" type="select" options={[{ value: "1", label: "Một" }]} editable />);
    fireEvent.click(screen.getByTestId("table-editable-cell"));
    expect(screen.getByDisplayValue("1")).toBeInTheDocument();
  });

  it("renders nothing if not editable and no value", () => {
    render(<TableEditableCell value={null} editable={false} />);
    expect(screen.getByTestId("table-editable-cell")).toBeInTheDocument();
  });
});
