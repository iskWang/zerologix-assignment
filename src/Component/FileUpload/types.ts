type BaseFileUploadProps = {
  label?: string;
  maxSize?: number; // 以 bytes 為單位，預設 5MB
  error?: string;
  className?: string;
  multiple?: boolean;
  value: File | File[] | null;
  onChange?: (file: File | File[] | null) => void;
};

export type FileUploadProps = BaseFileUploadProps;
