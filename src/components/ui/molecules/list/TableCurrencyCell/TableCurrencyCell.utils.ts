// Format currency
export function formatCurrency(
  value: number,
  currency = "VND",
  locale = "vi-VN",
  showSymbol = true,
  symbol?: string
): string {
  try {
    const opts: Intl.NumberFormatOptions = {
      style: "currency",
      currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    };
    let s = new Intl.NumberFormat(locale, opts).format(value);
    if (!showSymbol && symbol !== undefined) {
      // Remove symbol and use custom
      s = s.replace(/[^0-9.,\-]+/, "").trim();
      return `${symbol || ""}${s}`;
    }
    if (!showSymbol) s = s.replace(/[^0-9.,\-]+/, "").trim();
    if (symbol) s = s.replace(/[^0-9.,\-]+/, symbol);
    return s;
  } catch {
    return value.toString();
  }
}
