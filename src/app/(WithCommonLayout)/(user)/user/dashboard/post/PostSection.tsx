/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import Image from "next/image";
import { TCommnets, TPost } from "@/types/types";
import HtmlContent from "@/component/Ui/Html/htmlContent";
import CommentModal from "@/component/Ui/modals/commentModal";
import CommentPage from "@/component/Ui/comment/comment";
import EditAndDeleteApp from "@/component/dropdown/editAndDeleteDropdown";
import { useUpvotePostMutation } from "@/redux/app/featurs/api/post/postApi";
import { toast } from "sonner";
import { Button } from "@nextui-org/react";
import { IoMdChatboxes } from "react-icons/io";
import NextLink from "next/link";
import { MdVerified } from "react-icons/md";

const PostSection = ({ item }: { item: TPost }) => {
  const [upvoteUpdate] = useUpvotePostMutation();

  const [visibleComments, setVisibleComments] = useState(2);
  const handleLoadMore = () => {
    setVisibleComments(item.comments.length);
  };
  const handleUpvote = async (postId: string) => {
    try {
      const res = await upvoteUpdate({ postId }).unwrap();

      toast.success(`${res.message}`, { duration: 1000 });
    } catch (error: any) {
      toast.error(error.data.message, { duration: 1000 });
    }
  };
  return (
    <div className=" text-[#dddfe4] bg-[#242526] p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center space-x-4 mb-4">
        <div className="flex  items-center gap-5">
          <div className="w-12 h-12 relative">
            <Image
              src={item.user.profilePicture! || "/default-image.jpg"}
              alt={item?.user?.username}
              layout="fill"
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <NextLink
                href={`/profile/${item?.user?.username}/${item?.user?._id}`}
              >
                <p className="font-semibold">
                  {item?.user?.username as string}
                </p>
              </NextLink>
              <div>
                {item.user.verified && (
                  <div>
                    <MdVerified className="text-white text-xl" />
                  </div>
                )}
              </div>
            </div>
            <p className="text-sm text-gray-500">
              {new Date(item.createdAt!).toLocaleTimeString("en-US", {
                hour12: false,
              })}{" "}
              time
            </p>
          </div>
        </div>
        <button>
          <EditAndDeleteApp item={item} />
        </button>
      </div>

      <p className="mb-4 ">
        <HtmlContent content={item.text} />
      </p>

      {item.image && (
        <div className="relative w-full h-64 mb-4">
          <Image
            src={item.image}
            alt="Post Image"
            layout="fill"
            className="object-cover rounded-lg"
          />
        </div>
      )}

      <div className="flex border-t border-b border-slate-500 py-2 items-center justify-between text-gray-500">
        <button className="flex items-center space-x-2 hover:text-blue-500">
          <div>
            {item.upvotesCount}{" "}
            <button onClick={() => handleUpvote(item._id)}> upvote</button>
          </div>
        </button>

        <button className="flex items-center space-x-2 hover:text-blue-500">
          <IoMdChatboxes />

          <CommentModal item={item} />
        </button>

        <button className="flex items-center space-x-2 hover:text-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12l4-4m0 0l4 4m-4-4v12"
            />
          </svg>
          <span> Shares</span>
        </button>
      </div>
      <div className="my-5">
        {item.comments.length > 0 && (
          <>
            {item.comments.slice(0, visibleComments).map((com: TCommnets) => (
              <CommentPage com={com} item={item} key={com._id} />
            ))}

            {visibleComments < item.comments.length && (
              <Button onClick={handleLoadMore}>Load More Comments</Button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default PostSection;
