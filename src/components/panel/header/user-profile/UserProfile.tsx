import React from "react";
import { UserProfileProps } from "../model";

const UserProfile: React.FC<UserProfileProps> = ({ role, avatar, name }) => {
  return (
    <div className="flex items-center gap-3">
      <img src={avatar} alt={name} className="w-12 h-12 rounded-full" />

      <div className="flex flex-col">
        <span className="text-lg font-semibold">{name}</span>
        <span className="text-sm text-gray-500">{role}</span>{" "}
      </div>
    </div>
  );
};

export default UserProfile;
