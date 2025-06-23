import type { Meta, StoryObj } from "@storybook/react";
import TableCell from "./TableCell";

const meta: Meta<typeof TableCell> = {
  title: "Atoms/TableCell",
  component: TableCell,
  tags: ["autodocs"],
};
export default meta;

export const Default = {
  render: () => (
    <table>
      <thead>
        <tr>
          <TableCell header>STT</TableCell>
          <TableCell header align="center" sortable sorted sortDirection="asc">Tên</TableCell>
          <TableCell header align="right" variant="number">Số</TableCell>
        </tr>
      </thead>
      <tbody>
        <tr>
          <TableCell>1</TableCell>
          <TableCell align="center">Nguyễn Văn A</TableCell>
          <TableCell align="right" variant="number">123</TableCell>
        </tr>
        <tr>
          <TableCell>2</TableCell>
          <TableCell align="center">Lê Thị B</TableCell>
          <TableCell align="right" variant="number">456</TableCell>
        </tr>
      </tbody>
    </table>
  ),
};
