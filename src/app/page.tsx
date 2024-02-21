import ScheduleComponents from "@/components/scheduleComponents/ScheduleComponents";
import { Providers } from "@/lib/providers";

export default function Home() {
  return (
    <main>
      <Providers>
        <ScheduleComponents />
      </Providers>
    </main>
  );
}
