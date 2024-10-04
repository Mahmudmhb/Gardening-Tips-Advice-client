"use client";
import Image from "next/image";
import { SidebarOptions } from "@/component/sidebarOptions";
import { adminLinks, userLinks } from "@/component/constents";
import { useAppSelector } from "@/redux/app/hooks";
import { useCurrnetUser } from "@/redux/app/featurs/api/auth/authSlice";
import UpdateModal from "../modals/updateUserModal";

const Sidebar = () => {
  const user = useAppSelector(useCurrnetUser);
  console.log(user);

  return (
    <div className="w-full rounded-xl bg-default-100 p-2">
      {/* Cover Photo */}
      <div className="relative h-[200px] w-full rounded-t-lg overflow-hidden">
        <Image
          alt="cover"
          className="w-full h-full object-cover"
          src="/path/to/cover-photo.jpg" // Replace with actual cover photo path
          layout="fill"
        />
      </div>

      {/* Profile Picture */}
      <div className="relative w-full flex justify-center -mt-16">
        <div className=" rounded-full border-4 border-white overflow-hidden">
          <Image
            alt="profile"
            className="w-full h-full object-cover"
            height={300}
            src={user?.profilePicture as string}
            width={300}
          />
        </div>
      </div>

      {/* User Info */}
      <div className="my-3 text-center">
        <h1 className="text-2xl font-semibold flex items-center justify-center gap-2">
          {user?.username}
          <UpdateModal />
        </h1>
      </div>

      {/* User Stats: Posts, Friends, Following */}
      <div className="flex justify-between gap-5 my-4 bg-white p-2 rounded-md shadow-sm">
        <div className="text-center">
          <p className="font-semibold text-lg">150</p>
          <p className="text-sm text-gray-500">Posts</p>
        </div>
        <div className="text-center">
          <p className="font-semibold text-lg">300 Follower</p>
        </div>
        <div className="text-center">
          <p className="font-semibold text-lg">180 Following</p>
        </div>
      </div>

      {/* Sidebar Options (Links) */}
      <div className="mt-3 space-y-2 rounded-xl bg-default-100 p-2">
        <SidebarOptions
          links={
            user?.role !== undefined && user?.role === "user"
              ? userLinks
              : adminLinks
          }
        />
      </div>
    </div>
  );
};

export default Sidebar;
