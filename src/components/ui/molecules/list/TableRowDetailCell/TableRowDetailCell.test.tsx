import { render, screen, fireEvent } from "@testing-library/react";
import TableRowDetailCell from "./TableRowDetailCell";

describe("TableRowDetailCell", () => {
  it("renders detail content", () => {
    render(<TableRowDetailCell open>Chi tiết mở rộng</TableRowDetailCell>);
    expect(screen.getByText("Chi tiết mở rộng")).toBeInTheDocument();
  });

  it("shows loading and error", () => {
    render(<TableRowDetailCell open loading error={false} />);
    expect(screen.getByText("Đang tải...")).toBeInTheDocument();
    render(<TableRowDetailCell open error />);
    expect(screen.getByText("Có lỗi dữ liệu")).toBeInTheDocument();
  });

  it("can close via onClose", () => {
    const fn = jest.fn();
    render(<TableRowDetailCell open onClose={fn}>Nội dung</TableRowDetailCell>);
    fireEvent.click(screen.getByTitle("Đóng chi tiết"));
    expect(fn).toHaveBeenCalled();
  });

  it("renders nothing if not open", () => {
    render(<TableRowDetailCell open={false}>Ẩn</TableRowDetailCell>);
    expect(screen.queryByTestId("table-row-detail-cell")).toBeNull();
  });
});
