import { useFormContext } from "react-hook-form";

import type { AppointmentFormValues } from "../schema";
import {
  APPOINTMENT_TYPE_LABELS,
  EDUCATIONAL_STATUS_LABELS,
  FAMILY_RELATION_LABELS,
  GENDER_LABELS,
  ID_DOCUMENT_LABELS,
  UNIVERSITY_DEGREE_LABELS,
  UNIVERSITY_TYPE_LABELS,
} from "./constants";

interface ReviewField {
  label: string;
  value: string;
}

export function ReviewStep() {
  const { watch } = useFormContext<AppointmentFormValues>();
  const values = watch();

  const reviewFields: ReviewField[] = [
    { label: "نام", value: values.firstName },
    { label: "نام خانوادگی", value: values.lastName },
    {
      label: "نام پدر",
      value: values.fatherName,
    },
    {
      label: "نام پدر بزرگ(پدر کلان)",
      value: values.grandFatherName,
    },
    {
      label: "جنسیت",
      value: GENDER_LABELS[values.gender] ?? "-",
    },
    {
      label: "نوع مدرک",
      value: ID_DOCUMENT_LABELS[values.idDocumentType] ?? "-",
    },
    {
      label: "نوع نوبت",
      value: APPOINTMENT_TYPE_LABELS[values.appointmentType] ?? "-",
    },
    { label: "شماره تلفن", value: values.phoneNumber },
    { label: "شماره مدرک شناسایی", value: values.idDocumentNumber },
    {
      label: "نام و نام خانوادگی فرد مرتبط",
      value: values.relationFirstNameLastName,
    },
    {
      label: "نسبت شما با فرد مرتبط",
      value: FAMILY_RELATION_LABELS[values.familyRelation] ?? "-",
    },
    { label: "شماره تلفن فرد مرتبط", value: values.relationPhoneNumber },
    { label: "شماره مدرک فرد مرتبط", value: values.relationDocumentNumber },

    { label: "ایمیل", value: values.email },

    { label: "نام دانشگاه", value: values.universityName },

    {
      label: "نوع دانشگاه",
      value: values.universityType ? UNIVERSITY_TYPE_LABELS[values.universityType] : "-",
    },

    { label: "شماره دانشجویی", value: values.studentIdNumber },

    {
      label: "وضعیت تحصیلی",
      value: values.educationalStatus ? EDUCATIONAL_STATUS_LABELS[values.educationalStatus] : "-",
    },

    { label: "رشته تحصیلی", value: values.fieldOfStudy },

    {
      label: "مدرک دانشگاهی",
      value: values.universityDegree ? UNIVERSITY_DEGREE_LABELS[values.universityDegree] : "-",
    },
  ];

  return (
    <div className="rounded-3xl border border-border bg-muted/10 p-6 text-muted-foreground text-sm">
      <h2 className="mb-4 font-semibold text-foreground text-lg">بازبینی اطلاعات</h2>
      <dl className="grid gap-4 sm:grid-cols-2">
        {reviewFields.map(({ label, value }) => (
          <div key={label}>
            <dt className="text-muted-foreground text-xs uppercase">{label}</dt>
            <dd className="mt-1 font-medium text-foreground">{value || "-"}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
