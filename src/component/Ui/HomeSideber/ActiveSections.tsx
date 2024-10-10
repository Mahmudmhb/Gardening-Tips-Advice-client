import { useGetAllUserQuery } from "@/redux/app/featurs/api/user/userApi";
import { IUser } from "@/types/types";
import Image from "next/image";
import React from "react";

const ActiveSections = () => {
  const { data, isLoading } = useGetAllUserQuery(undefined);
  const users = data?.data;

  if (isLoading) {
    return <>loading.......</>;
  }

  return (
    <div className="sticky top-0 z-10  shadow rounded-lg p-4">
      <h1 className="text-xl font-bold mb-4">Contacts</h1>
      <ul className="divide-y">
        {users?.map((user: IUser) => (
          <li key={user._id} className="flex items-center py-2">
            <Image
              src={user.profilePicture || "fallback-image-url"} // Replace with an actual fallback image URL
              alt={`${user.username}'s profile`}
              className="w-10 h-10 rounded-full mr-3"
              width={500}
              height={500}
            />
            <div className="flex-1">
              <span className="font-semibold">{user.username}</span>
              {user.verified && (
                <span className="text-green-500 text-sm ml-2">• verified</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActiveSections;
