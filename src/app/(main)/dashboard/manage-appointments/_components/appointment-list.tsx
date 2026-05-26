import { Search, SlidersHorizontal } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

import type { Requests } from "./request-data";

const statusLabels: Record<Requests["status"], string> = {
  pending: "در انتظار",
  canceled: "لغو شده",
  completed: "تکمیل شده",
  waiting: "در حال بررسی",
  rejected: "رد شده",
};

type AppointmentCardProps = {
  active?: boolean;
  onSelectAppointment: (appointmentId: Requests["id"]) => void;
  request: Requests;
};

type AppointmentListProps = {
  onSelectAppointment: (appointmentId: Requests["id"]) => void;
  selectedAppointment: Requests["id"] | null;
  requests: Requests[];
};

function AppointmentCard({ request, active, onSelectAppointment }: AppointmentCardProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={(event) => {
        event.currentTarget.blur();
        onSelectAppointment(request.id);
      }}
      className={cn(
        "flex w-full flex-col gap-4 rounded-xl border p-3 text-right transition-colors",
        "hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
        active && "border-primary bg-muted/50",
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <span className="text-muted-foreground text-xs">نوع نوبت:</span>
          <p className="text-sm">{request.appointment_type.label}</p>
        </div>
        <p className="text-lg">{request.tracking_number}</p>
      </div>

      <div className="flex items-center justify-between">
        <p className="">{request.user}</p>
        <div className="flex items-center gap-1.5 text-right">
          <Badge variant="outline">{statusLabels[request.status]}</Badge>
        </div>
      </div>

      <div className="flex items-center gap-0.5">
        <span className="h-px min-w-0 border-foreground border-t border-dashed" />
        <span
          className="h-px min-w-0 border-border border-t border-dashed"
          style={{ flexGrow: 100 - request.progress, flexBasis: 0 }}
        />
      </div>

      <div className="flex items-center justify-between">
        <p className="text-muted-foreground text-xs">تاریخ نوبت:</p>
        <p>{request.appointmnet_time}</p>
      </div>
    </button>
  );
}

export function RequestList({ requests, selectedAppointment, onSelectAppointment }: AppointmentListProps) {
  return (
    <Card className="h-full rounded-lg ring-0">
      <CardHeader>
        <CardTitle className="font-normal text-xl">لیست درخواست ها</CardTitle>
        <CardAction>
          <Button size="icon-sm" variant="ghost">
            <SlidersHorizontal />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4 overflow-hidden px-0">
        <Tabs defaultValue="all">
          <TabsList className="w-full border-b px-4" variant="line">
            <TabsTrigger className="text-xs" value="all">
              همه (156)
            </TabsTrigger>
            <TabsTrigger className="text-xs" value="in-transit">
              جاری (32)
            </TabsTrigger>
            <TabsTrigger className="text-xs" value="delivered">
              در انتظار (98)
            </TabsTrigger>
            <TabsTrigger className="text-xs" value="delayed">
              رد شده (9)
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="px-4">
          <InputGroup className="h-8">
            <InputGroupInput className="h-8" aria-label="Search Appointment" placeholder="جستجوی درخواست ها..." />
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
          </InputGroup>
        </div>

        <ScrollArea className="h-0 flex-1">
          <div className="flex flex-col gap-4 px-4">
            {requests.map((request) => (
              <AppointmentCard
                active={request.id === selectedAppointment}
                key={request.id}
                request={request}
                onSelectAppointment={onSelectAppointment}
              />
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
