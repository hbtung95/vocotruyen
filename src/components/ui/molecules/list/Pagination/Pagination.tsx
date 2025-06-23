import React from "react";
import { PaginationProps } from "./Pagination.types";
import { getPageCount, getPageList } from "./Pagination.utils";
import { useGoToPage } from "./Pagination.hooks";
import styles from "./themes/Pagination.module.css";

const Pagination: React.FC<PaginationProps> = ({
  page,
  pageSize,
  total,
  onPageChange,
  onPageSizeChange,
  pageSizeOptions = [10, 20, 50, 100],
  showPageSize = false,
  disabled = false,
  loading = false,
  className = "",
}) => {
  const pageCount = getPageCount(total, pageSize);
  const goToPage = useGoToPage(onPageChange, pageCount);
  const pageList = getPageList(page, pageCount, 5);

  return (
    <div
      className={`
        ${styles.paginationWrap}
        ${loading ? styles.loading : ""}
        ${className}
      `}
      aria-label="Pagination navigation"
    >
      <button
        className={styles.pageBtn}
        disabled={page <= 1 || disabled}
        onClick={() => goToPage(1)}
        aria-label="Trang đầu"
      >
        {"«"}
      </button>
      <button
        className={styles.pageBtn}
        disabled={page <= 1 || disabled}
        onClick={() => goToPage(page - 1)}
        aria-label="Trang trước"
      >
        {"‹"}
      </button>
      {pageList[0] > 1 && <span>…</span>}
      {pageList.map(i => (
        <button
          key={i}
          className={`${styles.pageBtn} ${i === page ? "active" : ""}`}
          disabled={disabled || loading}
          aria-current={i === page}
          onClick={() => goToPage(i)}
        >
          {i}
        </button>
      ))}
      {pageList[pageList.length - 1] < pageCount && <span>…</span>}
      <button
        className={styles.pageBtn}
        disabled={page >= pageCount || disabled}
        onClick={() => goToPage(page + 1)}
        aria-label="Trang sau"
      >
        {"›"}
      </button>
      <button
        className={styles.pageBtn}
        disabled={page >= pageCount || disabled}
        onClick={() => goToPage(pageCount)}
        aria-label="Trang cuối"
      >
        {"»"}
      </button>
      {showPageSize && (
        <select
          className={styles.pageSizeSelect}
          value={pageSize}
          onChange={e => onPageSizeChange && onPageSizeChange(Number(e.target.value))}
          disabled={disabled || loading}
          aria-label="Số dòng/trang"
        >
          {pageSizeOptions.map(opt => (
            <option key={opt} value={opt}>{opt} / trang</option>
          ))}
        </select>
      )}
      <span style={{ marginLeft: 10 }}>
        Tổng: <b>{total}</b> dòng
      </span>
    </div>
  );
};

export default Pagination;
