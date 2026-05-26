import {
  AlertTriangleIcon,
  CheckCircle2Icon,
  InfoIcon,
  XCircleIcon,
  Earth,
} from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export type AlertType =
  | "default"
  | "warning"
  | "info"
  | "success"
  | "danger"
  | "other";

export type AlertListItem = {
  id: string;
  type?: AlertType;
  title: string;
  description: string;
  tags: string[];
};

export type AlertListProps = {
  alerts: AlertListItem[];
  className?: string;
};

const alertListItemVariants = cva(
  "rounded-lg border px-2.5 py-2 text-right text-sm",
  {
    variants: {
      variant: {
        default:
          "border-slate-200 bg-slate-50 text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
        warning:
          "border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-50",
        info: "border-sky-200 bg-sky-50 text-sky-900 dark:border-sky-900 dark:bg-sky-950 dark:text-sky-50",
        success:
          "border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-50",
        danger:
          "border-rose-200 bg-rose-50 text-rose-900 dark:border-rose-900 dark:bg-rose-950 dark:text-rose-50",
        other:
          "border-violet-200 bg-violet-50 text-violet-900 dark:border-violet-900 dark:bg-violet-950 dark:text-violet-50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const alertBadgeVariants = cva("rounded-sm border bg-background/50", {
  variants: {
    variant: {
      default:
        "border-slate-200 text-slate-900 dark:border-slate-900 dark:text-slate-50",
      warning:
        "border-amber-200 text-amber-900 dark:border-amber-900 dark:text-amber-50",
      info: "border-sky-200 text-sky-900 dark:border-sky-900 dark:text-sky-50",
      success:
        "border-emerald-200 text-emerald-900 dark:border-emerald-900 dark:text-emerald-50",
      danger:
        "border-rose-200 text-rose-900 dark:border-rose-900 dark:text-rose-50",
      other:
        "border-violet-200 text-violet-900 dark:border-violet-900 dark:text-violet-50",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const alertBodyVariants = cva("leading-none", {
  variants: {
    variant: {
      default:
        "border-slate-900 text-slate-900 dark:border-slate-50 dark:text-slate-50",
      warning:
        "border-amber-900 text-amber-900 dark:border-amber-50 dark:text-amber-50",
      info: "border-sky-900 text-sky-900 dark:border-sky-50 dark:text-sky-50",
      success:
        "border-emerald-900 text-emerald-900 dark:border-emerald-50 dark:text-emerald-50",
      danger:
        "border-rose-900 text-rose-900 dark:border-rose-50 dark:text-rose-50",
      other:
        "border-violet-900 text-violet-900 dark:border-violet-50 dark:text-violet-50",
    },
    defaultVariants: {
      variant: "default",
    },
  },
});

const separatorVariants = cva("", {
  variants: {
    variant: {
      default: "bg-slate-800 dark:bg-slate-50",
      warning: "bg-amber-800 dark:bg-amber-50",
      info: "bg-sky-800 dark:bg-sky-50",
      success: "bg-emerald-800 dark:bg-emerald-50",
      danger: "bg-rose-800 dark:bg-rose-50",
      other: "bg-violet-800 dark:bg-violet-50",
    },
    defaultVariants: {
      variant: "default",
    },
  },
});

const iconMap = {
  default: InfoIcon,
  warning: AlertTriangleIcon,
  info: InfoIcon,
  success: CheckCircle2Icon,
  danger: XCircleIcon,
  other: InfoIcon,
} as const;

export default function AlertList({ alerts, className }: AlertListProps) {
  return (
    <div className={cn(className ?? "grid grid-cols-1 gap-4 md:grid-cols-2")}>
      {alerts.map((item) => {
        const variant = item.type ?? "default";
        const Icon = iconMap[variant];

        return (
          <Alert className={alertListItemVariants({ variant })} key={item.id}>
            <Icon className="size-4" />
            <AlertTitle>{item.title}</AlertTitle>
            <AlertDescription className="space-y-2">
              <div className={alertBodyVariants({ variant })}>
                {item.description}
              </div>
              <Separator className={separatorVariants({ variant })} />
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <Badge
                    key={tag}
                    className={alertBadgeVariants({ variant })}
                    variant="outline"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </AlertDescription>
          </Alert>
        );
      })}
    </div>
  );
}
