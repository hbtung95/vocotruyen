import React, { useState } from "react";
import { TableImageCellProps } from "./TableImageCell.types";
import styles from "./themes/TableImageCell.module.css";
import { useImages } from "./TableImageCell.hooks";

const TableImageCell: React.FC<TableImageCellProps> = ({
  images,
  shape = "circle",
  size = 38,
  multi = true,
  max = 3,
  fallback = <span className={styles.fallback}>❌</span>,
  onClickImage,
  className = "",
}) => {
  const imgList = useImages(images, multi ? max : 1);
  const [errorIdx, setErrorIdx] = useState<number[]>([]);

  if (!imgList.length) return null;

  const showImgs = imgList.slice(0, max);
  const hiddenCount = imgList.length - showImgs.length;

  return (
    <div className={`${styles.imgCellWrap} ${className}`} data-testid="table-img-cell">
      {showImgs.map((img, idx) => (
        <span
          key={img.src}
          className={`
            ${styles.imgBox}
            ${shape === "circle" ? styles.imgCircle : ""}
            ${shape === "rounded" ? styles.imgRounded : ""}
            ${shape === "square" ? styles.imgSquare : ""}
          `}
          style={{ width: size, height: size }}
          tabIndex={onClickImage ? 0 : -1}
          title={img.tooltip || img.alt || ""}
          aria-label={img.tooltip}
          onClick={() => onClickImage?.(img.src, idx)}
        >
          {!errorIdx.includes(idx) ? (
            <img
              className={styles.img}
              src={img.src}
              alt={img.alt || ""}
              draggable={false}
              onError={() => setErrorIdx(list => [...list, idx])}
              style={{ width: size, height: size }}
            />
          ) : (
            fallback
          )}
        </span>
      ))}
      {multi && hiddenCount > 0 && (
        <span className={styles.moreBox} title={`+${hiddenCount} ảnh`}>+{hiddenCount}</span>
      )}
    </div>
  );
};

export default TableImageCell;
