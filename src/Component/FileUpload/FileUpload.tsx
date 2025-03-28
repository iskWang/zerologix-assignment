import { useRef, useState } from "react";
import cx from "classnames";
import { FileUploadProps } from "./types";
import InputStyles from "../Input/styles.module.scss";
import styles from "./styles.module.scss";

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
  const [files, setFiles] = useState<File[]>([]);
  const maxSize = props.maxSize || DEFAULT_MAX_SIZE;

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    const validFiles = selectedFiles.filter((file) => file.size <= maxSize);

    if (validFiles.length === 0) {
      setFiles([]);
      props.onChange?.(null);
      return;
    }

    if (props.multiple) {
      setFiles(validFiles);
      props.onChange?.(validFiles);
    } else {
      setFiles([validFiles[0]]);
      props.onChange?.([validFiles[0]]);
    }
  };

  const handleDelete = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    setFiles(newFiles);
    props.onChange?.(newFiles.length > 0 ? newFiles : null);
  };

  return (
    <div
      className={cx(InputStyles.container, styles.container, props.className)}
    >
      <div className={styles.fileUpload}>
        <input
          ref={inputRef}
          type="file"
          data-testid="file-input"
          accept={ACCEPTED_TYPES}
          onChange={handleChange}
          className={styles.input}
          multiple={props.multiple}
        />
        <div className={styles.content}>
          <button type="button" onClick={handleClick} className={styles.button}>
            Choose {props.multiple ? "Files" : "File"}
          </button>
          <div className={styles.info}>
            {files.length > 0 ? (
              <div className={styles.fileList}>
                {files.map((file, index) => (
                  <div key={`${file.name}-${index}`} className={styles.fileInfo}>
                    <p className={styles.fileName}>{file.name}</p>
                    <button
                      type="button"
                      onClick={() => handleDelete(index)}
                      data-testid={`delete-button-${index}`}
                      className={styles.deleteButton}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <>
                <p>Supported formats: JPG, PNG, PDF</p>
                <p>Maximum file size: {formatFileSize(maxSize)}</p>
                {props.multiple && <p>You can select multiple files</p>}
              </>
            )}
          </div>
        </div>
      </div>
      <legend>{props.label}</legend>
      {props.error && <span className={InputStyles.error}>{props.error}</span>}
    </div>
  );
};

export default FileUpload;
