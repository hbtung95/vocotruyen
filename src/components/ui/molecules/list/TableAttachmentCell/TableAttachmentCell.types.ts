import { ReactNode } from "react";

export interface AttachmentItem {
  key: string;
  name: string;
  url: string;
  type?: string;         // "pdf", "doc", "jpg", "zip"...
  size?: number;         // bytes
  icon?: ReactNode;
  uploading?: boolean;
  error?: boolean;
  tooltip?: string;
  onDownload?: () => void;
  onPreview?: () => void;
  onCopyUrl?: () => void;
  disabled?: boolean;
}

export interface TableAttachmentCellProps {
  attachments: AttachmentItem[];
  max?: number;                   // Hiện tối đa N, còn lại More
  showSize?: boolean;
  showIcon?: boolean;
  highlight?: boolean;
  disabled?: boolean;
  className?: string;
}
