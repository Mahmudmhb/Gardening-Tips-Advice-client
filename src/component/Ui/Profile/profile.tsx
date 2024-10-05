"use client";
import Image from "next/image";
import UpdateModal from "../modals/updateUserModal";
import { SidebarOptions } from "@/component/sidebarOptions";
import { adminLinks, userLinks } from "@/component/constents";
import { useAppSelector } from "@/redux/app/hooks";
import { useCurrnetUser } from "@/redux/app/featurs/api/auth/authSlice";

const ProfileLayout = () => {
  const user = useAppSelector(useCurrnetUser);
  return (
    <div className=" mx-auto p-4">
      {/* Profile Header */}
      <div className="flex items-center space-x-4 p-4 border-b border-gray-300">
        <div className="w-24 h-24 relative">
          <Image
            src="/profile-picture.jpg"
            alt="Profile Picture"
            layout="fill"
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold">User Name</h1>
          <p className="text-gray-600">
            100 Posts • 500 Followers • 300 Following
          </p>
        </div>
      </div>

      {/* Profile Tabs */}
      <div className="flex  justify-between  items-center">
        <div
          className="flex space-x-8 my-4
          pb-2 "
        >
          <SidebarOptions
            links={
              user?.role !== undefined && user?.role === "user"
                ? userLinks
                : adminLinks
            }
          />
        </div>
        <div>
          <UpdateModal />
        </div>
      </div>

      {/* Post Section */}
      {/* <PostSection /> */}
    </div>
  );
};
export default ProfileLayout;
