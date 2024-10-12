"use client";

import { useGetSingleUserQuery } from "@/redux/app/featurs/api/user/userApi";
import { Spinner } from "@nextui-org/react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useGetAllPostQuery } from "@/redux/app/featurs/api/post/postApi";
import { IUser, TPost } from "@/types/types";
import PostSection from "../../user/dashboard/post/PostSection";
import { MdVerified } from "react-icons/md";

interface IProps {
  params: {
    name: string[]; // This will contain [username, userId]
  };
}
const UserProfle = ({ params }: IProps) => {
  const [username, userID] = params.name;
  console.log(username, userID);
  const { data, isLoading } = useGetSingleUserQuery({ userID });
  const { data: allPost, isLoading: Loading } = useGetAllPostQuery(undefined);
  if (isLoading || Loading) {
    <>
      <div className=" flex justify-center mx-auto">
        <Spinner
          label="L"
          className="text-center"
          color="primary"
          labelColor="primary"
        />
      </div>
    </>;
  }
  const profile: IUser = data?.data;
  const AllPost = allPost?.data;
  const filterProfile = AllPost?.filter(
    (post: TPost) => post.user._id === profile?._id
  );
  console.log(AllPost, filterProfile);
  return (
    <motion.div
      className="min-h-screen w-5/6 mx-auto bg-[#242526] text-white p-4 md:p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-4">
        {profile?.username}&apos;s Profile
      </h1>
      <div className="bg-[#18191a] rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center gap-5 space-x-4 p-4 border-b border-gray-300">
          <div className=" relative">
            <Image
              src={profile?.profilePicture as string}
              alt="Profile Picture"
              className="rounded-full  "
              width={500}
              height={500}
            />
          </div>
          <div>
            <h1 className="text-3xl flex gap-3 items-center font-bold uppercase">
              {profile?.username}{" "}
              {profile?.verified === true && (
                <div>
                  <MdVerified className="text-[#31a24c] text-xl" />
                </div>
              )}
            </h1>
            <h1>
              {profile?.followers?.length || 0} followers •{" "}
              {profile?.following?.length || 0} following
            </h1>
            <div className="mt-4">
              <p>Email: {profile?.email}</p>
              <p>Phone: {profile?.phone}</p>
              <p>Address: {profile?.address}</p>
            </div>
          </div>
          <div className="flex justify-between gap-4"></div>
        </div>
      </div>
      <div>
        {filterProfile?.map((item: TPost) => (
          <PostSection key={item._id} item={item} />
        ))}
      </div>
    </motion.div>
  );
};

export default UserProfle;
