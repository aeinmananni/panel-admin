import { Outlet, useNavigate } from "react-router";
import { Dashbaord } from "../components/panel";
import { useEffect } from "react";
export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/overview");
  }, [navigate]);
  return (
    <Dashbaord>
      <Outlet />
    </Dashbaord>
  );
}
