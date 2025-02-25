import { useEffect, useRef } from "react";
import { usePanelAdminStore } from "../store";
export const useScrollTop = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const setIsScroll = usePanelAdminStore((s) => s.setIsScroll);
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        setIsScroll(ref.current.scrollTop > 0);
      }
    };

    const currentRef = ref.current;

    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", handleScroll);
      }
    };
  }, [ref.current]);

  return { ref };
};
