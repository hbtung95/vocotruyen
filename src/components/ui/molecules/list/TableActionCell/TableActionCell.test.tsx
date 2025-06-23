import { render, screen, fireEvent } from "@testing-library/react";
import TableActionCell from "./TableActionCell";

const actions = [
  { key: "edit", label: "Sửa", icon: <span>✏️</span>, onClick: jest.fn() },
  { key: "delete", label: "Xoá", icon: <span>🗑️</span>, confirm: "Bạn chắc chắn xoá?", onClick: jest.fn() },
  { key: "view", label: "Xem", icon: <span>👁️</span>, onClick: jest.fn() },
];

describe("TableActionCell", () => {
  it("renders main actions", () => {
    render(<TableActionCell actions={actions} />);
    expect(screen.getByText("Sửa")).toBeInTheDocument();
    expect(screen.getByText("Xoá")).toBeInTheDocument();
  });

  it("renders more menu if actions > max", () => {
    render(<TableActionCell actions={actions} max={1} />);
    expect(screen.getByText("Khác")).toBeInTheDocument();
  });

  it("triggers onClick", () => {
    render(<TableActionCell actions={actions} />);
    fireEvent.click(screen.getByText("Sửa"));
    expect(actions[0].onClick).toHaveBeenCalled();
  });

  it("renders nothing if no actions", () => {
    render(<TableActionCell actions={[]} />);
    expect(screen.queryByTestId("table-action-cell")).toBeNull();
  });
});
