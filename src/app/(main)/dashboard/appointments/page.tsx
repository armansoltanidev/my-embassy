import AlertList from "@/components/ui/alert-list";

import { alerts } from "./data-alert";

export default function Page() {
  return (
    <div>
      <AlertList alerts={alerts} />
    </div>
  );
}
