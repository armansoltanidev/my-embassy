import { Controller, useFormContext } from "react-hook-form";

import AlertList from "@/components/ui/alert-list";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

import { identityVerificationAlerts } from "../../data-alert";
import type { AppointmentFormValues } from "../../schema";
import { FAMILY_RELATION_LABELS, GENDER_LABELS, ID_DOCUMENT_LABELS } from "../constants";

export function IdentityVerificationForm() {
  const { control } = useFormContext<AppointmentFormValues>();

  return (
    <div className="space-y-6">
      <FieldGroup className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Controller
          name="firstName"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="first_name">نام</FieldLabel>
              <Input
                {...field}
                id="first_name"
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
              <FieldLabel htmlFor="last_name">نام خانوادگی</FieldLabel>
              <Input
                {...field}
                id="last_name"
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
      <FieldGroup className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Controller
          name="idDocumentNumber"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="id_document_number">شماره مدرک شناسایی</FieldLabel>
              <Input
                {...field}
                id="id_document_number"
                aria-invalid={fieldState.invalid}
                placeholder="شماره مدرک"
                autoComplete="off"
              />
              <FieldDescription>لطفاً شماره مدرک شناسایی خود را بدون فاصله وارد نمایید.</FieldDescription>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="phoneNumber"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="phone">شماره تماس</FieldLabel>
              <Input
                {...field}
                id="phone"
                aria-invalid={fieldState.invalid}
                placeholder="شماره تماس"
                autoComplete="off"
              />
              <FieldDescription>شماره تماس در دسترس باشد تا در صورت نیاز بتوان با شما تماس گرفت.</FieldDescription>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
      <Separator />
      <AlertList className="grid-cols-1" alerts={identityVerificationAlerts} />
      <Separator />
      <p className="text-lg">اطلاعات اقارب شما</p>
      <FieldGroup className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Controller
          name="relationFirstNameLastName"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="rel_first_name_last_name">نام و نام خانوادگی </FieldLabel>
              <Input
                {...field}
                id="rel_first_name_last_name"
                aria-invalid={fieldState.invalid}
                placeholder="نام و نام خانوادگی"
                autoComplete="off"
              />
              <FieldDescription>لطفاً شماره مدرک شناسایی خود را بدون فاصله وارد نمایید.</FieldDescription>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="familyRelation"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="rel_type">نسبت با شما</FieldLabel>
              <Select name={field.name} value={field.value} onValueChange={field.onChange}>
                <SelectTrigger id="rel_type" aria-invalid={fieldState.invalid}>
                  <SelectValue>{FAMILY_RELATION_LABELS[field.value] ?? "انتخاب کنید"}</SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(FAMILY_RELATION_LABELS).map(([value, label]) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FieldDescription>لطفاً نسبت خود را با این فرد مشخص نمایید.</FieldDescription>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="relationDocumentNumber"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="rel_document_id_number">شماره مدرک شناسایی</FieldLabel>
              <Input
                {...field}
                id="rel_document_id_number"
                aria-invalid={fieldState.invalid}
                placeholder="شماره مدرک"
                autoComplete="off"
              />
              <FieldDescription>لطفاً شماره مدرک شناسایی این فرد را بدون فاصله وارد نمایید.</FieldDescription>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="relationPhoneNumber"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="rel_phone_number">شماره تماس</FieldLabel>
              <Input
                {...field}
                id="rel_phone_number"
                aria-invalid={fieldState.invalid}
                placeholder="شماره تماس"
                autoComplete="off"
              />
              <FieldDescription>شماره تماس در دسترس باشد تا در صورت نیاز بتوان تماس گرفت.</FieldDescription>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
    </div>
  );
}
