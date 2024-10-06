"use client";

import { useGetMyPostQuery } from "@/redux/app/featurs/api/post/postApi";
import PostSection from "./post/PostSection"; // Ensure correct path
import { TPost } from "@/types/types";
import PostModal from "@/component/Ui/modals/postModal";

const ProfilePage = () => {
  const { data, isLoading } = useGetMyPostQuery(undefined);
  if (isLoading) {
    return <>loading.........</>;
  }
  const postData = data?.data;
  console.log("post", postData);

  return (
    <div className="w-5/6 mx-auto">
      <div className="grid grid-cols-7 justify-evenly">
        <div className="col-span-3">
          <h1>This is the About Page</h1>
        </div>
        <div className="col-span-4">
          {isLoading && <div>Loading...</div>}

          <h1>Create your post</h1>

          {/* Ensure postData is an array before mapping */}
          <div>
            <div className="w-full max-w-2xl p-4 rounded-md shadow-sm bg-white mx-auto mb-6">
              <div className="mb-4">
                <PostModal />
              </div>
            </div>
          </div>
          <div className="space-y-6 max-w-2xl mx-auto p-4">
            {postData?.map((item: TPost) => (
              <PostSection key={item._id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
