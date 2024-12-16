export type CurrencyKeys = "USD" | "RUB" | "EUR";

export type RatesResponse = {
  rates: Record<CurrencyKeys, number>;
};
