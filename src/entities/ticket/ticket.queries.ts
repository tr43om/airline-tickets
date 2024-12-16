import { BASE_CURRENCY } from "../rates/rates.constants";
import { getRates } from "../rates/rates.queries";
import { TicketFilters, TicketsResponse } from "./ticket.types";

export const getTickets = async (
  options?: TicketFilters
): Promise<TicketsResponse> => {
  const res = await fetch("/db/tickets.json");
  const tickets = (await res.json()) as TicketsResponse;
  let filteredTickets = tickets.tickets;
  const { rates } = await getRates();

  if (!options) return tickets;

  if (options?.currency) {
    filteredTickets = filteredTickets.map((ticket) => ({
      ...ticket,
      price:
        options.currency === BASE_CURRENCY
          ? ticket.price
          : ticket.price * rates[options.currency!],
    }));
  }

  if (options.stops) {
    if (options.stops.includes("all")) return { tickets: filteredTickets };
    filteredTickets = filteredTickets.filter((ticket) =>
      options.stops?.includes(ticket.stops.toString())
    );
  }

  return { tickets: filteredTickets };
};
