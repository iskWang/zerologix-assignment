import React, { ForwardedRef } from "react";
import cx from "classnames";
import { DatePickerProps } from "./types";
import InputStyles from "../Input/styles.module.scss";

export const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  (
    { className, name, error, ...rest },
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className={cx(InputStyles.container, className)}>
        <input ref={ref} type="date" name={name} {...rest} />
        <legend>{rest.label}</legend>
        {error && <span className={InputStyles.error}>{error}</span>}
      </div>
    );
  }
);

export default DatePicker;
