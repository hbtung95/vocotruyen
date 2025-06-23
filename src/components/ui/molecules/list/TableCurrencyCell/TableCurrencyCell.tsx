import React from "react";
import { TableCurrencyCellProps } from "./TableCurrencyCell.types";
import styles from "./themes/TableCurrencyCell.module.css";
import { formatCurrency } from "./TableCurrencyCell.utils";
import { useCopy } from "./TableCurrencyCell.hooks";

const DEFAULT_SYMBOL: Record<string, string> = {
  VND: "₫",
  USD: "$",
  EUR: "€",
  JPY: "¥",
};

const TableCurrencyCell: React.FC<TableCurrencyCellProps> = ({
  value,
  currency = "VND",
  locale = "vi-VN",
  showSymbol = true,
  symbol,
  showColor = true,
  highlight = false,
  tooltip,
  icon,
  bold = false,
  copyable = false,
  onCopy,
  error = false,
  className = "",
}) => {
  const [copied, copy] = useCopy();
  if (value == null) return null;
  const s = formatCurrency(value, currency, locale, showSymbol, symbol || DEFAULT_SYMBOL[currency] || undefined);
  const colorClass = error
    ? styles.error
    : showColor
    ? value > 0
      ? styles.positive
      : value < 0
      ? styles.negative
      : ""
    : "";
  const fontClass = bold ? styles.bold : "";
  const cellClass = [styles.currencyCell, colorClass, fontClass, highlight ? styles.highlight : "", className]
    .filter(Boolean)
    .join(" ");
  return (
    <span
      className={cellClass}
      title={tooltip || s}
      data-testid="table-currency-cell"
      onClick={copyable ? () => { copy(s); onCopy?.(value); } : undefined}
      tabIndex={0}
      style={error ? { pointerEvents: "none" } : undefined}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {s}
      {copyable && !error && <span className={styles.copied}>{copied ? "✓ Copied!" : "📋"}</span>}
    </span>
  );
};

export default TableCurrencyCell;
