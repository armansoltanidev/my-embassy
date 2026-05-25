import { useFormContext } from "react-hook-form";

import type { AppointmentFormValues } from "../schema";
import { APPOINTMENT_TYPE_LABELS, GENDER_LABELS, ID_DOCUMENT_LABELS } from "./constants";

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
    { label: "ایمیل", value: values.email },
    { label: "شماره تلفن", value: values.phone },
  ];

  return (
    <div className="rounded-3xl border border-border bg-muted/10 p-6 text-muted-foreground text-sm">
      <h2 className="mb-4 text-lg font-semibold text-foreground">بازبینی اطلاعات</h2>
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
