import { useFormContext } from "react-hook-form";

import type { AppointmentFormValues } from "../schema";
import { IdentityVerificationForm } from "./forms/identity_verification";
import { MarriageDocumentForm } from "./forms/marriage_document";
import { RequestPassportForm } from "./forms/request-passport";

const FORM_MAP: Record<AppointmentFormValues["appointmentType"], React.ComponentType<Record<string, never>>> = {
  passport_issuance: RequestPassportForm,
  passport_conversion: RequestPassportForm,
  hajj_registration: RequestPassportForm,
  identity_verification: IdentityVerificationForm,
  marriage_document: MarriageDocumentForm,
};

export function DynamicFormStep() {
  const { watch } = useFormContext<AppointmentFormValues>();
  const appointmentType = watch("appointmentType");

  const FormComponent = FORM_MAP[appointmentType];

  if (!FormComponent) {
    return <div className="text-muted-foreground">فرم انتخاب شده موجود نیست.</div>;
  }

  return <FormComponent />;
}
