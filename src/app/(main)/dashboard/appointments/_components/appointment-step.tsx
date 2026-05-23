import { Controller, useFormContext } from "react-hook-form";

import { Field, FieldError, FieldGroup, FieldLabel, FieldTitle } from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import type { AppointmentFormValues } from "../schema";
import { APPOINTMENT_OPTIONS } from "./constants";

export function AppointmentTypeStep() {
  const { control } = useFormContext<AppointmentFormValues>();

  return (
    <div className="space-y-6">
      <FieldGroup>
        <Controller
          name="appointmentType"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>نوع نوبت</FieldLabel>
              <RadioGroup value={field.value} onValueChange={field.onChange} className="grid w-full grid-cols-2 gap-4">
                {APPOINTMENT_OPTIONS.map((option) => (
                  <FieldLabel key={option.id} htmlFor={option.value} className="relative p-0!">
                    <Field orientation="horizontal">
                      <div className="absolute top-3 left-3">
                        <RadioGroupItem disabled={option.disabled} value={option.value} id={option.value} />
                      </div>
                      <FieldTitle className="flex flex-col items-start">
                        <div className="flex shrink-0 items-center justify-center rounded-2xl border border-border bg-background p-2 shadow-black/5 shadow-xs">
                          {option.icon}
                        </div>
                        <div className="flex flex-col items-start gap-0.5">
                          <span className="font-semibold text-sm">
                            {option.title} {option.disabled && <span className="text-destructive">(غیر فعال)</span>}
                          </span>
                          <span className="text-muted-foreground text-xs">{option.description}</span>
                        </div>
                      </FieldTitle>
                    </Field>
                  </FieldLabel>
                ))}
              </RadioGroup>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
    </div>
  );
}
