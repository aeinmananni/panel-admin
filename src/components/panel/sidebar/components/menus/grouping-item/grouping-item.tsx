import Link from "../../../../../../custom/link";
import { Circle } from "../../../icons/icon";
import { FloatTextIcon } from "../float-text-icon/index.";
import { useLocation } from "react-router";
type GroupingItemProps = {
  title: string;
  to?: string;
};

export default function GroupingItem({ title, to }: GroupingItemProps) {
  const location = useLocation();
  const checkRoues = location?.pathname.replace("/", "") === to;
  return (
    <Link
      to={to ?? "/"}
      className={({ isActive }) =>
        `${
          isActive ? "bg-customColor shadow-customShadow" : ""
        } group MenuItemsStyle !py-2`
      }
    >
      <FloatTextIcon
        title={title}
        icon={<Circle size={12} />}
        styles={{ parentClassName: ` ${checkRoues && "!text-slate-100"} ` }}
      />
    </Link>
  );
}
