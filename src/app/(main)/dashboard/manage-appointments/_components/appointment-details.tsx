import { AlertTriangleIcon, ContactIcon, Copy, Star } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import type { Requests } from "./request-data";

// ─── Status styling maps ─────────────────────────────────────────────────────

const progressRingClasses: Record<Requests["status"], string> = {
  pending: "text-yellow-500",
  canceled: "text-muted-foreground",
  completed: "text-green-500",
  waiting: "text-blue-500",
  rejected: "text-red-500",
};

const statusBadgeClasses: Record<Requests["status"], string> = {
  pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100",
  canceled: "bg-muted text-muted-foreground",
  completed: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-100",
  waiting: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
  rejected: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100",
};

const statusLabels: Record<Requests["status"], string> = {
  pending: "در انتظار",
  canceled: "لغو شده",
  completed: "تکمیل شده",
  waiting: "در حال بررسی",
  rejected: "رد شده",
};

// ─── Props ───────────────────────────────────────────────────────────────────

type RequestDetailsProps = {
  // A single request or null when nothing is selected
  request: Requests | null;
};

// ─── Empty state ─────────────────────────────────────────────────────────────

function EmptyRequestOverview() {
  return (
    <div className="grid min-h-48 place-items-center rounded-lg border border-dashed text-muted-foreground text-sm">
      یک درخواست را برای مشاهده جزئیات انتخاب کنید.
    </div>
  );
}

// ─── Overview tab content ────────────────────────────────────────────────────

function RequestOverview({ request }: { request: Requests }) {
  return (
    <div className="flex flex-col gap-4">
      {/* Header row */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <div className="flex items-center gap-2">
          <h1 className="font-medium text-lg tabular-nums tracking-tight sm:text-xl">
            {request.appointment_type.label}
          </h1>
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Copy request ID"
            onClick={() => navigator.clipboard.writeText(request.id)}
          >
            <Copy />
          </Button>
        </div>

        <div className="flex items-center gap-2 text-xs sm:text-sm">
          <Badge variant="outline">{request.id}</Badge>
          <Badge variant="outline">{request.tracking_number}</Badge>
        </div>
      </div>

      <Separator />

      {/* Customer row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="size-9 after:rounded-sm">
            <AvatarFallback className="rounded-sm">
              {/* First letter of name as avatar */}
              {request.user.charAt(0)}
            </AvatarFallback>
          </Avatar>

          <div className="flex flex-col gap-1">
            <div className="font-medium text-sm leading-none">{request.user}</div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-xs tabular-nums leading-none tracking-tight">{request.user}</span>
              <Button
                variant="ghost"
                size="icon-sm"
                className="h-auto p-0"
                aria-label="Copy user ID"
                onClick={() => navigator.clipboard.writeText(request.id)}
              >
                <Copy className="size-3" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center gap-x-2">
          <div className="text-muted-foreground text-xs leading-none">{request.etaMeta}</div>
          <Badge variant="secondary" className={statusBadgeClasses[request.status]}>
            <Star className="size-3" />
            {statusLabels[request.status]}
          </Badge>
        </div>
      </div>

      <Separator />

      {/* Appointment details */}
      <div className="flex flex-col gap-8">
        <div className="flex items-start justify-between gap-4">
          <h2 className="font-medium">جزئیات نوبت</h2>

          <Button variant="outline" size="sm">
            <ContactIcon data-icon="inline-start" />
            تماس
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-5 md:grid-cols-[1.35fr_1fr_1.1fr_1.15fr_1fr]">
          {/* Full name */}
          <div className="col-span-2 flex flex-col gap-1 md:col-span-1 md:gap-2">
            <div className="text-muted-foreground text-xs leading-none md:text-sm">نام کامل</div>
            <div className="whitespace-nowrap text-sm leading-none">{request.full_name}</div>
          </div>

          {/* Appointment type */}
          <div className="flex flex-col gap-2">
            <div className="text-muted-foreground text-xs leading-none md:text-sm">نوع درخواست</div>
            <div className="text-sm leading-none">{request.appointment_type.label}</div>
          </div>

          {/* Appointment time */}
          <div className="flex flex-col gap-2">
            <div className="text-muted-foreground text-xs leading-none md:text-sm">زمان نوبت</div>
            <div className="text-sm leading-none tabular-nums">{request.appointmnet_time}</div>
          </div>

          {/* ETA */}
          <div className="flex flex-col gap-2">
            <div className="text-muted-foreground text-xs leading-none md:text-sm">زمان تخمینی</div>
            <div className="text-sm leading-none tabular-nums">{request.eta}</div>
          </div>

          {/* Status */}
          <div className="flex flex-col gap-2 md:text-right">
            <div className="text-muted-foreground text-xs leading-none md:text-sm">وضعیت</div>
            <div className={`text-sm font-medium leading-none ${progressRingClasses[request.status]}`}>
              {statusLabels[request.status]}
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Handling alert */}
      <Alert className="border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-50">
        <AlertTriangleIcon />
        <AlertTitle>{request.handling.label}</AlertTitle>
        <AlertDescription className="space-y-2">
          <div className="leading-none">{request.handling.note}</div>

          <Separator className="bg-amber-800 dark:bg-amber-50" />

          <div className="flex flex-wrap gap-2">
            {request.handling.tags.map(({ icon: TagIcon, label }) => (
              <Badge
                key={label}
                className="rounded-sm border-amber-200 bg-background/50 text-amber-900 dark:border-amber-900 dark:text-amber-50"
                variant="outline"
              >
                <TagIcon data-icon="inline-start" />
                {label}
              </Badge>
            ))}
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}

// ─── Main export ─────────────────────────────────────────────────────────────

export function RequestDetails({ request }: RequestDetailsProps) {
  if (!request) {
    return (
      <div className="grid h-full min-h-0 grid-rows-[320px_1fr] overflow-hidden lg:grid-rows-[420px_1fr]">
        <div className="min-h-0 overflow-hidden" />
        <div className="min-h-0 overflow-hidden p-4">
          <EmptyRequestOverview />
        </div>
      </div>
    );
  }

  return (
    <div className="grid bg-card rounded-lg h-full min-h-0 grid-rows-[320px_1fr] overflow-hidden lg:grid-rows-[420px_1fr]">
      <div className="min-h-0 overflow-hidden" />

      <div className="min-h-0 overflow-hidden">
        <div className="h-full min-h-0 py-2">
          <Tabs defaultValue="overview" className="h-full gap-0">
            <TabsList
              className="w-full justify-start gap-2 border-b px-4 **:data-[slot=tabs-trigger]:text-xs sm:gap-4 sm:**:data-[slot=tabs-trigger]:text-sm"
              variant="line"
            >
              <TabsTrigger className="flex-none" value="overview">
                اطلاعات کلی
              </TabsTrigger>
              <TabsTrigger className="flex-none" value="actions">
                اقدامات
              </TabsTrigger>
              <TabsTrigger className="flex-none" value="history">
                تاریخچه خدمات
              </TabsTrigger>
              <TabsTrigger className="flex-none" value="documents">
                مدارک بارگذاری شده
              </TabsTrigger>
              <TabsTrigger className="flex-none" value="extra">
                اطلاعات اضافی
              </TabsTrigger>
            </TabsList>

            {/* Overview */}
            <TabsContent className="min-h-0 overflow-auto p-4" value="overview">
              {/* ✅ Pass single `request` object — NOT the whole array */}
              <RequestOverview request={request} />
            </TabsContent>

            {/* Actions */}
            <TabsContent className="p-4" value="actions">
              <div className="grid h-full place-items-center rounded-md border border-dashed text-muted-foreground text-sm">
                اقدامات به زودی اضافه می‌شود.
              </div>
            </TabsContent>

            {/* Service history */}
            <TabsContent className="p-4" value="history">
              <div className="grid h-full place-items-center rounded-md border border-dashed text-muted-foreground text-sm">
                تاریخچه خدمات به زودی اضافه می‌شود.
              </div>
            </TabsContent>

            {/* Uploaded documents */}
            <TabsContent className="p-4" value="documents">
              <div className="grid h-full place-items-center rounded-md border border-dashed text-muted-foreground text-sm">
                مدارک بارگذاری‌شده به زودی اضافه می‌شود.
              </div>
            </TabsContent>

            {/* Extra info */}
            <TabsContent className="p-4" value="extra">
              <div className="grid h-full place-items-center rounded-md border border-dashed text-muted-foreground text-sm">
                اطلاعات اضافی به زودی اضافه می‌شود.
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
