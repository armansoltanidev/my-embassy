"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckIcon, LoaderCircleIcon } from "lucide-react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Stepper, StepperContent, StepperPanel } from "@/components/ui/stepper";

import { appointmentFormSchema } from "../schema";
import type { AppointmentFormValues } from "../types";
import { AppointmentTypeStep } from "./appointment-step";
import { STEP_FIELD_MAP, WIZARD_STEPS } from "./constants";
import { DynamicFormStep } from "./dynamic-form-step";
import { IdentityStep } from "./identity-step";
import { ReviewStep } from "./review-step";
import { StepNavigation } from "./step-navigation";

const TOTAL_STEPS = WIZARD_STEPS.length;

export function AppointmentForm() {
  const [currentStep, setCurrentStep] = useState(1);

  const form = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentFormSchema),
    mode: "onTouched",
    defaultValues: {
      firstName: "",
      lastName: "",
      gender: "",
      idDocumentType: "",
      email: "",
      phone: "",
      appointmentType: "passport_issuance",
    },
  });

  const handleNext = async () => {
    const fields = STEP_FIELD_MAP[currentStep - 1] as (keyof AppointmentFormValues)[];
    const isValid = await form.trigger(fields);
    if (isValid) setCurrentStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const onSubmit = (data: AppointmentFormValues) => {
    toast.success("فرم با موفقیت ارسال شد.");
    console.log(data);
  };

  const isLastStep = currentStep === TOTAL_STEPS;
  const isFirstStep = currentStep === 1;

  return (
    <div className="flex items-center justify-center py-10">
      <div className="w-full rounded-md border border-border bg-background/95 p-8">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-3 text-center">
          <p className="font-semibold text-sm">فرم درخواست نوبت</p>
          <p className="mx-auto max-w-2xl text-muted-foreground text-sm sm:text-base">
            اطلاعات را در هر مرحله وارد کنید، سپس نوبت را بازبینی و ارسال نمایید.
          </p>
        </div>

        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-8">
            <Stepper
              value={currentStep}
              onValueChange={setCurrentStep}
              indicators={{
                completed: <CheckIcon className="size-3.5" />,
                loading: <LoaderCircleIcon className="size-3.5 animate-spin" />,
              }}
              className="w-full"
            >
              <StepNavigation steps={WIZARD_STEPS} />

              <StepperPanel className="flex flex-1 flex-col gap-8 pt-4 text-sm">
                <StepperContent value={1}>
                  <IdentityStep />
                </StepperContent>
                <StepperContent value={2}>
                  <AppointmentTypeStep />
                </StepperContent>
                <StepperContent value={3}>
                  <DynamicFormStep />
                </StepperContent>
                <StepperContent value={4}>
                  <ReviewStep />
                </StepperContent>
              </StepperPanel>
            </Stepper>

            {/* Footer Navigation */}
            <div className="mt-auto flex flex-col gap-4 border-border/80 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
              <Button type="button" variant="outline" onClick={handleBack} disabled={isFirstStep}>
                مرحله قبل
              </Button>

              {isLastStep ? (
                <Button type="submit" disabled={form.formState.isSubmitting}>
                  ارسال اطلاعات
                </Button>
              ) : (
                <Button type="button" onClick={handleNext}>
                  مرحله بعد
                </Button>
              )}
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
