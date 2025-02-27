import { useEffect, useRef, useState } from "react";
import Link from "../../../../../../custom/link";
import { useChangeLanguage } from "../../../../../../hooks/useChangeLanguage";
import { ChevronDown, HomeIcon } from "../../../icons/icon";
export default function Item() {
  const { i18n } = useChangeLanguage();
  const [open, setOpen] = useState<boolean>(false);
  const containerDivRef = useRef<HTMLDivElement | null>(null);

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
    <div
      className={`flex  flex-col border border-sky-500 transition-all duration-300 `}
    >
      <Link
        onClick={() => setOpen((c) => !c)}
        to={"/"}
        className={({ isActive }) =>
          `flex items-center overflow-hidden justify-between gap-2 px-2 py-3 group duration-300 rounded-md ${
            isActive ? "bg-slate-100" : ""
          }`
        }
      >
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
        <div
          className={`flex items-center  justify-end gap-2 text-slate-600 ${
            i18n.language === "en"
              ? "group-hover:translate-x-1"
              : "group-hover:-translate-x-1"
          }  duration-300  w-full `}
        >
          <span>Dashboard</span>
          <HomeIcon size={20} />
        </div>
      </Link>
      <div
        ref={containerDivRef}
        className={`flex flex-col items-end px-2  overflow-hidden transition-all duration-300`}
      >
        <span>sxssss</span>
        <span>sxssss</span>
        <span>sxssss</span>
        <span>sxssss</span>
        <span>sxssss</span>
        <span>sxssss</span>
        <span>sxssss</span>
        <span>sxssss</span>
        <span>sxssss</span>
        <span>sxssss</span>
      </div>
    </div>
  );
}
