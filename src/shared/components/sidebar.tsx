import { CurrenciesToggle } from "./currencies-toggle";
import { StopsCheckboxList } from "./stops-checkbox-list";
import { Card } from "./ui/card";

export const Sidebar = () => {
  return (
    <Card asChild className="px-4 w-[336px] space-y-6 h-full sticky top-4">
      <aside>
        <section className="space-y-2 font-medium text-zinc-600">
          <header>
            <h3 className="uppercase text-sm">Валюта</h3>
          </header>
          <main>
            <CurrenciesToggle />
          </main>
        </section>
        <section className="space-y-2">
          <header>
            <h3 className="uppercase text-sm font-medium text-zinc-600">
              Количество пересадок
            </h3>
          </header>
          <main>
            <StopsCheckboxList />
          </main>
        </section>
      </aside>
    </Card>
  );
};
