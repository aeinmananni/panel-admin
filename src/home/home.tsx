import { Outlet } from "react-router";
import { Dashbaord } from "../components/panel";
export default function Home() {
  return (
    <Dashbaord>
      <Outlet />
    </Dashbaord>
  );
}
