import { useChangeLanguage } from "../../../hooks/useChangeLanguage";
import { Header } from "../header";
import { Sidebar } from "../sidebar";
type DashbaordProps = {
  children?: React.ReactNode;
};

export default function Dashbaord({ children }: DashbaordProps) {
  const { i18n } = useChangeLanguage();
  return (
    <div
      style={{ direction: i18n.language === "en" ? "ltr" : "rtl" }}
      className="flex items-center w-full h-full "
    >
      <div className="flex flex-col w-full h-full">
        <div className="w-full h-24">
          <Header />
        </div>
        <div className="w-full h-full">{children}</div>
      </div>
      <Sidebar />
    </div>
  );
}
