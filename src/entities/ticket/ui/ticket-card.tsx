import { Card } from "@/shared/components/ui/card";
import { Ticket } from "../ticket.types";
import { BA, S7, SU, TK } from "@/assets/airlines/index";
import { Button } from "@/shared/components/ui/button";
import { useCurrencyQuery } from "@/entities/filter/filter.hooks";

type TicketCardProps = {
  ticket: Ticket;
};

const carriers = {
  ["SU"]: SU,
  ["TK"]: TK,
  ["BA"]: BA,
  ["S7"]: S7,
};

const getStopsText = (stops: number) => {
  const forms = ["пересадка", "пересадки", "пересадок"];
  const lastDigit = stops % 10;
  const lastTwoDigits = stops % 100;

  if (stops === 0) return "Без пересадок";

  if (lastDigit === 1 && lastTwoDigits !== 11) return `${stops} ${forms[0]}`;
  if (
    lastDigit >= 2 &&
    lastDigit <= 4 &&
    (lastTwoDigits < 10 || lastTwoDigits >= 20)
  )
    return `${stops} ${forms[1]}`;
  return `${stops} ${forms[2]}`;
};

export const TicketCard = ({ ticket }: TicketCardProps) => {
  const Carrier = carriers[ticket.carrier];
  const [currency] = useCurrencyQuery();

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("ru-Ru", {
      currency,
      style: "currency",
    }).format(price);
  const formatDate = (date: string) =>
    new Intl.DateTimeFormat("ru-Ru", {
      day: "numeric",
      month: "short",
      year: "numeric",
      weekday: "short",
    }).format(new Date(date));

  return (
    <Card className="flex w-full p-0 gap-4 " asChild>
      <section>
        <div className="py-6 px-6 border-r border-dashed min-w-60 flex flex-col items-center gap-4">
          <Carrier className="w-[180px] h-min" />
          <Button className="w-full h-min">
            Купить <br /> за {formatPrice(ticket.price)}
          </Button>
        </div>
        <div className="flex  w-full justify-between items-center pr-6 py-6">
          <div className="space-y-1">
            <p className="text-zinc-600 text-4xl">{ticket.departure_time}</p>
            <div>
              <p className="text-zinc-600 text-xs font-medium">
                {ticket.origin}, {ticket.origin_name}
              </p>
              <p className="text-zinc-400 text-xs">
                {formatDate(ticket.departure_date)}
              </p>
            </div>
          </div>
          <p className="text-sm text-zinc-500">{getStopsText(ticket.stops)}</p>
          <div className="space-y-1 text-right">
            <p className="text-zinc-600 text-4xl">{ticket.arrival_time}</p>
            <div>
              <p className="text-zinc-600 text-xs font-medium">
                {ticket.destination_name}, {ticket.destination}
              </p>
              <p className="text-zinc-400 text-xs">
                {formatDate(ticket.arrival_date)}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Card>
  );
};
