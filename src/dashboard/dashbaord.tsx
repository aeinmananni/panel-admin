import { useChangeLanguage } from "../hooks/useChangeLanguage";
import { Header } from "../components/panel/header";
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
        <div className="w-full h-32 border border-sky-900">
          <Header />
        </div>
        <div className="w-full h-full border border-sky-900">{children}</div>
      </div>
      <div className="border border-sky-900 w-1/4 h-full">Sidebar</div>
    </div>
  );
}
