"use client";

import { useGetPostQuery } from "@/redux/app/featurs/api/post/postApi";
import PostSection from "./post/PostSection"; // Ensure correct path
import { TPost } from "@/types/types";

const ProfilePage = () => {
  const { data: postData, isLoading } = useGetPostQuery(undefined);
  if (isLoading) {
    return <>loading.........</>;
  }
  console.log("post", postData);

  return (
    <div className="w-5/6 mx-auto">
      <div className="grid grid-cols-7 justify-evenly">
        <div className="col-span-3">
          <h1>This is the About Page</h1>
        </div>
        <div className="col-span-4">
          {isLoading && <div>Loading...</div>}

          <h1>This is the Post Page</h1>

          {/* Ensure postData is an array before mapping */}
          {Array.isArray(postData) && postData.length > 0 ? (
            postData.map((item: TPost) => (
              <PostSection key={item._id} item={item} />
            ))
          ) : (
            <>nothing post</>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
