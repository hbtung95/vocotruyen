import { render, screen, fireEvent } from "@testing-library/react";
import BulkEditDialog from "./BulkEditDialog";

const fields = [
  { key: "score", label: "Điểm", type: "number" as const },
  { key: "status", label: "Trạng thái", type: "select" as const, options: [
    { value: "passed", label: "Đạt" },
    { value: "fail", label: "Không đạt" },
  ]},
];

describe("BulkEditDialog", () => {
  it("renders fields and handles submit", () => {
    const onSubmit = jest.fn();
    render(
      <BulkEditDialog open fields={fields} onClose={() => {}} onSubmit={onSubmit} />
    );
    fireEvent.change(screen.getByLabelText("Điểm"), { target: { value: "8.5" } });
    fireEvent.change(screen.getByLabelText("Trạng thái"), { target: { value: "passed" } });
    fireEvent.click(screen.getByText("Lưu thay đổi"));
    expect(onSubmit).toHaveBeenCalled();
  });

  it("calls onClose when cancel", () => {
    const onClose = jest.fn();
    render(
      <BulkEditDialog open fields={fields} onClose={onClose} onSubmit={() => {}} />
    );
    fireEvent.click(screen.getByText("Hủy"));
    expect(onClose).toHaveBeenCalled();
  });

  it("not rendered when open=false", () => {
    render(
      <BulkEditDialog open={false} fields={fields} onClose={() => {}} onSubmit={() => {}} />
    );
    expect(screen.queryByTestId("bulk-edit-dialog")).toBeNull();
  });
});
