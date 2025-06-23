import React, { useRef, useState } from "react";
import { TableImportMenuProps, ImportFormat } from "./TableImportMenu.types";
import styles from "./themes/TableImportMenu.module.css";
import { getAcceptMime } from "./TableImportMenu.utils";
import { useFileDrop } from "./TableImportMenu.hooks";

const defaultFormats: ImportFormat[] = ["csv", "xlsx", "json"];

const TableImportMenu: React.FC<TableImportMenuProps> = ({
  onImport,
  formats = defaultFormats,
  loading = false,
  error,
  onDownloadDemo,
  instructions,
  disabled = false,
  className = "",
}) => {
  const [open, setOpen] = useState(false);
  const [selectedFmt, setFmt] = useState<ImportFormat>(formats[0]);
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Drag and drop
  const dropRef = useFileDrop(f => setFile(f));

  // Gửi file import
  const handleImport = () => {
    if (file && selectedFmt) {
      onImport(file, selectedFmt);
      setFile(null);
      setOpen(false);
    }
  };

  return (
    <div className={`${styles.importWrap} ${className}`}>
      <button
        className={styles.importBtn}
        disabled={disabled}
        onClick={() => setOpen(v => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        type="button"
        title="Nhập dữ liệu"
      >
        <span>Nhập file</span>
        <span style={{ fontSize: "1em" }}>⭳</span>
      </button>
      {open && (
        <div className={styles.popup} role="menu">
          <div className={styles.formatBtns}>
            {formats.map(fmt => (
              <button
                key={fmt}
                className={styles.demoBtn}
                style={{
                  textDecoration: fmt === selectedFmt ? "underline" : "none",
                  fontWeight: fmt === selectedFmt ? 600 : 400,
                }}
                type="button"
                onClick={() => setFmt(fmt)}
              >
                {fmt.toUpperCase()}
              </button>
            ))}
          </div>
          {onDownloadDemo && (
            <button
              className={styles.demoBtn}
              style={{ marginBottom: 10 }}
              type="button"
              onClick={() => onDownloadDemo(selectedFmt)}
            >
              Tải file mẫu ({selectedFmt.toUpperCase()})
            </button>
          )}
          <div
            className={styles.dropZone}
            ref={dropRef}
            tabIndex={0}
            onClick={() => inputRef.current?.click()}
            aria-label="Kéo thả hoặc chọn file"
          >
            {file ? (
              <span className={styles.fileLabel}>{file.name}</span>
            ) : (
              <>Kéo thả hoặc <span className="underline text-primary-600">chọn file</span> để nhập dữ liệu</>
            )}
            <input
              ref={inputRef}
              type="file"
              style={{ display: "none" }}
              accept={getAcceptMime(selectedFmt)}
              disabled={disabled}
              onChange={e => {
                const f = e.target.files?.[0];
                if (f) setFile(f);
              }}
            />
          </div>
          {instructions && (
            <div style={{ fontSize: 13, color: "#4d6292", marginBottom: 7 }}>{instructions}</div>
          )}
          {error && <div className={styles.errorMsg}>{error}</div>}
          <div className={styles.progress} style={{ width: loading ? "70%" : "0" }} />
          <div style={{ textAlign: "right", marginTop: 10 }}>
            <button
              type="button"
              className="px-3 py-1 bg-gray-100 border rounded mr-2"
              onClick={() => setOpen(false)}
              disabled={loading}
            >
              Hủy
            </button>
            <button
              type="button"
              className="px-4 py-1 bg-primary-600 text-white rounded"
              onClick={handleImport}
              disabled={!file || loading}
            >
              {loading ? "Đang nhập..." : "Nhập dữ liệu"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableImportMenu;
