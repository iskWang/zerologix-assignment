import { useState, useRef, useEffect } from "react";
import cx from "classnames";
import { SelectProps, SelectOption } from "./types";
import InputStyles from "../Input/styles.module.scss";
import styles from "./styles.module.scss";
import nationalityJson from "./nationality.json";

export const Select = (props: SelectProps) => {
  const options =
    props.options ||
    Object.entries(nationalityJson).map(([value, label]) => ({ value, label }));
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const containerRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const filtered = options.filter((option) =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredOptions(filtered);
  }, [searchTerm, props.options]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setIsOpen(true);
  };

  const handleOptionClick = (option: SelectOption) => {
    props.onChange?.(option);
    setSearchTerm(option.label);
    setIsOpen(false);
  };

  return (
    <div
      ref={containerRef}
      className={cx(InputStyles.container, props.className)}
    >
      <legend>{props.name}</legend>
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
                  [styles.selected]: props.value?.value === option.value,
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
      {props.error && <span className={InputStyles.error}>{props.error}</span>}
    </div>
  );
};

export default Select;
