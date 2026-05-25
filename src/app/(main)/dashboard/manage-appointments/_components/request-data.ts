import { ArrowUp, Ban, type LucideIcon, PenLine } from "lucide-react";

export type AppointmentStatus = "pending" | "rejected" | "canceled" | "completed" | "waiting";

export type UserRequester = {
  name: string;
  id: string;
};

export type HandlingTag = {
  label: string;
  icon: LucideIcon;
};

export type RequestHandling = {
  label: string;
  note: string;
  tags: HandlingTag[];
};

export type AppointmentType = {
  appointmnet_type: string;
  label: string;
};

export type Requests = {
  id: string;
  user: string;
  full_name: string;
  appointment_type: AppointmentType;
  appointmnet_time: string;
  handling: RequestHandling;
  eta: string;
  etaMeta: string;
  status: AppointmentStatus;
  progress: number;
  tracking_number: string;
};

export const requestsData: Requests[] = [
  {
    id: "SDA-01-2401",
    user: "آرمان سلطانی",
    full_name: "آرمان سلطانی",
    appointment_type: {
      appointmnet_type: "passport_inssurnce",
      label: "تمدید پاسپورت",
    },
    appointmnet_time: "12:40 - 1405/02/20",
    handling: {
      label: "لزوم وجود اصل مدارک شناسایی",
      note: "مدارک شناسایی معتبر تدکره الکترونیک | تثبیت هویت ویژه",
      tags: [
        { label: "اخطار", icon: Ban },
        { label: "بررسی مدارک", icon: ArrowUp },
        { label: "ثبت امضاء", icon: PenLine },
      ],
    },
    eta: "08:45 AM",
    etaMeta: "امروز",
    status: "completed",
    progress: 65,
    tracking_number: "PI-81239",
  },
  {
    id: "SDA-01-2402",
    user: "صبور سلطانی",
    full_name: "صبور سلطانی",
    appointment_type: {
      appointmnet_type: "passport_inssurnce",
      label: "ثبت نام حج",
    },
    appointmnet_time: "15:40 - 1405/02/22",
    handling: {
      label: "Fragile electronics",
      note: "Keep package sealed until handoff.",
      tags: [
        { label: "Do not stack", icon: Ban },
        { label: "Keep upright", icon: ArrowUp },
        { label: "Signature required", icon: PenLine },
      ],
    },
    eta: "08:45 AM",
    etaMeta: "Today",
    status: "waiting",
    progress: 65,
    tracking_number: "HJ-645233",
  },
];
