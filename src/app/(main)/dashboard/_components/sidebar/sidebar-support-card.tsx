import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function SidebarSupportCard() {
  return (
    <Card size="sm" className="shadow-none group-data-[collapsible=icon]:hidden">
      <CardHeader className="px-4">
        <CardTitle className="text-[6px]">به پشتیبانی نیاز دارید؟</CardTitle>
        <CardDescription className="text-xs">
          در صورت وجود هرگونه سوال یا مشکل، تیم پشتیبانی ما آماده کمک به شماست. برای ارتباط با ما، لطفاً از طریق لینک زیر
          اقدام کنید.
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
