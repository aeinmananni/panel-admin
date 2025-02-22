import React from "react";

interface UserProfileProps {
  name: string;
  role: string;
  avatar: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ name, role, avatar }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-gray-800 text-sm">{name}</span>
      <span className="text-gray-500 text-xs">{role}</span>
      <img
        src={avatar}
        alt="User Avatar"
        className="w-8 h-8 rounded-full border"
      />
    </div>
  );
};

export default UserProfile;
