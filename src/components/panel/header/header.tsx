import React from "react";
import { Icons } from "./Icons/Icons";
import UserProfile from "./user-profile/UserProfile";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white shadow-sm h-full">

      <div className="flex items-center gap-4 text-gray-600">
        <Icons.Mail className="w-5 h-5 cursor-pointer" />
        <Icons.MessageSquare className="w-5 h-5 cursor-pointer" />
        <Icons.CheckSquare className="w-5 h-5 cursor-pointer" />
        <Icons.Calendar className="w-5 h-5 cursor-pointer" />
        <Icons.Star className="w-5 h-5 text-yellow-500 cursor-pointer" />
      </div>

      <div className="flex items-center gap-4">

        <div className="flex items-center gap-2 text-gray-700">
          <span className="flex items-center gap-1 cursor-pointer">
             English
          </span>
          <span className="cursor-pointer">🌙</span>
        </div>

        <div className="flex items-center gap-4 relative">
          <div className="relative cursor-pointer">
            <Icons.ShoppingCart className="w-5 h-5 text-blue-600" />
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              5
            </span>
          </div>
          <div className="relative cursor-pointer">
            <Icons.Bell className="w-5 h-5 text-red-500" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              5
            </span>
          </div>
        </div>

        <UserProfile name="johndoe" role="admin" avatar="/path-to-avatar.jpg" />
      </div>
    </header>
  );
};

export default Header;
