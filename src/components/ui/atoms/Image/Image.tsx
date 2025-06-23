import React, { useState } from "react";
import type { ImageProps } from "./Image.types";
import styles from "./themes/ImageLight.module.css";
import clsx from "clsx";

/**
 * Image – Atom tối ưu lazy, fallback, error, glass effect, a11y chuẩn
 */
export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  glass = false,
  lazy = true,
  placeholder,
  fallback,
  className,
  ...rest
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <span
      className={clsx("inline-block overflow-hidden", styles.wrapper, glass && styles.glass)}
      aria-label={alt}
      role="img"
    >
      {!loaded && placeholder}
      {!error ? (
        <img
          src={src}
          alt={alt}
          loading={lazy ? "lazy" : undefined}
          className={clsx(
            "object-cover w-full h-full block transition-opacity duration-200",
            !loaded && "opacity-0",
            className,
            styles.img
          )}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          {...rest}
        />
      ) : (
        fallback || (
          <span className={clsx("flex items-center justify-center w-full h-full text-gray-400", styles.fallback)}>
            Ảnh lỗi
          </span>
        )
      )}
    </span>
  );
};

export default Image;
