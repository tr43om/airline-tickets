import { useQuery } from "@tanstack/react-query";
import { getTickets } from "./ticket.queries";

import { TicketFilters } from "./ticket.types";
import { useCurrencyQuery, useStopsQuery } from "../filter/filter.hooks";

export const useTickets = () => {
  const [currency] = useCurrencyQuery();
  const [stops] = useStopsQuery();
  const options: TicketFilters = { currency, stops };
  return useQuery({
    queryKey: ["tickets", { currency, stops }],
    queryFn: async () => {
      const data = await getTickets(options);
      return data;
    },
  });
};
