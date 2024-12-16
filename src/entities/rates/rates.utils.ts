import { getRates } from "./rates.queries";
import { CurrencyKeys } from "./rates.type";

export const convertCurrency = async ({
  value,
  currency,
}: {
  value: number;
  currency: CurrencyKeys;
}) => {
  const { rates } = await getRates();

  return value * rates[currency];
};
