import { Item } from "./item";
import { useScrollTop } from "../../../../../hooks/useScrollTop";
import { classificationItem, groupingItem } from "../../data";

export default function Menus() {
  const { ref } = useScrollTop();
  return (
    <div
      ref={ref}
      className={`scrollbar transition-all duration-300 w-full h-full  overflow-y-auto flex-col gap-2 flex  bottom-0  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 overflow-x-hidden`}
    >
      <div className="w-max h-max p-1 flex flex-col gap-1 ">
        {classificationItem.map((cl, index) => (
          <Item key={index} title={cl.classificationName} icon={cl.icon}>
            {groupingItem.map((gr, index) => (
              <>
                {cl.classificationId === gr.classificationId && (
                  <Item key={index} title={gr.groupingName} />
                )}
              </>
            ))}
          </Item>
        ))}
      </div>
    </div>
  );
}
