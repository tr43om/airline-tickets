import { CurrencyKeys } from "../rates/rates.type";

export type Carrier = "S7" | "BA" | "TK" | "SU";

export type Ticket = {
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  carrier: Carrier;
  stops: number;
  price: number;
};

export type TicketFilters = {
  currency: CurrencyKeys | null;
  stops: string[] | null;
};

export type TicketsResponse = {
  tickets: Ticket[];
};
