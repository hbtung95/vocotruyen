import React from "react";
import { Spinner, SpinnerProps } from "../Spinner";

/**
 * SpinnerOverlay – Overlay che mờ, spinner giữa màn hình
 */
const SpinnerOverlay: React.FC<SpinnerProps> = (props) => (
  <div className="fixed inset-0 bg-black/20 z-50 flex items-center justify-center">
    <Spinner {...props} />
  </div>
);

export default SpinnerOverlay;
