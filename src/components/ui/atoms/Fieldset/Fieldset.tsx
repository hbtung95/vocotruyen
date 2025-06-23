import React from "react";
import type { FieldsetProps } from "./Fieldset.types";
import styles from "./themes/FieldsetLight.module.css";
import clsx from "clsx";

/**
 * Fieldset – Atom group các input (form group), hỗ trợ legend, a11y, disabled
 */
export const Fieldset: React.FC<FieldsetProps> = ({
  legend,
  children,
  disabled = false,
  className,
  ...rest
}) => (
  <fieldset
    className={clsx(
      "border border-gray-300 rounded-xl p-4 mb-4 relative",
      styles.fieldset,
      disabled && styles.disabled,
      className
    )}
    disabled={disabled}
    {...rest}
  >
    {legend && (
      <legend className={clsx("px-2 text-base font-semibold text-accent", styles.legend)}>
        {legend}
      </legend>
    )}
    {children}
  </fieldset>
);

export default Fieldset;
