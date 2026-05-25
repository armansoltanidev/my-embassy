"use client";

import * as React from "react";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";

import { RequestDetails } from "./appointment-details";
import { RequestList } from "./appointment-list";
import { requestsData } from "./request-data";

export function Appointments() {
  const [detailsOpen, setDetailsOpen] = React.useState(false);
  const [selectedRequestId, setselectedRequestId] = React.useState<string | null>(requestsData[0]?.id ?? null);
  const selectedRequest = requestsData.find((request) => request.id === selectedRequestId) ?? requestsData[0] ?? null;

  function handleSelectRequest(requestId: string) {
    setselectedRequestId(requestId);

    if (window.innerWidth < 1024) {
      setDetailsOpen(true);
    }
  }

  return (
    <>
      <div
        data-content-padding="false"
        className="grid h-[calc(100dvh-var(--dashboard-header-height))] overflow-hidden lg:grid-cols-[400px_minmax(0,1fr)] lg:divide-x"
      >
        <div className="h-full overflow-hidden">
          <RequestList
            requests={requestsData}
            selectedAppointment={selectedRequestId}
            onSelectAppointment={handleSelectRequest}
          />
        </div>
        <div className="hidden h-full overflow-hidden lg:block">
          <RequestDetails request={selectedRequest} />
        </div>
      </div>

      <Sheet open={detailsOpen} onOpenChange={setDetailsOpen}>
        <SheetContent
          side="right"
          className="gap-0 p-0 data-[side=right]:w-full data-[side=right]:sm:max-w-none data-[side=right]:md:w-3/4"
        >
          <SheetHeader className="sr-only">
            <SheetTitle>{selectedRequest ? `Request ${selectedRequest.id}` : "Request details"}</SheetTitle>
            <SheetDescription>Selected Request details and do action.</SheetDescription>
          </SheetHeader>
          <RequestDetails request={selectedRequest} />
        </SheetContent>
      </Sheet>
    </>
  );
}
