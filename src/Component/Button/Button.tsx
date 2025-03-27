import { Link } from "react-router-dom";
import cx from "classnames";
import { ButtonProps } from "./types";
import styles from "./Button.module.scss";

export const Button = ({
  variant = "primary",
  href,
  children,
  ...props
}: ButtonProps) => {
  const buttonClassName = cx(styles.base, styles[variant], props.className);

  if (href) {
    return (
      <Link to={href} className={buttonClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClassName} {...props}>
      {children}
    </button>
  );
};
