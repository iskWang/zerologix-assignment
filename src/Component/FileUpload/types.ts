export type FileUploadProps = {
  name?: string;
  maxSize?: number; // 以 bytes 為單位，預設 5MB
  error?: string;
  onChange?: (file: File | null) => void;
  className?: string;
};
