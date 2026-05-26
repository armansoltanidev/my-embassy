import { z } from "zod";

const GENDER_VALUES = ["male", "female"] as const;

const ID_DOCUMENT_VALUES = ["passport", "amayesh_card", "residence_booklet"] as const;

const APPOINTMENT_TYPE_VALUES = [
  "passport_issuance",
  "hajj_registration",
  "passport_conversion",
  "marriage_document",
  "identity_verification",
  "students_visa",
] as const;

const FAMILY_RELATION_VALUES = [
  "father",
  "mother",
  "brother",
  "uncle",
  "aunt",
  "cousin_daughter",
  "cousin_son",
] as const;

const UNIVERSITY_TYPE_VALUES = ["azad", "state", "payame_noor", "applied_science", "international", "other"] as const;

const EDUCATIONAL_STATUS_VALUES = ["student", "graduate", "dropped_out", "other"] as const;

const UNIVERSITY_DEGREE_VALUES = ["associate", "bachelor", "master", "phd", "other"] as const;

export const appointmentFormSchema = z.object({
  firstName: z.string().min(1, "نام متقاضی را وارد کنید."),
  lastName: z.string().min(1, "نام خانوادگی متقاضی را وارد کنید."),
  fatherName: z.string().min(1, "نام پدر خود را وارد کنید"),
  grandFatherName: z.string().min(1, "نام پدربزرگ خود را وارد کنید"),
  gender: z
    .union([z.enum(GENDER_VALUES), z.literal("")])
    .refine((v): v is (typeof GENDER_VALUES)[number] => GENDER_VALUES.includes(v as never), {
      message: "جنسیت را انتخاب کنید.",
    }),
  idDocumentType: z
    .union([z.enum(ID_DOCUMENT_VALUES), z.literal("")])
    .refine((v): v is (typeof ID_DOCUMENT_VALUES)[number] => ID_DOCUMENT_VALUES.includes(v as never), {
      message: "نوع مدرک شناسایی را انتخاب کنید.",
    }),
  email: z.email("ایمیل معتبر وارد کنید."),
  idDocumentNumber: z.string().min(10, "لطفا حداقل ده رقم وارد نمایید"),
  phoneNumber: z.string().min(10, "لطفا حداقل ده رقم وارد نمایید"),
  relationFirstNameLastName: z.string().min(1, "الزامی است"),
  relationDocumentNumber: z.string().min(8, "لطفا حداقل هشت رقم وارد نمایید"),
  relationPhoneNumber: z.string().min(10, "لطفا حداقل ده رقم وارد نمایید"),
  appointmentType: z.enum(APPOINTMENT_TYPE_VALUES),
  familyRelation: z.enum(FAMILY_RELATION_VALUES),
  universityName: z.string().min(1, "لطفا نام دانشگاه را وارد نمایید"),
  universityType: z.enum(UNIVERSITY_TYPE_VALUES),
  studentIdNumber: z.string().min(1, "لطفا نام دانشگاه را وارد نمایید"),
  educationalStatus: z.enum(EDUCATIONAL_STATUS_VALUES),
  fieldOfStudy: z.string().min(1, "لطفا نام دانشگاه را وارد نمایید"),
  universityDegree: z.enum(UNIVERSITY_DEGREE_VALUES),
});

export type AppointmentFormValues = z.infer<typeof appointmentFormSchema>;
