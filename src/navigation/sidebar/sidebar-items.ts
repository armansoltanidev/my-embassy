import {
  Banknote,
  ChartBar,
  Fingerprint,
  Forklift,
  Gauge,
  GraduationCap,
  LayoutDashboard,
  ListTodo,
  Lock,
  type LucideIcon,
  Mail,
  SquareArrowUpRight,
  Users,
} from "lucide-react";

export interface NavSubItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
}

export interface NavMainItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  subItems?: NavSubItem[];
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
}

export interface NavGroup {
  id: number;
  label?: string;
  items: NavMainItem[];
}

export const sidebarItems: NavGroup[] = [
  {
    id: 1,
    label: "داشبورد",
    items: [
      {
        title: "داشبورد",
        url: "/dashboard/default",
        icon: LayoutDashboard,
      },
      {
        title: "گزارشات",
        url: "/dashboard/crm",
        icon: ChartBar,
      },
      {
        title: "حسابداری",
        url: "/dashboard/finance",
        icon: Banknote,
      },
      {
        title: "آنالیر حساب ها",
        url: "/dashboard/analytics",
        icon: Gauge,
      },
      {
        title: "چک لیست",
        url: "/dashboard/productivity",
        icon: ListTodo,
      },
      {
        title: "آموزش ها",
        url: "/dashboard/academy",
        icon: GraduationCap,
        isNew: true,
      },
      {
        title: "لجستیک",
        url: "/dashboard/logistics",
        icon: Forklift,
      },
    ],
  },
  {
    id: 2,
    label: "مدیریت",
    items: [
      {
        title: "ایمیل",
        url: "/dashboard/mail",
        icon: Mail,
      },
      {
        title: "کاربران",
        url: "/dashboard/users",
        icon: Users,
      },
      {
        title: "سطح دسترسی",
        url: "/dashboard/coming-soon",
        icon: Lock,
        comingSoon: true,
      },
      {
        title: "ثبت نام و ورود",
        url: "/auth",
        icon: Fingerprint,
        subItems: [
          { title: "Login v1", url: "/auth/v1/login", newTab: true },
          { title: "Login v2", url: "/auth/v2/login", newTab: true },
          { title: "Register v1", url: "/auth/v1/register", newTab: true },
          { title: "Register v2", url: "/auth/v2/register", newTab: true },
        ],
      },
    ],
  },
  // {
  //   id: 3,
  //   label: "Legacy",
  //   items: [
  //     {
  //       title: "Dashboards",
  //       url: "/dashboard/default-v1",
  //       subItems: [
  //         { title: "Default V1", url: "/dashboard/default-v1" },
  //         { title: "CRM V1", url: "/dashboard/crm-v1" },
  //         { title: "Finance V1", url: "/dashboard/finance-v1" },
  //         { title: "Analytics V1", url: "/dashboard/analytics-v1" },
  //       ],
  //     },
  //   ],
  // },
  {
    id: 4,
    label: "لینک های دیگر",
    items: [
      {
        title: "لینک های مفید",
        url: "/dashboard/coming-soon",
        icon: SquareArrowUpRight,
      },
    ],
  },
];
