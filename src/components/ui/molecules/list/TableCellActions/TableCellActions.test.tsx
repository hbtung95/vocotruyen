import { render, screen, fireEvent } from "@testing-library/react";
import TableCellActions from "./TableCellActions";

const actions = [
  {
    key: "edit",
    label: "Sửa",
    icon: <span>✏️</span>,
    onClick: jest.fn(),
  },
  {
    key: "delete",
    label: "Xóa",
    icon: <span>🗑</span>,
    onClick: jest.fn(),
    danger: true,
  },
];

describe("TableCellActions", () => {
  it("renders all action buttons", () => {
    render(<TableCellActions actions={actions} />);
    expect(screen.getByText("Sửa")).toBeInTheDocument();
    expect(screen.getByText("Xóa")).toBeInTheDocument();
  });

  it("calls onClick when action clicked", () => {
    render(<TableCellActions actions={actions} />);
    fireEvent.click(screen.getByText("Sửa"));
    expect(actions[0].onClick).toHaveBeenCalled();
  });

  it("shows danger class for danger action", () => {
    render(<TableCellActions actions={actions} />);
    expect(screen.getByText("Xóa").parentElement).toHaveClass("danger");
  });

  it("disables button if action.disabled", () => {
    const disabledActions = [{ ...actions[0], disabled: true }];
    render(<TableCellActions actions={disabledActions} />);
    expect(screen.getByText("Sửa").parentElement).toBeDisabled();
  });
});
