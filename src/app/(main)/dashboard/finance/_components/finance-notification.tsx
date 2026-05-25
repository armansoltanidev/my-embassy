import { TrendingUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";

export function FinanceNotification() {
  return (
    <Item className="rounded-xl" variant="outline">
      <ItemMedia variant="icon">
        <TrendingUp />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>لیست تعرفه ها بروزرسانی شد</ItemTitle>
        <ItemDescription>لیست تعرفه ها بروزسانی شد و در خدمات در دسترس قرار گرفت</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button size="sm" variant="outline">
          مشاهده تعرفه ها
        </Button>
      </ItemActions>
    </Item>
  );
}
