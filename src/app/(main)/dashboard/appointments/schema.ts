import { z } from "zod";

const GENDER_VALUES = ["male", "female"] as const;
const ID_DOCUMENT_VALUES = ["passport", "amayesh_card", "residence_booklet"] as const;
const APPOINTMENT_TYPE_VALUES = [
  "passport_issuance",
  "hajj_registration",
  "passport_conversion",
  "marriage_document",
  "identity_verification",
] as const;

export const appointmentFormSchema = z.object({
  firstName: z.string().min(1, "نام متقاضی را وارد کنید."),
  lastName: z.string().min(1, "نام خانوادگی متقاضی را وارد کنید."),
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
  email: z.string().email("ایمیل معتبر وارد کنید."),
  phone: z
    .string()
    .min(9, "شماره تلفن را وارد کنید.")
    .regex(/^[0-9+\s-]+$/, "شماره تلفن معتبر نیست."),
  appointmentType: z.enum(APPOINTMENT_TYPE_VALUES),
});

export type AppointmentFormValues = z.infer<typeof appointmentFormSchema>;
