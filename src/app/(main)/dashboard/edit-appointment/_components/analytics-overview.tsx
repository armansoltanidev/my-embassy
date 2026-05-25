"use client";

import { Download } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const RISK_SUMMARY_METRICS = [
  {
    key: "full_name",
    label: "نام و نام خانوادگی",
    value: "آرمان سلطانی",
    comparatorLabel: "ARMAN SOLTANI",
  },
  {
    key: "married_status",
    label: "وضعیت تاهل",
    value: "مجرد",
    comparatorLabel: "NOT MARRIED",
  },
  {
    key: "job",
    label: "شــغل",
    value: "برنامه نویس",
    comparatorLabel: "-",
  },
  {
    key: "perosnal_photo",
    label: "محل قرارگیری عکس",
    value: "-",
    comparatorLabel: "-",
  },
] as const;

export function AnalyticsOverview() {
  return (
    <div className="grid gap-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-muted-foreground text-xs">شماره رهگیری نوبت:</span>
          <p className="text-2xl">12431234312</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="secondary">
            <Download />
            خروجی
          </Button>
        </div>
      </div>
      <SummaryRow />
    </div>
  );
}

function SummaryRow() {
  return (
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
      <Card className="min-w-0 space-y-2 p-4">
        <div>
          <div className="font-medium text-muted-foreground text-sm">نوع نوبت</div>
          <div className="font-semibold text-3xl tabular-nums tracking-tight sm:text-4xl">صدور پاسپورت</div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Badge>
            <span>هزینه</span>
            50$
          </Badge>
          <Badge>5 ساله</Badge>
        </div>

        <p className="flex flex-wrap items-center gap-2 text-muted-foreground text-xs">
          میانگین زمان دریافت این درخواست یک ماه میباشد.
        </p>
      </Card>

      <Card className="min-w-0 py-4 shadow-xs xl:col-span-2">
        <CardHeader className="px-4">
          <CardTitle>اطلاعات متقاضی</CardTitle>
          <CardDescription>اطلاعات متقاضی دریافت خدمات</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-0 xl:divide-x xl:[&>div:first-child]:pl-0 xl:[&>div:last-child]:pr-0 xl:[&>div]:px-5">
          {RISK_SUMMARY_METRICS.map((item) => (
            <div key={item.key} className="min-w-0 space-y-1">
              <div className="text-muted-foreground text-sm">{item.label}</div>
              <div className="font-semibold text-2xl tabular-nums leading-tight">{item.value}</div>
              <div className="text-muted-foreground text-xs">{item.comparatorLabel}</div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
