import { Menus, Header } from "./components";

export default function Sidebar() {
  return (
    <div className="p-2 w-1/5 h-full shadow-lg flex flex-col bg-white relative gap-1">
      <Header />
      <Menus />
    </div>
  );
}
