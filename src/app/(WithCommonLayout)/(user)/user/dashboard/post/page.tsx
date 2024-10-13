"use client";

import CreatePost from "@/component/Ui/createPost/CreatePost";
import PostSection from "./PostSection";
import { useGetMyPostQuery } from "@/redux/app/featurs/api/post/postApi";
import { TPost } from "@/types/types";

const PostPage = () => {
  const { data, isLoading } = useGetMyPostQuery(undefined);

  const postData = data?.data;
  return (
    <div className="md:w-11/12 mx-auto">
      <CreatePost />
      <div className="space-y-6  mx-auto   p-4">
        {isLoading && <div>Loading...</div>}
        {postData?.map((item: TPost) => (
          <PostSection key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};
export default PostPage;
