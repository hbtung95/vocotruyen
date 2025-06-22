import React from "react";
import clsx from "clsx";
import type { LinkProps } from "./Link.types";
import styles from "./themes/LinkLight.module.css";

/**
 * Link – Atom cho navigation/link với a11y, external, icon, theme.
 */
export const Link: React.FC<LinkProps> = ({
  children,
  href,
  external = false,
  underline = true,
  icon,
  disabled = false,
  className,
  ...rest
}) => {
  return (
    <a
      href={disabled ? undefined : href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      className={clsx(
        "inline-flex items-center gap-1 font-medium transition-colors",
        underline ? "underline underline-offset-2 hover:text-accent" : "hover:text-accent",
        disabled && "opacity-60 pointer-events-none cursor-not-allowed",
        styles.link,
        className
      )}
      {...rest}
    >
      {icon && <span className="inline-flex">{icon}</span>}
      {children}
      {external && (
        <span className="ml-1 text-xs" aria-label="(external)">
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path d="M8 4h8v8M8 12l8-8" />
            <rect x="4" y="4" width="12" height="12" rx="2" stroke="currentColor" strokeWidth={1.5} fill="none"/>
          </svg>
        </span>
      )}
    </a>
  );
};

export default Link;
