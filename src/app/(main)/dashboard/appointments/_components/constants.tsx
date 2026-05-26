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
];

export const STEP_FIELD_MAP: Array<Array<keyof AppointmentFormValues>> = [
  ["firstName", "lastName", "gender", "idDocumentType"],
  ["appointmentType"],
  [
    "idDocumentNumber",
    "phoneNumber",
    "idDocumentType",
    "idDocumentNumber",
    "relationDocumentNumber",
    "relationFirstNameLastName",
    "relationPhoneNumber",
    "familyRelation",
  ],
  [],
];

export const APPOINTMENT_TYPE_LABELS: Record<string, string> = {
  passport_issuance: "درخواست صدور یا تمدید پاسپورت",
  identity_verification: "درخواست صدور تثبیت هویت",
  marriage_document: "درخواست عقدنامه (نکاح خط)",
  passport_conversion: "طرح تبدیل پاسپورت دست‌نویس به الکترونیکی",
  hajj_registration: "ثبت‌نام حج",
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
