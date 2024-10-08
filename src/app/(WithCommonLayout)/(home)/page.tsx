"use client";
import React from "react";
import PostSection from "../(user)/user/dashboard/post/PostSection";
import { TPost } from "@/types/types";
import { useGetAllPostQuery } from "@/redux/app/featurs/api/post/postApi";

const Home = () => {
  const { data, isLoading } = useGetAllPostQuery(undefined);
  if (isLoading) {
    return <>loading</>;
  }
  const postData = data?.data;
  console.log(postData);
  return (
    <div>
      <h1>this is home page {postData?.length}</h1>
      <div className="space-y-6 max-w-2xl mx-auto p-4">
        {postData?.map((item: TPost) => (
          <PostSection key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
