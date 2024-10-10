import { TProps } from "@/types/types";
import Image from "next/image";
import UpdateCommentModal from "../modals/updateCommentModal";

const CommentPage = ({ com, item }: TProps) => {
  return (
    <div className=" mt-5 ">
      <div className=" my-5   ">
        <div className="mb-4 shadow-lg rounded-3xl">
          <div className="flex items-start gap-6 mb-4">
            <Image
              className="w-10 h-10  rounded-full mr-3"
              src={com.user.profilePicture || "/"}
              alt="User Avatar"
              width={200}
              height={200}
            />
            <div className=" text-[#e4e6eb] ml-5 p-3 rounded-lg ">
              <div className="flex items-center text-[#e4e6eb]  justify-between">
                <div>
                  <span className="font-semibold ">{com.user.username}</span>
                </div>
                <div className="relative">
                  <button className="text-gray-500 hover:text-gray-800">
                    <UpdateCommentModal item={item} com={com} />
                  </button>
                </div>
              </div>

              <p className="">{com.comment}</p>
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
