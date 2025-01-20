import { useGetAllUserQuery } from "@/redux/app/featurs/api/user/userApi";
import { IUser } from "@/types/types";
import { User } from "@nextui-org/react";
import React from "react";
import { MdVerified } from "react-icons/md";
import NextLink from "next/link";

const ActiveSections = () => {
  const { data, isLoading } = useGetAllUserQuery(undefined);
  const users = data?.data;

  if (isLoading) {
    return <>loading.......</>;
  }

  return (
    <div className="sticky top-0 h-screen  shadow overflow-y-hidden rounded-lg p-4">
      <h1 className="text-xl font-bold mb-4">Contacts</h1>
      <ul className="divide-y">
        {users?.map((user: IUser) => (
          <li key={user._id} className="flex gap-3 items-center py-2">
            <div className="flex items-center gap-2">
              <NextLink href={`/profile/${user?.username}/${user?._id}`}>
                <User
                  as="button"
                  name={user.username}
                  className="transition-transform"
                  avatarProps={{
                    src: user.profilePicture,
                  }}
                />
              </NextLink>
            </div>
            {user.verified && (
              <div>
                <MdVerified className="text-white text-xl" />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActiveSections;
