"use client";

import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import customersData from "./data.json";
import type { RecentCustomerRow } from "./recent-customers-table/schema";
import { RecentCustomersTable } from "./recent-customers-table/table";

const customers = customersData as RecentCustomerRow[];

export function SubscriberOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="leading-none">جستجو در 123</CardTitle>
        <CardDescription>در این بخش می‌توانید درخواست‌های اخیر را مشاهده و مدیریت کنید.</CardDescription>
        <CardAction>
          <Button variant="outline" size="sm">
            دریافت خروجی
            <Download />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="pt-0">
        <RecentCustomersTable data={customers} />
      </CardContent>
    </Card>
  );
}
