import { TProps } from "@/types/types";
import Image from "next/image";
import UpdateCommentModal from "../modals/updateCommentModal";
import { useCurrnetUser } from "@/redux/app/featurs/api/auth/authSlice";
import { useAppSelector } from "@/redux/app/hooks";

const CommentPage = ({ com, item }: TProps) => {
  const loginUser = useAppSelector(useCurrnetUser);

  return (
    <div className="p-4 ">
      <div className="flex space-x-3">
        <Image
          className="w-10 h-10 rounded-full"
          src={com.user.profilePicture || "/default-avatar.png"}
          alt="User Avatar"
          width={40}
          height={40}
        />

        <div className="flex-1 p-3 rounded bg-default-400/20">
          {/* Comment bubble */}
          <div className=" ">
            <div className="flex justify-between items-center ">
              <div className="flex items-center gap-2 ">
                <span className="font-semibold text-gray-900">
                  {com.user.username}
                </span>
              </div>
              {com.user.email === loginUser?.email && (
                <UpdateCommentModal item={item} com={com} />
              )}
            </div>
            <p className="text-gray-100 mt-1">{com.comment}</p>
          </div>

          <div className="flex space-x-4 text-sm text-blue-600 mt-1">
            <button className="text-sm text-gray-500 hover:text-blue-500">
              Like
            </button>
            <button className="text-sm text-gray-500 hover:text-blue-500">
              Reply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentPage;
