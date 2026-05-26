import {
  BookUser,
  BookUserIcon,
  CheckIcon,
  CreditCardIcon,
  FilePen,
  IdCard,
  LockIcon,
  PlaneTakeoff,
} from "lucide-react";

import type { AppointmentFormValues } from "../schema";
import type { AppointmentOption, WizardStep } from "../types";

export const WIZARD_STEPS: WizardStep[] = [
  { title: "اطلاعات هویتی", icon: <BookUserIcon className="size-4" /> },
  { title: "انتخاب نوع نوبت", icon: <CreditCardIcon className="size-4" /> },
  { title: "مشخصات تماس", icon: <LockIcon className="size-4" /> },
  { title: "بازبینی", icon: <CheckIcon className="size-4" /> },
];

export const APPOINTMENT_OPTIONS: AppointmentOption[] = [
  {
    id: 1,
    title: "درخواست صدور یا تمدید پاسپورت",
    description: "درخواست صدور پاسپورت برای افراد تجاری | سیاسی | معمولی",
    value: "passport_issuance",
    icon: <FilePen aria-hidden className="size-4" />,
    disabled: true,
  },
  {
    id: 2,
    title: "درخواست صدور تثبیت هویت",
    description: "صدور تثبیت هویت جهت ارائه به ارگان‌ها و مراجع قضایی یا انتظامی",
    value: "identity_verification",
    icon: <IdCard aria-hidden className="size-4" />,
    disabled: false,
  },
  {
    id: 3,
    title: "درخواست عقدنامه (نکاح خط)",
    description: "عقد نامه رسمی سفارت جهت ارائه به مراجع",
    value: "marriage_document",
    icon: <CreditCardIcon aria-hidden className="size-4" />,
    disabled: true,
  },
  {
    id: 4,
    title: "طرح تبدیل پاسپورت دست‌نویس به الکترونیکی",
    description: "تبدیل پاسپورت‌های دست‌نویس به پاسپورت‌های الکترونیکی",
    value: "passport_conversion",
    icon: <BookUser aria-hidden className="size-4" />,
    disabled: true,
  },
  {
    id: 5,
    title: "ثبت‌نام حج",
    description: "ثبت‌نام انجام فریضه دینی",
    value: "hajj_registration",
    icon: <PlaneTakeoff aria-hidden className="size-4" />,
    disabled: true,
  },
  {
    id: 6,
    title: "ثبت‌نام سند رفت و برگشت",
    description: "سند رفت و برگشت ویژه محصلان و دانشجویان مقیم ایران",
    value: "students_visa",
    icon: <PlaneTakeoff aria-hidden className="size-4" />,
    disabled: false,
  },
];

export const STEP_FIELD_MAP: Array<Array<keyof AppointmentFormValues>> = [
  ["firstName", "lastName", "gender", "idDocumentType"],
  ["appointmentType"],
  [],
  [],
];

export const APPOINTMENT_TYPE_LABELS: Record<string, string> = {
  passport_issuance: "درخواست صدور یا تمدید پاسپورت",
  identity_verification: "درخواست صدور تثبیت هویت",
  marriage_document: "درخواست عقدنامه (نکاح خط)",
  passport_conversion: "طرح تبدیل پاسپورت دست‌نویس به الکترونیکی",
  hajj_registration: "ثبت‌نام حج",
  students_visa: "سند رفت و برگشت دانشجویان",
};

export const FAMILY_RELATION_LABELS: Record<string, string> = {
  father: "پدر",
  mother: "مادر",
  brother: "برادر",
  uncle: "عمو",
  aunt: "عمه",
  cousin_daughter: "دختر عمو/عمه",
  cousin_son: "پسر عمو/عمه",
};

export const GENDER_LABELS: Record<string, string> = {
  male: "مرد",
  female: "زن",
};

export const ID_DOCUMENT_LABELS: Record<string, string> = {
  passport: "پاسپورت اقامت",
  amayesh_card: "کارت آمایش",
  residence_booklet: "دفترچه اقامت",
  tazkira: "تذکره",
};

export const UNIVERSITY_TYPE_LABELS: Record<string, string> = {
  azad: "آزاد",
  state: "دولتی",
  payame_noor: "پیام نور",
  applied_science: "علمی کاربردی",
  international: "بین‌المللی",
  other: "سایر",
};

export const EDUCATIONAL_STATUS_LABELS: Record<string, string> = {
  student: "دانشجو",
  graduate: "فارغ‌التحصیل",
  dropped_out: "انصرافی",
  other: "سایر",
};

export const UNIVERSITY_DEGREE_LABELS: Record<string, string> = {
  associate: "کاردانی",
  bachelor: "کارشناسی",
  master: "کارشناسی ارشد",
  phd: "دکتری",
  other: "سایر",
};

// Mapping of appointment type to additional fields required per step.
// This allows dynamic rendering and validation based on the selected appointment type.
// Each entry is an array indexed by step index (0-based), containing arrays of `AppointmentFormValues` keys that are relevant for that step and appointment type.

// Per-appointment-type additional fields per step.
// Each entry is an array indexed by step index (0-based), with arrays of `AppointmentFormValues` keys.
export const APPOINTMENT_TYPE_STEP_FIELDS: Record<string, Array<Array<keyof AppointmentFormValues>>> = {
  passport_issuance: [[], [], ["idDocumentNumber", "phoneNumber", "fatherName", "grandFatherName"], []],
  identity_verification: [
    [],
    [],
    [
      "idDocumentNumber",
      "phoneNumber",
      "idDocumentType",
      "idDocumentNumber",
      "relationDocumentNumber",
      "relationFirstNameLastName",
      "relationPhoneNumber",
      "familyRelation",
      "fatherName",
      "grandFatherName",
    ],
    [],
  ],
  students_visa: [
    [],
    [],
    [
      "idDocumentNumber",
      "phoneNumber",
      "idDocumentType",
      "idDocumentNumber",
      "relationDocumentNumber",
      "relationFirstNameLastName",
      "relationPhoneNumber",
      "familyRelation",
      "fatherName",
      "grandFatherName",
      "universityName",
      "universityDegree",
      "fieldOfStudy",
      "educationalStatus",
      "studentIdNumber",
      "universityType",
    ],
    [],
  ],
};

// Helper to get the fields to render/validate for a given step and appointment type.
export function getStepFields(
  appointmentType: string | undefined,
  stepIndex: number,
): Array<keyof AppointmentFormValues> {
  const base = STEP_FIELD_MAP[stepIndex] ?? [];
  const typeMap = appointmentType ? APPOINTMENT_TYPE_STEP_FIELDS[appointmentType] : undefined;
  const extras = typeMap?.[stepIndex] ?? [];
  // Merge keeping order and uniqueness.
  const merged = [...base, ...extras];
  return Array.from(new Set(merged));
}
