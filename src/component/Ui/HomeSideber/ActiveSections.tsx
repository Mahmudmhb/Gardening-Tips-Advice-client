import { useGetAllUserQuery } from "@/redux/app/featurs/api/user/userApi";
import { IUser } from "@/types/types";
import { User } from "@nextui-org/react";
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
          <li key={user._id} className="flex gap-3 items-center py-2">
            <User
              as="button"
              name={user.username}
              className="transition-transform"
              avatarProps={{
                src: user.profilePicture,
              }}
            />{" "}
            {user.verified && (
              <span className="text-green-500 text-sm ml-2"> verified</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActiveSections;
