export type Gender = "male" | "female";
export type IdDocumentType = "passport" | "amayesh_card" | "residence_booklet";
export type AppointmentType =
  | "passport_issuance"
  | "hajj_registration"
  | "passport_conversion"
  | "marriage_document"
  | "identity_verification";

export interface AppointmentFormValues {
  firstName: string;
  lastName: string;
  gender: Gender | "";
  idDocumentType: IdDocumentType | "";
  email: string;
  phone: string;
  appointmentType: AppointmentType;
}

export interface WizardStep {
  title: string;
  icon: React.ReactNode;
}

export interface AppointmentOption {
  id: number;
  title: string;
  description: string;
  value: AppointmentType;
  icon: React.ReactNode;
  disabled: boolean;
}
