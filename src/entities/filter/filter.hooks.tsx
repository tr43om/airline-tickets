import {
  parseAsArrayOf,
  parseAsString,
  parseAsStringEnum,
  useQueryState,
} from "nuqs";

export const useCurrencyQuery = () => {
  return useQueryState(
    "currency",
    parseAsStringEnum(["USD", "RUB", "EUR"]).withDefault("RUB")
  );
};
export const useStopsQuery = () => {
  return useQueryState(
    "stops",
    parseAsArrayOf(parseAsString, ";").withDefault(["all"])
  );
};
