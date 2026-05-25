import Link from "next/link";

import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="flex h-full flex-col gap-2">
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col gap-0.5">
          <h1 className="font-medium text-sm leading-none">پیش نمایش ایمیل</h1>
          <p className="text-muted-foreground text-sm">دید بهتر و دقیق تر با کلیک بر روی دکمه روبرو</p>
        </div>
        <Button
          render={<Link href="/mail" target="_blank" rel="noreferrer" aria-label="Open mail in new tab" />}
          nativeButton={false}
          variant="ghost"
          size="icon-sm"
        >
          <ExternalLink />
        </Button>
      </div>

      <iframe src="/mail" title="Mail preview" className="min-h-0 flex-1 rounded-lg border bg-background" />
    </div>
  );
}
