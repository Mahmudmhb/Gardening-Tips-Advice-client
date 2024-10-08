// const CreatePostPage = () => {
//   return <QuillEditor />;
// };
"use client";

import PostModal from "@/component/Ui/modals/postModal";
import { Button } from "@nextui-org/react";

// export default CreatePostPage;

const Page = () => {
  return (
    <div>
      <Button>
        <PostModal />
      </Button>
    </div>
  );
};
export default Page;
