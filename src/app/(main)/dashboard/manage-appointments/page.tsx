import { Appointments } from "./_components/appointments";

// Import this stylesheet in any page or component that renders country flag classes.
import "@/styles/flag-icons/flags.css";

export default function Page() {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <Appointments />
    </div>
  );
}
