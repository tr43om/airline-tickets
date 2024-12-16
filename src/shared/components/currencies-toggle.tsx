import { useCurrencyQuery } from "@/entities/filter/filter.hooks";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { CurrencyKeys } from "@/entities/rates/rates.type";

export const CurrenciesToggle = () => {
  const [currency, setCurrency] = useCurrencyQuery();
  return (
    <ToggleGroup
      type="single"
      variant="outline"
      value={currency}
      className=" *:flex-grow gap-0 last:rounded-r-md"
      onValueChange={(value) => setCurrency(value as CurrencyKeys)}
    >
      <ToggleGroupItem value="RUB">RUB</ToggleGroupItem>
      <ToggleGroupItem value="USD">USD</ToggleGroupItem>
      <ToggleGroupItem value="EUR">EUR</ToggleGroupItem>
    </ToggleGroup>
  );
};
