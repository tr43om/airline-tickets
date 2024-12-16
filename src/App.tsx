import { TicketsList } from "./entities/ticket/ui/tickets-list";
import { Sidebar } from "./shared/components/sidebar";

function App() {
  return (
    <div className="flex gap-4 ">
      <Sidebar />
      <TicketsList />
    </div>
  );
}

export default App;
