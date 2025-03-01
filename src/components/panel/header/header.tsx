import React, { useState } from "react";
import { Icons } from "./Icons/Icons";
import UserProfile from "./user-profile/UserProfile";
import ChangeLanguage from "../../language/languages";
import { NotificationIconProps } from "./model";

const NotificationIcon: React.FC<NotificationIconProps> = ({
  Icon,
  count,
  color,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon className={`w-5 h-5 text-${color}`} />
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {count}
        </span>
      )}
      {isHovered && (
        <div className="absolute right-0 mt-2 w-52 h-12 bg-red shadow-md rounded-md p-2">
            <p className="text-gray-700 "> سبد خرید خالیست ☹️</p>
        </div>
      )}
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white shadow-sm h-full">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-gray-700">
          <UserProfile role="admin" avatar="user.jpg" name="John Doe" />
          <ChangeLanguage />
          <input
            type="text"
            placeholder=". . . Search"
            className="px-2 py-1 border rounded-xl border-gray-300 text-left"
          />
        </div>
        <div className="flex items-center gap-4 relative">
          {/* <NotificationIcon Icon={Icons.Bell} count={5} color="red-500" /> */}
        </div>
      </div>
      <div className="flex items-center gap-4 text-gray-600">
        <span className="cursor-pointer">🌙</span>
        <NotificationIcon
          Icon={Icons.ShoppingCart}
          count={0}
          color="blue-600"
        />
        <Icons.Mail className="w-5 h-5 cursor-pointer" />
        <Icons.Calendar className="w-5 h-5 cursor-pointer" />
        <Icons.Star className="w-5 h-5 text-yellow-500 cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
