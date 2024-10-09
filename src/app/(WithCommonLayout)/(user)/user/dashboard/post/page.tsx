// const CreatePostPage = () => {
//   return <QuillEditor />;
// };
"use client";

import PostModal from "@/component/Ui/modals/postModal";
import PostSection from "./PostSection";
import { useGetMyPostQuery } from "@/redux/app/featurs/api/post/postApi";
import { TPost } from "@/types/types";

// export default CreatePostPage;

const PostPage = () => {
  const { data, isLoading } = useGetMyPostQuery(undefined);

  const postData = data?.data;
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-center">Create your post</h1>

      <div>
        <div className="w-full max-w-2xl p-4 rounded-md shadow-sm mx-auto mb-6">
          <div className="mb-4">
            <PostModal />
          </div>
        </div>
      </div>
      <div className="space-y-6  mx-auto p-4">
        {isLoading && <div>Loading...</div>}
        {postData?.map((item: TPost) => (
          <PostSection key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};
export default PostPage;
