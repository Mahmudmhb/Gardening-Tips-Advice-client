"use client";
import React from "react";
import PostSection from "../(user)/user/dashboard/post/PostSection";
import { TPost } from "@/types/types";
import { useGetAllPostQuery } from "@/redux/app/featurs/api/post/postApi";
import CreatePost from "@/component/Ui/createPost/CreatePost";
import HomeSideber from "@/component/Ui/HomeSideber/HomeSideber";
import ActiveSections from "@/component/Ui/HomeSideber/ActiveSections";

const Home = () => {
  const { data, isLoading } = useGetAllPostQuery(undefined);

  if (isLoading) {
    return <>loading</>;
  }

  const postData = data?.data;
  console.log(postData);

  return (
    <div className="grid grid-cols-4 gap-10 h-screen">
      <div className="col-span-1">
        <HomeSideber />
      </div>
      <div className="space-y-6 w-full col-span-2 mx-auto p-4 overflow-y-auto">
        <CreatePost />
        {postData?.map((item: TPost) => (
          <PostSection key={item._id} item={item} />
        ))}
      </div>
      <div className="col-span-1">
        <ActiveSections />
      </div>
    </div>
  );
};

export default Home;
