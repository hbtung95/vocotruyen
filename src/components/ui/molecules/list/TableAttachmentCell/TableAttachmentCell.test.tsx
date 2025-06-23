import { render, screen, fireEvent } from "@testing-library/react";
import TableAttachmentCell from "./TableAttachmentCell";

const attachments = [
  { key: "f1", name: "Tài liệu.pdf", url: "#", type: "pdf", size: 127777 },
  { key: "f2", name: "Ảnh.jpg", url: "#", type: "jpg", size: 23034, onPreview: jest.fn() },
  { key: "f3", name: "Báo cáo.zip", url: "#", type: "zip", size: 8702304, onDownload: jest.fn() },
];

describe("TableAttachmentCell", () => {
  it("renders attachments", () => {
    render(<TableAttachmentCell attachments={attachments} />);
    expect(screen.getByText("Tài liệu.pdf")).toBeInTheDocument();
    expect(screen.getByText("Ảnh.jpg")).toBeInTheDocument();
  });

  it("renders more if attachments > max", () => {
    render(<TableAttachmentCell attachments={attachments} max={1} />);
    expect(screen.getByText("+2")).toBeInTheDocument();
  });

  it("triggers onPreview/onDownload", () => {
    render(<TableAttachmentCell attachments={attachments} />);
    fireEvent.click(screen.getByText("Ảnh.jpg"));
    fireEvent.click(screen.getAllByTitle("Tải xuống")[0]);
    expect(attachments[2].onDownload).toHaveBeenCalled();
  });

  it("renders nothing if empty", () => {
    render(<TableAttachmentCell attachments={[]} />);
    expect(screen.queryByTestId("table-attachment-cell")).toBeNull();
  });
});
