import { Dashbaord } from "../dashboard";
import { Outlet } from "react-router";
export default function Home() {
  return (
    <Dashbaord>
      <Outlet />
    </Dashbaord>
  );
}
