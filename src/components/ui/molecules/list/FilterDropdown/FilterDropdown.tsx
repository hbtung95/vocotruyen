import React, { useState, useRef } from "react";
import { FilterDropdownProps } from "./FilterDropdown.types";
import styles from "./themes/FilterDropdown.module.css";
import { getSelectedLabel } from "./FilterDropdown.utils";
import { useDropdownClose } from "./FilterDropdown.hooks";

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  label,
  icon,
  value,
  options,
  onChange,
  multi = false,
  placeholder = "Chọn...",
  className = "",
  dropdownAlign = "left",
  disabled = false,
}) => {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useDropdownClose(wrapRef, () => setOpen(false));

  const handleSelect = (val: any) => {
    if (disabled) return;
    if (multi) {
      const arr = Array.isArray(value) ? [...value] : [];
      const idx = arr.indexOf(val);
      let next;
      if (idx === -1) next = [...arr, val];
      else next = arr.filter((v: any) => v !== val);
      onChange(next);
    } else {
      onChange(val);
      setOpen(false);
    }
  };

  const selectedLabel = getSelectedLabel(options, value, multi);

  return (
    <div
      className={`${styles.dropdownWrap} ${className}`}
      ref={wrapRef}
      data-testid="filter-dropdown"
    >
      <button
        className={styles.triggerBtn}
        type="button"
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
        title={selectedLabel || label || placeholder}
      >
        {icon}
        <span>{selectedLabel || label || placeholder}</span>
        <span style={{ fontSize: "1.1em" }}>▼</span>
      </button>
      {open && (
        <div
          className={`
            ${styles.dropdownMenu}
            ${dropdownAlign === "right" ? styles.right : ""}
          `}
          role="listbox"
        >
          {options.map(opt => {
            const checked = multi
              ? Array.isArray(value) && value.includes(opt.value)
              : value === opt.value;
            return (
              <div
                key={opt.value}
                className={`
                  ${styles.option}
                  ${checked ? "selected" : ""}
                `}
                onClick={() => handleSelect(opt.value)}
                role="option"
                aria-selected={checked}
                tabIndex={0}
              >
                {multi && (
                  <span className={styles.checkMark}>
                    {checked ? "✔" : ""}
                  </span>
                )}
                {opt.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
