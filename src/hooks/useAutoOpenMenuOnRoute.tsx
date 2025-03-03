import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import {
  classificationItem,
  groupingItem,
} from "../components/panel/sidebar/data";

export const useAutoOpenMenuOnRoute = () => {
  const location = useLocation();
  const [openItems, setOpenItems] = useState<boolean[]>([]);

  useEffect(() => {
    const openIndexes: boolean[] = classificationItem.map((cl) => {
      return groupingItem.some(
        (gr) =>
          location.pathname.includes(String(gr.link)) &&
          gr.classificationId === cl.classificationId
      );
    });
    setOpenItems(openIndexes);
  }, [location.pathname]);

  return { openItems };
};
