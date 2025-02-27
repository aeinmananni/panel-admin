import { Item } from "./item";
import { useScrollTop } from "../../../../../hooks/useScrollTop";
export default function Menus() {
  const { ref } = useScrollTop();
  return (
    <div
      ref={ref}
      className="scrollbar w-full h-full  overflow-y-auto  bottom-0  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
    >
      <Item />
    </div>
  );
}
