/**
 * Props cho atom Slider
 */
export interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Giá trị hiện tại */
  value: number;
  /** Nhãn hiển thị */
  label?: string;
  /** Min/max/step (HTML) */
  min?: number;
  max?: number;
  step?: number;
  /** Hiển thị giá trị số */
  showValue?: boolean;
  /** Disabled */
  disabled?: boolean;
  /** Custom class */
  className?: string;
}
