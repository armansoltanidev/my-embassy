export type Gender = "male" | "female";
export type IdDocumentType = "passport" | "amayesh_card" | "residence_booklet";

export type AppointmentType =
  | "passport_issuance"
  | "hajj_registration"
  | "passport_conversion"
  | "marriage_document"
  | "identity_verification"
  | "students_visa";

export type FamilyRelation = "father" | "mother" | "brother" | "uncle" | "aunt" | "cousin_daughter" | "cousin_son";

export type universityType = "azad" | "state" | "payame_noor" | "applied_science" | "international" | "other";

export type educationalStatus = "student" | "graduate" | "dropped_out" | "other";

export type universityDegree = "associate" | "bachelor" | "master" | "phd" | "other";

export interface AppointmentFormValues {
  firstName: string;
  lastName: string;
  fatherName: string;
  grandFatherName: string;
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
  universityName: string;
  universityType: universityType;
  studentIdNumber: string;
  educationalStatus: educationalStatus;
  fieldOfStudy: string;
  universityDegree: universityDegree;
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
