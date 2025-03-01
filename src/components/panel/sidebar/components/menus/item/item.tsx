import { useEffect, useRef, useState } from "react";
import { useChangeLanguage } from "../../../../../../hooks/useChangeLanguage";
import { ChevronDown } from "../../../icons/icon";
import { Circle } from "../../../icons/icon";
// import { usePanelAdminStore } from "../../../../../../store";
type ItemProps = {
  title: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
};

export default function Item({ title, icon, children }: ItemProps) {
  const { i18n, t } = useChangeLanguage();
  const [open, setOpen] = useState<boolean>(false);
  const containerDivRef = useRef<HTMLDivElement | null>(null);
  // const currentColor = usePanelAdminStore((s) => s.currentColor);
  useEffect(() => {
    if (containerDivRef.current) {
      if (open) {
        const linkHeight = containerDivRef.current.scrollHeight;
        containerDivRef.current.style.height = `${linkHeight}px`;
      } else {
        containerDivRef.current.style.height = `0px`;
      }
    }
  }, [open]);
  return (
    <div className={`flex  flex-col transition-all duration-300 `}>
      <div
        onClick={() => setOpen((c) => !c)}
        className={`${
          children && open ? "bg-slate-100" : ""
        } flex items-center overflow-hidden justify-between gap-2 px-2 py-3 group duration-300 rounded-md cursor-pointer `}
      >
        {children && (
          <ChevronDown
            size={16}
            className={`${
              open
                ? "rotate-0"
                : i18n.language === "en"
                ? "-rotate-90"
                : "rotate-90"
            } transition-all duration-300 text-slate-600`}
          />
        )}
        <div
          className={`flex items-center  justify-end gap-2 text-slate-600  ${
            i18n.language === "en"
              ? "group-hover:translate-x-1"
              : "group-hover:-translate-x-1"
          }  duration-300  w-full `}
        >
          <span className={`truncate`}>{t(title)}</span>
          {children ? icon : <Circle size={12} />}
        </div>
      </div>
      {children && (
        <div
          ref={containerDivRef}
          className={`flex flex-col items-end px-2  overflow-hidden transition-all duration-300`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
