import React from "react";
import cx from "classnames";
import { InputTypes } from "./types";
import styles from "./styles.module.scss";

export const Input = React.forwardRef<HTMLInputElement, InputTypes>(
  ({ className, error, name, ...rest }, ref) => {
    return (
      <div className={cx(styles.container, className)}>
        <input ref={ref} name={name} {...rest} />
        <legend>{name}</legend>
        {error && <span className={styles.error}>{error}</span>}
      </div>
    );
  }
);

export default Input;
