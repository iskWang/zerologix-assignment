import { createContext, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { KYCFormContainerProps, KYCFormData } from "./types";
import { basicInfoSchema, documentsSchema } from "./schema";
import { z } from "zod";

type BasicInfoForm = z.infer<typeof basicInfoSchema>;
type DocumentsForm = z.infer<typeof documentsSchema>;

type KYCFormContextType = {
  formData: KYCFormData;
  setFormData: (data: Partial<KYCFormData>) => void;
  basicInfoForm: ReturnType<typeof useForm<BasicInfoForm>>;
  documentsForm: ReturnType<typeof useForm<DocumentsForm>>;
};

const KYCFormContext = createContext<KYCFormContextType | null>(null);

export const useKYCFormContext = () => {
  const context = useContext(KYCFormContext);
  if (!context) {
    throw new Error("useKYCFormContext must be used within KYCFormContainer");
  }
  return context;
};

export const KYCFormContainer = ({ children }: KYCFormContainerProps) => {
  const [formData, setFormData] = useState<KYCFormData>({
    basicInfo: {
      name: "",
      email: "",
      phone: "",
      address: "",
      nationality: "",
      gender: "",
      dateOfBirth: new Date(),
    },
    documents: {
      idCardFront: null,
      idCardBack: null,
      additionalDoc: null,
    },
  });

  const basicInfoForm = useForm<BasicInfoForm>({
    resolver: zodResolver(basicInfoSchema),
    defaultValues: formData.basicInfo,
  });

  const documentsForm = useForm<DocumentsForm>({
    resolver: zodResolver(documentsSchema),
    defaultValues: formData.documents,
  });

  const handleFormData = (data: Partial<KYCFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  return (
    <KYCFormContext.Provider
      value={{
        formData,
        setFormData: handleFormData,
        basicInfoForm,
        documentsForm,
      }}
    >
      {children}
    </KYCFormContext.Provider>
  );
};

export default KYCFormContainer;
