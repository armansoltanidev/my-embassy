export type Gender = "male" | "female";
export type IdDocumentType = "passport" | "amayesh_card" | "residence_booklet";

export type AppointmentType =
  | "passport_issuance"
  | "hajj_registration"
  | "passport_conversion"
  | "marriage_document"
  | "identity_verification";

export type FamilyRelation = "father" | "mother" | "brother" | "uncle" | "aunt" | "cousin_daughter" | "cousin_son";

export interface AppointmentFormValues {
  firstName: string;
  lastName: string;
  gender: Gender | "";
  idDocumentType: IdDocumentType | "";
  idDocumentNumber: string;
  phoneNumber: string;
  relationFirstNameLastName: string;
  relationDocumentNumber: string;
  relationPhoneNumber: string;
  email: string;
  appointmentType: AppointmentType;
  familyRelation: FamilyRelation;
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
