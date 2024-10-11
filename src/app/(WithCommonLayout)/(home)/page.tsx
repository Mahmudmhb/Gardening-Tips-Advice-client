"use client";
import React from "react";
import PostSection from "../(user)/user/dashboard/post/PostSection";
import { TPost } from "@/types/types";
import { useGetAllPostQuery } from "@/redux/app/featurs/api/post/postApi";
import CreatePost from "@/component/Ui/createPost/CreatePost";
import HomeSideber from "@/component/Ui/HomeSideber/HomeSideber";
import ActiveSections from "@/component/Ui/HomeSideber/ActiveSections";
import { ScrollShadow, Spinner } from "@nextui-org/react";
import { useAppSelector } from "@/redux/app/hooks";
import { useCurrnetUser } from "@/redux/app/featurs/api/auth/authSlice";
import Link from "next/link";

const Home = () => {
  const user = useAppSelector(useCurrnetUser);
  const { data, isLoading } = useGetAllPostQuery(undefined);

  const postData = data?.data;

  const filteredPosts = postData?.filter((post: TPost) => {
    if (!post.premium === true) {
      return true;
    }
    if (post.premium && user?.verified === true) {
      return true;
    }
    return false;
  });

  return (
    <div className="grid grid-cols-4 gap-10 h-screen">
      <div className="col-span-1">
        <HomeSideber />
      </div>
      <ScrollShadow
        hideScrollBar
        className="space-y-6 w-full col-span-2 mx-auto p-4 "
      >
        <div>
          <div className="text-center my-5">
            {user?.verified === false && user.premium === true && (
              <h1>
                If you want to see Premium Post go to your Profile and{" "}
                <Link
                  href={"/user/dashboard"}
                  className="text-green-500 underline"
                >
                  Verify your profile
                </Link>
              </h1>
            )}
          </div>
          <CreatePost />

          {isLoading && (
            <>
              <div className=" flex justify-center mx-auto">
                <Spinner
                  label="L"
                  className="text-center"
                  color="primary"
                  labelColor="primary"
                />
              </div>
            </>
          )}

          {filteredPosts?.map((item: TPost) => (
            <PostSection key={item._id} item={item} />
          ))}
        </div>
      </ScrollShadow>
      <div className="col-span-1">
        <ActiveSections />
      </div>
    </div>
  );
};

export default Home;
