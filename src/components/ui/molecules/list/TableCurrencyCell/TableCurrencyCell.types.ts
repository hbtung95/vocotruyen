import { ReactNode } from "react";

export interface TableCurrencyCellProps {
  value: number | null | undefined;
  currency?: string;                  // "VND", "USD", "EUR", "JPY",...
  locale?: string;                    // "vi-VN", "en-US",...
  showSymbol?: boolean;
  symbol?: string;                    // Ghi đè icon ký hiệu
  showColor?: boolean;                // Âm đỏ, dương xanh
  highlight?: boolean;
  tooltip?: string;
  icon?: ReactNode;
  bold?: boolean;
  copyable?: boolean;
  onCopy?: (v: number) => void;
  error?: boolean;
  className?: string;
}
