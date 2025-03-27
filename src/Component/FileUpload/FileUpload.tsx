import { useRef, useState } from "react";
import cx from "classnames";
import { FileUploadProps } from "./types";
import styles from "./styles.module.scss";
import InputStyles from "../Input/styles.module.scss";

const DEFAULT_MAX_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_TYPES = ".jpg,.png,.pdf";
const formatFileSize = (bytes: number) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
};

export const FileUpload = (props: FileUploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>("");
  const maxSize = props.maxSize || DEFAULT_MAX_SIZE;

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setFileName("");
      return;
    }

    if (file.size > maxSize) {
      props.onChange?.(null);
      setFileName("");
      return;
    }

    setFileName(file.name);
    props.onChange?.(file);
  };

  const handleDelete = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    setFileName("");
    props.onChange?.(null);
  };

  return (
    <div className={cx(InputStyles.container, props.className)}>
      <div className={styles.fileUpload}>
        <input
          ref={inputRef}
          type="file"
          accept={ACCEPTED_TYPES}
          onChange={handleChange}
          className={styles.input}
        />
        <div className={styles.content}>
          <button type="button" onClick={handleClick} className={styles.button}>
            Choose File
          </button>
          <div className={styles.info}>
            {fileName ? (
              <div className={styles.fileInfo}>
                <p className={styles.fileName}>{fileName}</p>
                <button
                  type="button"
                  onClick={handleDelete}
                  className={styles.deleteButton}
                >
                  ×
                </button>
              </div>
            ) : (
              <>
                <p>Supported formats: JPG, PNG, PDF</p>
                <p>Maximum file size: {formatFileSize(maxSize)}</p>
              </>
            )}
          </div>
        </div>
      </div>
      <legend>{props.name}</legend>
      {props.error && <span className={InputStyles.error}>{props.error}</span>}
    </div>
  );
};

export default FileUpload;
