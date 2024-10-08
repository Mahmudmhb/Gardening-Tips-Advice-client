import React from "react";
import Image from "next/image";
import { TPost } from "@/types/types";
import HtmlContent from "@/component/Ui/Html/htmlContent";
import { FaEdit } from "react-icons/fa";

const PostSection = ({ item }: { item: TPost }) => {
  return (
    <div className="bg-slate-200 text-[#000810] p-4 rounded-lg shadow-md">
      {/* User Info */}
      <div className="flex justify-between items-center space-x-4 mb-4">
        <div>
          <div className="w-12 h-12 relative">
            <Image
              src={item.image! || "/default-image.jpg"}
              alt={item?.user?.username}
              layout="fill"
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <p className="font-semibold">{item?.user?.username as string}</p>
            <p className="text-sm text-gray-500">2 hours ago</p>
          </div>
        </div>
        <div>
          <FaEdit />
        </div>
      </div>

      {/* Post Content */}
      <p className="mb-4 text-gray-800">
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

      {/* Engagement Section */}
      <div className="flex items-center justify-between text-gray-500">
        {/* Likes Button */}
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
              d="M14 9l6 6-6 6M10 9H4v12h6l10-10-6-6"
            />
          </svg>
          <span>{item.upvotesCount} upvote</span>
        </button>

        {/* Comments Button */}
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
              d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m-3-6v6m0 6a9 9 0 110-18 9 9 0 010 18z"
            />
          </svg>
          <span> Comments</span>
        </button>

        {/* Share Button */}
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
    </div>
  );
};

export default PostSection;
