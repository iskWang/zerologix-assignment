import { useState, useRef, useEffect } from "react";
import cx from "classnames";
import { SelectProps, SelectOption } from "./types";
import InputStyles from "../Input/styles.module.scss";
import styles from "./styles.module.scss";

export const Select = (props: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const searchTerm = props.value
    ? props.options?.find((opt) => opt.value === props.value)?.label ||
      props.value
    : userInput;

  const filteredOptions =
    props.options?.filter((option) =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange?.(e.target.value);
    setUserInput(e.target.value);
    setIsOpen(true);
  };

  const handleOptionClick = (option: SelectOption) => {
    props.onChange?.(option.value);
    setUserInput(option.label);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={containerRef}
      className={cx(InputStyles.container, props.className)}
    >
      <div className={styles.inputWrapper}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          placeholder={props.placeholder || "Select an option"}
          className={styles.input}
        />
        <span
          className={cx(styles.arrow, { [styles.open]: isOpen })}
          onClick={() => setIsOpen(!isOpen)}
        >
          ▼
        </span>
      </div>
      {isOpen && (
        <div className={styles.dropdown}>
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <div
                key={option.value}
                className={cx(styles.option, {
                  [styles.selected]: props.value === option.value,
                })}
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </div>
            ))
          ) : (
            <div className={styles.noResults}>No options found</div>
          )}
        </div>
      )}
      <legend>{props.name}</legend>
      {props.error && <span className={InputStyles.error}>{props.error}</span>}
    </div>
  );
};

export default Select;
