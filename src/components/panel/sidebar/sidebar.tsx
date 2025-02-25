import { Menus, Header } from "./components";

export default function Sidebar() {
  return (
    <div className=" w-1/5 h-full shadow-lg flex flex-col bg-white relative">
      <Header />
      <Menus />
    </div>
  );
}
