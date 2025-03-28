import React, { ForwardedRef } from "react";
import cx from "classnames";
import { DatePickerProps } from "./types";
import InputStyles from "../Input/styles.module.scss";

export const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  ({ className, error, ...rest }, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <div className={cx(InputStyles.container, className)}>
        <legend>{rest.label}</legend>
        <input type="date" placeholder="YYYY-MM-DD" {...rest} ref={ref} />
        {error && <span className={InputStyles.error}>{error}</span>}
      </div>
    );
  }
);

export default DatePicker;
