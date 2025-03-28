import { z } from "zod";
import { differenceInYears } from "date-fns";

const FiveMB = 5 * 1024 * 1024; // 5MB
const TenMB = 10 * 1024 * 1024; // 10MB

export const basicInfoSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number"),
  address: z.string().min(1, "Address is required"),
  nationality: z.string().min(1, "Nationality is required"),
  gender: z.string().optional(),
  dateOfBirth: z.date().refine(
    (date) => {
      const age = differenceInYears(new Date(), date);
      return age >= 18 && age <= 85;
    },
    { message: "Age must be between 18 and 85 years" }
  ),
});

const createFileSchema = (
  fieldName: string,
  maxSize: number,
  required: boolean = false,
  multiple: boolean = false
) => {
  const fileSchema = z.instanceof(File).refine((file) => file.size <= maxSize, {
    message: "Max size exceeded",
  });

  if (multiple) {
    const arraySchema = z
      .array(fileSchema)
      .refine(
        (files) => {
          const fileSize =
            files?.reduce((total, file) => total + file.size, 0) || 0;

          return fileSize <= maxSize;
        },
        {
          message: "Max size exceeded",
        }
      )
      .nullable();

    return required
      ? arraySchema.refine((files) => files && files.length > 0, {
          message: `${fieldName} is required`,
        })
      : arraySchema;
  }

  const singleSchema = fileSchema.nullable();
  return required
    ? singleSchema.refine((file) => file !== null, {
        message: `${fieldName} is required`,
      })
    : singleSchema;
};

export const documentsSchema = z.object({
  idCardFront: createFileSchema("ID Card Front", FiveMB, true),
  idCardBack: createFileSchema("ID Card Back", FiveMB, true),
  additionalDoc: createFileSchema("Additional Documents", TenMB, false, true),
});

export const kycFormSchema = z.object({
  basicInfo: basicInfoSchema,
  documents: documentsSchema,
});

// Export types
export type BasicInfo = z.infer<typeof basicInfoSchema>;
export type Documents = z.infer<typeof documentsSchema>;
export type KYCFormData = {
  basicInfo: BasicInfo;
  documents: Documents;
};
