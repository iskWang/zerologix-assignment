import cx from "classnames";
import { InputTypes } from "./types";
import styles from "./styles.module.scss";

export const Input = ({ className, ...props }: InputTypes) => {
  return (
    <div className={cx(styles.container, className)}>
      <input {...props} />
      <legend>{props.name}</legend>
    </div>
  );
};

export default Input;
