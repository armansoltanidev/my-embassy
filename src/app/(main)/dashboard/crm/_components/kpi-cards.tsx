import { ArrowUpRight, TrendingDown, TrendingUp } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardAction, CardContent, CardDescription, CardHeader } from "@/components/ui/card";

export function KpiCards() {
  return (
    <section className="space-y-5">
      <div className="space-y-1">
        <h2 className="text-2xl tracking-tight">گزارشات پنل</h2>
        <p className="text-muted-foreground text-sm">
          در این بخش میتوانید گزارشات کلی را مشاهده و مدیریت کنید تاریخچه فعالیت ها را بررسی و اقدامات لازم را انجام
          دهید.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Card>
          <CardHeader>
            <CardDescription>در آمد ماه جاری</CardDescription>
            <CardAction>
              <ArrowUpRight className="size-4" />
            </CardAction>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-3xl leading-none tracking-tight">$284,500</span>

              <Badge
                variant="outline"
                className="border-green-200 bg-green-500/10 text-green-700 dark:border-green-900/40 dark:bg-green-500/15 dark:text-green-300"
              >
                <TrendingUp />
                +12%
              </Badge>
            </div>
            <p className="text-sm">
              <span className="font-medium text-foreground">$254,200</span>{" "}
              <span className="text-muted-foreground">ماه گذشته</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardDescription>خدمات ماه جاری</CardDescription>
            <CardAction>
              <ArrowUpRight className="size-4" />
            </CardAction>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-3xl leading-none tracking-tight">2845</span>

              <Badge variant="outline" className="border-destructive/20 bg-destructive/10 text-destructive">
                <TrendingDown />
                -2.5%
              </Badge>
            </div>
            <p className="text-sm">
              <span className="font-medium text-foreground">3093</span>{" "}
              <span className="text-muted-foreground">ماه گذشته</span>
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
