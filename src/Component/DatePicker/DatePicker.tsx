import cx from "classnames";
import { DatePickerProps } from "./types";
import InputStyles from "../Input/styles.module.scss";

export const DatePicker = ({ className, error, ...props }: DatePickerProps) => {
  return (
    <div className={cx(InputStyles.container, className)}>
      <legend>{props.name}</legend>
      <input
        type="date"
        pattern="\d{4}-\d{2}-\d{2}"
        placeholder="YYYY-MM-DD"
        {...props}
      />
      {error && <span className={InputStyles.error}>{error}</span>}
    </div>
  );
};

export default DatePicker;
