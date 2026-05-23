import { Badge } from "@/components/ui/badge";
import { StepperIndicator, StepperItem, StepperNav, StepperTitle, StepperTrigger } from "@/components/ui/stepper";

import type { WizardStep } from "./types";

interface StepNavigationProps {
  steps: WizardStep[];
}

export function StepNavigation({ steps }: StepNavigationProps) {
  return (
    <StepperNav className="flex flex-col gap-3 py-2 md:flex-row">
      {steps.map((step, index) => (
        <StepperItem key={step.title} step={index + 1} className="relative flex-1 items-start">
          <StepperTrigger className="flex grow flex-col items-start justify-center gap-2.5" asChild>
            <div className="flex w-full items-start gap-3 rounded-3xl border border-border/80 bg-background p-4 transition hover:border-primary/50">
              <StepperIndicator className="size-10 border-2 data-[state=inactive]:border-border data-[state=completed]:bg-success data-[state=inactive]:bg-transparent data-[state=completed]:text-white data-[state=inactive]:text-muted-foreground">
                {step.icon}
              </StepperIndicator>

              <div className="flex flex-col items-start gap-1">
                <span className="font-semibold text-muted-foreground text-xs uppercase">مرحله {index + 1}</span>
                <StepperTitle className="text-start font-semibold text-base group-data-[state=inactive]/step:text-muted-foreground">
                  {step.title}
                </StepperTitle>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="hidden group-data-[state=inactive]/step:inline-flex">
                    در انتظار
                  </Badge>
                  <Badge variant="link" className="hidden group-data-[state=active]/step:inline-flex">
                    در حال انجام
                  </Badge>
                  <Badge variant="link" className="hidden group-data-[state=completed]/step:inline-flex">
                    تکمیل شده
                  </Badge>
                </div>
              </div>
            </div>
          </StepperTrigger>
        </StepperItem>
      ))}
    </StepperNav>
  );
}
