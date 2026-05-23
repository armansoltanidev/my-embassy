import { Controller, useFormContext } from "react-hook-form";

import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import type { AppointmentFormValues } from "../schema";
import { GENDER_LABELS, ID_DOCUMENT_LABELS } from "./constants";

export function IdentityStep() {
  const { control } = useFormContext<AppointmentFormValues>();

  return (
    <div className="space-y-6">
      <FieldGroup className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Controller
          name="firstName"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="first-name">نام متقاضی</FieldLabel>
              <Input
                {...field}
                id="first-name"
                aria-invalid={fieldState.invalid}
                placeholder="آرمان"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="lastName"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="last-name">نام خانوادگی متقاضی</FieldLabel>
              <Input
                {...field}
                id="last-name"
                aria-invalid={fieldState.invalid}
                placeholder="سلطانی"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>

      <FieldGroup className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Controller
          name="gender"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="gender">جنسیت</FieldLabel>
              <Select name={field.name} value={field.value} onValueChange={field.onChange}>
                <SelectTrigger id="gender" aria-invalid={fieldState.invalid}>
                  <SelectValue>{GENDER_LABELS[field.value] ?? "انتخاب کنید"}</SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(GENDER_LABELS).map(([value, label]) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FieldDescription>
                با توجه به اینکه برخی نوبت‌ها مختص یک جنسیت هستند، لطفاً جنسیت خود را انتخاب نمایید.
              </FieldDescription>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="idDocumentType"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="id-document-type">نوع مدرک شناسایی</FieldLabel>
              <Select name={field.name} value={field.value} onValueChange={field.onChange}>
                <SelectTrigger id="id-document-type" aria-invalid={fieldState.invalid}>
                  <SelectValue>{ID_DOCUMENT_LABELS[field.value] ?? "انتخاب کنید"}</SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(ID_DOCUMENT_LABELS).map(([value, label]) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FieldDescription>لطفاً نوع مدرک شناسایی خود را انتخاب نمایید.</FieldDescription>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
    </div>
  );
}
