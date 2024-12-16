import { RatesResponse } from "./rates.type";

export const getRates = async (): Promise<RatesResponse> => {
  const res = await fetch("https://www.cbr-xml-daily.ru/latest.js");
  const rates = (await res.json()) as RatesResponse;
  return rates;
};
