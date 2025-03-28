export type FileUploadProps = {
  label?: string;
  maxSize?: number; // 以 bytes 為單位，預設 5MB
  error?: string;
  multiple?: boolean;
  onChange?: (files: File[] | null) => void;
  className?: string;
};
