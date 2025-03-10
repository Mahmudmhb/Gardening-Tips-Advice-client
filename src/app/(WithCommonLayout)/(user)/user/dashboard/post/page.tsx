"use client";

import CreatePost from "@/component/Ui/createPost/CreatePost";
import PostSection from "./PostSection";
import { useGetMyPostQuery } from "@/redux/app/featurs/api/post/postApi";
import { TPost } from "@/types/types";
import { FaTruckLoading } from "react-icons/fa";

const PostPage = () => {
  const { data, isLoading } = useGetMyPostQuery(undefined);

  const postData = data?.data;
  console.log(postData);
  return (
    <div className="md:w-11/12 mx-auto min-h-screen">
      <CreatePost />
      <div className="space-y-6  mx-auto   p-4">
        {isLoading && (
          <div className="flex items-center justify-center min-h-screen">
            <FaTruckLoading />
          </div>
        )}
        {postData?.map((item: TPost) => (
          <PostSection key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};
export default PostPage;
