import AlertList from "@/components/ui/alert-list";

import { AppointmentForm } from "./_components";
import { alerts } from "./data-alert";

export default function Page() {
  return (
    <div className="flex flex-col gap-5">
      <AlertList alerts={alerts} />
      <AppointmentForm />
    </div>
  );
}
