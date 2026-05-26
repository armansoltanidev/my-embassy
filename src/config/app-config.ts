import packageJson from "../../package.json";

const currentYear = new Date().getFullYear();

export const APP_CONFIG = {
  name: "سفارت من",
  version: packageJson.version,
  copyright: `© ${currentYear} My Embassy. All rights reserved`,
  meta: {
    title: "سفارت من",
    description:
      "سفارت من یک پلتفرم مدیریت نوبت سفارت است که به شما کمک می‌کند تا به راحتی نوبت‌های سفارت را رزرو و مدیریت کنید. با استفاده از این پلتفرم، می‌توانید به سرعت نوبت‌های سفارت را پیدا کنید، رزرو کنید و تاریخ انقضای نوبت‌ها را پیگیری کنید.",
  },
};
