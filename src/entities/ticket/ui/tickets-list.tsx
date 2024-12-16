import { Skeleton } from "@/shared/components/ui/skeleton";
import { useTickets } from "../ticket.hooks";
import { TicketCard } from "./ticket-card";

export const TicketsList = () => {
  const { data, isPending } = useTickets();
  if (isPending)
    return (
      <section className="flex flex-col gap-4 w-full">
        {Array.from({ length: 5 }, (_, i) => i).map((index) => (
          <Skeleton key={`skeleton-${index}`} className="h-36" />
        ))}
      </section>
    );
  if (!data) return <div>no data</div>;
  return (
    <section className="flex flex-col gap-4 w-full">
      {data.tickets.map((ticket, i) => (
        <TicketCard ticket={ticket} key={`ticket-${i}`} />
      ))}
    </section>
  );
};
