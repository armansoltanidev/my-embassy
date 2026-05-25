import type { AlertListItem } from "@/components/ui/alert-list";

export type AlertsType = AlertListItem;

export const alerts: AlertsType[] = [
  {
    id: "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
    type: "warning",
    title: "عدم ارسال پیام",
    description:
      "همکار گرامی با توجه به عدم ویرایش اطلاعات پس از تایید توسط سوپروایزر لطفا در ورود اطلاعات دقت نمایید.",
    tags: ["اطلاع رسانی", "اخطار"],
  },
  {
    id: "97e7eb20-b9c8-4e3b-8c6f-1bf6c76d6d39",
    type: "info",
    title: "به‌روزرسانی سیستم",
    description: "سامانه در حال بروزرسانی است و ممکن است برخی بخش‌ها به صورت موقت در دسترس نباشند.",
    tags: ["سیستم", "اطلاع"],
  },
];

export const indentityVerificationAlerts: AlertsType[] = [
  {
    id: "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
    type: "warning",
    title: "عدم داشتن تذکره الکترونیک یا تذکره تایید نشده",
    description:
      "در صورت نداشتن تذکره الکترونیک یا تذکره تایید نشده، امکان ثبت درخواست تثبیت هویت بدون معرفی اقارب وجود ندارد. نیازی به حضور اقارب نیست.",
    tags: ["پدر بزرگ", "پدر", " کاکا(عمو)", "عمه", "پسر کاکا(پسرعمو)", "دختر کاکا(دخترعمو)"],
  },
];
