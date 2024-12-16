import { useStopsQuery } from "@/entities/filter/filter.hooks";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { cn } from "../utils/cn";

const options = [
  { value: "all", label: "Все" },
  { value: "0", label: "Без пересадок" },
  { value: "1", label: "1 пересадка" },
  { value: "2", label: "2 пересадки" },
  { value: "3", label: "3 пересадки" },
];

export const StopsCheckboxList = () => {
  const [stops, setStops] = useStopsQuery();

  // Функция проверки активности опции
  const isActive = (value: string) => stops.includes(value);

  console.log({ stops });

  // Обработчик изменения состояния чекбокса
  const handleCheckChange = (value: string) => {
    if (value === "all") {
      setStops(["all"]);
    } else {
      if (stops.includes("all")) {
        setStops([value]);
      } else {
        if (stops.includes(value)) {
          // Если элемент уже есть в массиве, удаляем его
          setStops(stops.filter((item) => item !== value));

          if (stops.length === 1) {
            setStops(["all"]);
          }
        } else {
          // Если элемента нет в массиве, добавляем его
          setStops([...stops, value]);
        }
      }
    }
  };

  return (
    <ul>
      {options.map((option, i) => (
        <li
          key={`stops-${i}`}
          className="-mx-4 px-4 group justify-between  hover:bg-blue-50 flex items-center gap-2"
        >
          <Label className="flex w-full py-2 items-center  gap-2    ">
            <Checkbox
              value={option.value}
              checked={isActive(option.value)}
              onCheckedChange={() => handleCheckChange(option.value)}
            />
            <span>{option.label}</span>
          </Label>
          {stops.length >= 1 && i !== 0 && (
            <button
              className={cn(
                "group-hover:flex hidden uppercase text-xs text-blue-500 font-semibold p-0"
              )}
              onClick={(e) => {
                e.stopPropagation();
                setStops([option.value]);
              }}
            >
              только
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};
