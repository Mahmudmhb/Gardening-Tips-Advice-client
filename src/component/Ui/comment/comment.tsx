import { TProps } from "@/types/types";
import Image from "next/image";
import UpdateCommentModal from "../modals/updateCommentModal";

const CommentPage = ({ com, item }: TProps) => {
  return (
    <div>
      <div className="bg-white p-4 max-w-2xl mx-auto rounded-lg shadow-md">
        <div className="mb-4">
          <div className="flex items-start mb-4">
            <Image
              className="w-10 h-10 rounded-full mr-3"
              src={com.user.profilePicture || "/"}
              alt="User Avatar"
              width={200}
              height={200}
            />
            <div className="bg-gray-100 p-3 rounded-lg w-full">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-semibold text-black">
                    {com.user.username}
                  </span>
                </div>
                <div className="relative">
                  <button className="text-gray-500 hover:text-gray-800">
                    <UpdateCommentModal item={item} com={com} />
                  </button>
                </div>
              </div>

              <p className="mt-2 text-gray-700">{com.comment}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
                <button className="hover:text-blue-600">Like</button>
                <button className="hover:text-blue-600">Reply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentPage;
