import React from "react";
import { FilterBarProps } from "./FilterBar.types";
import { useFilterBar } from "./FilterBar.hooks";
import styles from "./themes/FilterBar.module.css";

const FilterBar: React.FC<FilterBarProps> = ({
  fields,
  value,
  onChange,
  onReset,
  onSubmit,
  className = "",
}) => {
  const handleChange = useFilterBar(fields, onChange);

  return (
    <form
      className={`${styles.filterBar} ${className}`}
      onSubmit={e => {
        e.preventDefault();
        onSubmit && onSubmit();
      }}
      aria-label="Bộ lọc nâng cao"
    >
      {fields.map(field => (
        <div key={field.key} className={styles.filterField}>
          <label className="text-xs font-medium mb-1">{field.label}</label>
          {field.type === "text" && (
            <input
              className={styles.filterInput}
              type="text"
              value={value[field.key] || ""}
              onChange={e => handleChange(field.key, e.target.value, value)}
              placeholder={field.label}
            />
          )}
          {field.type === "select" && field.options && (
            <select
              className={styles.filterSelect}
              value={value[field.key] || ""}
              onChange={e => handleChange(field.key, e.target.value, value)}
            >
              <option value="">--Chọn--</option>
              {field.options.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          )}
          {field.type === "multi-select" && field.options && (
            <select
              className={styles.filterSelect}
              multiple
              value={value[field.key] || []}
              onChange={e =>
                handleChange(
                  field.key,
                  Array.from(e.target.selectedOptions).map(opt => opt.value),
                  value
                )
              }
            >
              {field.options.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          )}
          {field.type === "date" && (
            <input
              className={styles.filterInput}
              type="date"
              value={value[field.key] || ""}
              onChange={e => handleChange(field.key, e.target.value, value)}
            />
          )}
          {field.type === "custom" && field.render}
        </div>
      ))}
      <div className={styles.btnGroup}>
        {onSubmit && (
          <button
            type="submit"
            className="px-3 py-1 bg-primary-600 text-white rounded"
          >
            Lọc
          </button>
        )}
        {onReset && (
          <button
            type="button"
            className="px-2 py-1 bg-gray-100 border rounded"
            onClick={onReset}
          >
            Xóa lọc
          </button>
        )}
      </div>
    </form>
  );
};

export default FilterBar;
