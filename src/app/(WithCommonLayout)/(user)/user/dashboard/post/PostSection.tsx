/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import Image from "next/image";
import { TCommnets, TPost } from "@/types/types";
import HtmlContent from "@/component/Ui/Html/htmlContent";
import CommentModal from "@/component/Ui/modals/commentModal";
import CommentPage from "@/component/Ui/comment/comment";
import EditAndDeleteApp from "@/component/dropdown/editAndDeleteDropdown";
import {
  useCreateCommentMutation,
  useUpvotePostMutation,
} from "@/redux/app/featurs/api/post/postApi";
import { toast } from "sonner";
import { Input } from "@nextui-org/react";
import { IoMdChatboxes, IoMdImages } from "react-icons/io";
import { MdVerified, MdOutlineEmojiEmotions } from "react-icons/md";
import { FiVideo } from "react-icons/fi";
import NextLink from "next/link";
import { useCurrnetUser } from "@/redux/app/featurs/api/auth/authSlice";
import { useAppSelector } from "@/redux/app/hooks";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import ShareModal from "@/component/Ui/modals/shareModel";
import PostMenu from "@/component/PostMenu/PostMenu";

const PostSection = ({ item }: { item: TPost }) => {
  const { register, handleSubmit } = useForm<TCommnets>();
  const [createComment] = useCreateCommentMutation();
  const loginUser = useAppSelector(useCurrnetUser);
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

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const commentData = {
      postID: item._id,
      commentText: data.comment,
    };
    try {
      const res = await createComment(commentData).unwrap();
      toast.success(`${res.message}`, { duration: 1000 });
    } catch (error: any) {
      toast.error(error.data.message, { duration: 1000 });
    }
  };

  return (
    <div className="text-[#dddfe4] bg-[#242526] my-5 p-2 md:p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center space-x-4 mb-4">
        <div className="flex items-center gap-5">
          <div className="w-12 h-12 relative">
            <Image
              src={item.user.profilePicture || "/default-image.jpg"}
              alt={item?.user?.username}
              layout="fill"
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <NextLink
                href={`/profile/${item.user.username}/${item.user._id}`}
              >
                <p className="font-semibold">{item.user.username}</p>
              </NextLink>
              {item.user.verified && (
                <MdVerified className="text-white text-xl" />
              )}
            </div>
            <p className="text-sm text-gray-500">
              {new Date(item.createdAt!).toLocaleTimeString("en-US", {
                hour12: false,
              })}{" "}
              time
            </p>
          </div>
        </div>

        <div className="flex gap-1 items-center">
          {item.user.email === loginUser?.email && (
            <EditAndDeleteApp item={item} />
          )}
          <PostMenu item={item} />
        </div>
      </div>

      <p className="mb-4">
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
        <button
          onClick={() => handleUpvote(item._id)}
          className="flex items-center space-x-2 hover:text-blue-500"
        >
          <span>{item.upvotesCount}</span>
          <span>Upvote</span>
        </button>

        <button className="flex items-center space-x-2 hover:text-blue-500">
          <span>{item.comments?.length}</span>
          <IoMdChatboxes />
          <CommentModal item={item} />
        </button>

        <button
          // onClick={() => handleFavorite(item._id)}
          className="flex items-center space-x-2 hover:text-blue-500"
        >
          <span className="flex gap-2 items-center">
            <ShareModal post={item} />
          </span>
        </button>
      </div>

      <div className="my-5">
        {item.comments.length > 0 && (
          <>
            {item.comments.slice(0, visibleComments).map((com: TCommnets) => (
              <CommentPage com={com} item={item} key={com._id} />
            ))}
            {visibleComments < item.comments.length && (
              <button
                className="text-sm text-gray-500 hover:text-blue-500"
                onClick={handleLoadMore}
              >
                Load More Comments
              </button>
            )}
          </>
        )}

        <div className="mt-4 flex items-center space-x-3">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full items-center space-x-2"
          >
            <Input
              classNames={{
                base: "w-full h-8",
                mainWrapper: "h-full",
                input: "text-small",

                inputWrapper:
                  "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
              }}
              placeholder="Write a comment..."
              size="sm"
              {...register("comment")}
            />

            <button type="button">
              <IoMdImages className="text-2xl text-gray-500 hover:text-blue-500" />
            </button>
            <button type="button">
              <FiVideo className="text-2xl text-gray-500 hover:text-blue-500" />
            </button>
            <button type="button">
              <MdOutlineEmojiEmotions className="text-2xl text-gray-500 hover:text-blue-500" />
            </button>
            <button
              type="submit"
              className=" text-gray-500 hover:text-blue-500"
            >
              Comment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostSection;
