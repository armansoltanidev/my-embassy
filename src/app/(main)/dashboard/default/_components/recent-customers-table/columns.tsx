"use client";
"use no memo";

import type { ColumnDef } from "@tanstack/react-table";
import { addMinutes, differenceInCalendarDays, endOfToday, parseISO } from "date-fns";
import { CircleAlertIcon, CircleCheckIcon, LoaderIcon, UserRound } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

import type { RecentCustomerRow } from "./schema";

function requestLabel(requested: string) {
  switch (requested) {
    case "passport_issuance":
      return "صدور پاسپورت";
    case "hajj_registration":
      return "ثبت نام حج";
    case "passport_conversion":
      return "تبدیل پاسپورت";
    case "marriage_document":
      return "سند ازدواج";
    case "identity_verification":
      return "احراز هویت";
    default:
      return requested;
  }
}

function statusLabel(status: string) {
  switch (status) {
    case "pending":
      return "در انتظار";
    case "completed":
      return "تکمیل شده";
    case "rejected":
      return "رد شده";
    default:
      return status;
  }
}

function billingLabel(billing: string) {
  switch (billing) {
    case "paid":
      return "پرداخت شده";
    case "not_paid":
      return "پرداخت نشده";
    default:
      return billing;
  }
}

function billingIcon(billing: string) {
  switch (billing) {
    case "paid":
      return <CircleCheckIcon className="fill-green-500 stroke-primary-foreground dark:fill-green-600" />;
    case "not_paid":
      return <LoaderIcon />;
    default:
      return <CircleAlertIcon className="text-amber-600 dark:text-amber-500" />;
  }
}

export const recentCustomersColumns: ColumnDef<RecentCustomerRow>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <div className="flex items-center justify-center">
        <Checkbox
          checked={table.getIsAllPageRowsSelected() ? true : table.getIsSomePageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all customers on this page"
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label={`Select ${row.original.name}`}
        />
      </div>
    ),
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "نام و نام خانوادگی",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <span className="flex size-8 items-center justify-center rounded-md border bg-muted">
          <UserRound className="size-4 text-muted-foreground" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-end justify-between gap-3">
            <div className="grid min-w-0 gap-0.5">
              <span className="truncate font-medium text-sm leading-none">{row.original.name}</span>
              <span className="truncate text-muted-foreground text-xs leading-none">#{row.original.id}</span>
            </div>
          </div>
        </div>
      </div>
    ),
    enableHiding: false,
  },
  {
    id: "search",
    accessorFn: (row) => `${row.id} ${row.name} ${row.email}`,
    filterFn: "includesString",
    enableHiding: true,
  },
  {
    accessorKey: "status",
    header: "وضعیت",
    filterFn: "equalsString",
    cell: ({ row }) => (
      <Badge variant="outline" className="px-1.5 text-muted-foreground">
        {statusLabel(row.original.status)}
      </Badge>
    ),
  },
  {
    accessorKey: "billing",
    header: "صورتحساب",
    filterFn: "equalsString",
    cell: ({ row }) => (
      <Badge variant="outline" className="px-1.5 text-muted-foreground">
        {billingIcon(row.original.billing)}
        {billingLabel(row.original.billing)}
      </Badge>
    ),
  },
  {
    accessorKey: "requested",
    header: "درخواست",
    cell: ({ row }) => <span className="text-sm">{requestLabel(row.original.requested)}</span>,
  },
  {
    id: "joinedWindow",
    accessorFn: (row) => {
      const daysSinceJoined = differenceInCalendarDays(endOfToday(), parseISO(row.createdAt));

      if (daysSinceJoined <= 30) return ["30", "90"];
      if (daysSinceJoined <= 90) return ["90"];
      return [];
    },
    filterFn: "arrIncludes",
    enableHiding: true,
  },
  {
    accessorKey: "createdAt",
    header: "تاریخ ثبت",
    cell: ({ row }) => {
      const baseDate = parseISO(row.original.createdAt);
      const joinedAt = addMinutes(baseDate, 9 * 60 + (Number(row.original.id) % 12) * 17);

      return (
        <div className="grid gap-0.5">
          <span className="text-sm">
            {joinedAt.toLocaleDateString("fa-IR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
          <span className="text-muted-foreground text-xs">
            {joinedAt.toLocaleTimeString("fa-IR", {
              hour: "numeric",
              minute: "2-digit",
            })}
          </span>
        </div>
      );
    },
  },
];
