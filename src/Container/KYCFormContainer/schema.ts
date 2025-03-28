import { z } from "zod";
import { differenceInYears } from "date-fns";

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

export const documentsSchema = z.object({
  idCardFront: z.instanceof(File).nullable(),
  idCardBack: z.instanceof(File).nullable(),
  additionalDoc: z.instanceof(File).nullable(),
});

export const kycFormSchema = z.object({
  basicInfo: basicInfoSchema,
  documents: documentsSchema,
});

// Export types
export type BasicInfo = z.infer<typeof basicInfoSchema>;
export type Documents = z.infer<typeof documentsSchema>;
export type KYCFormData = z.infer<typeof kycFormSchema>;
