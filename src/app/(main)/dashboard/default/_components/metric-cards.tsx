import { DollarSign, LaptopMinimalCheck, Mail, TrendingUp, UserPlus } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function MetricCards() {
  return (
    <div className="grid grid-cols-1 gap-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs xl:grid-cols-4 dark:*:data-[slot=card]:bg-card">
      <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex size-7 items-center justify-center rounded-lg border bg-muted text-muted-foreground">
              <LaptopMinimalCheck className="size-4" />
            </div>
          </CardTitle>
          <CardDescription>درخواست های بررسی نشده</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-1">
          <div className="flex flex-wrap items-center gap-2">
            <div className="font-medium text-3xl tabular-nums leading-none tracking-tight">78</div>
            <Badge>حاوی درخواست مهم</Badge>
          </div>
          <p className="text-muted-foreground text-sm">تنها درخواست های بررسی نشده نمایش داده میشود</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex size-7 items-center justify-center rounded-lg border bg-muted text-muted-foreground">
              <UserPlus className="size-4" />
            </div>
          </CardTitle>
          <CardDescription>تعداد کارمندان فعال</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-1">
          <div className="flex flex-wrap items-center gap-2">
            <div className="font-medium text-3xl tabular-nums leading-none tracking-tight">23</div>
            <Badge>
              <TrendingUp className="size-3" />
              امروز
            </Badge>
          </div>
          <p className="text-muted-foreground text-sm">بررسی گزارشات کارکنان در قسمت گزارشات</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex size-7 items-center justify-center rounded-lg border bg-muted text-muted-foreground">
              <Mail className="size-4" />
            </div>
          </CardTitle>
          <CardDescription>ایمیل های دریافتی</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-1">
          <div className="flex flex-wrap items-center gap-2">
            <div className="font-medium text-3xl tabular-nums leading-none tracking-tight">45,678</div>
          </div>
          <p className="text-muted-foreground text-sm">تنها ایمیل ها خوانده نشده نمایش داده میشود</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex size-7 items-center justify-center rounded-lg border bg-muted text-muted-foreground">
              <DollarSign className="size-4" />
            </div>
          </CardTitle>
          <CardDescription>درآمد روز جاری</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-1">
          <div className="flex flex-wrap items-center gap-2">
            <div className="font-medium text-3xl tabular-nums leading-none tracking-tight">1,303,00 $</div>
            <Badge>
              <TrendingUp className="size-3" />
              +4.5%
            </Badge>
          </div>
          <p className="text-muted-foreground text-sm">اطلاعات بیشتر در بخش گزارشات</p>
        </CardContent>
      </Card>
    </div>
  );
}
