import React from "react";
import Image from "next/image";
import { TPost } from "@/types/types";

// Sample Posts Data
const posts = [
  {
    id: 1,
    user: "John Doe",
    avatar: "/profile-picture.jpg", // Replace with user's avatar URL
    content:
      "This is a sample post. Just sharing my thoughts about React and Next.js. 🚀",
    postImage: "/post-image.jpg", // Replace with the post image URL (optional)
    likes: 120,
    comments: 45,
    shares: 10,
  },
  {
    id: 2,
    user: "Jane Smith",
    avatar: "/profile-picture2.jpg", // Replace with user's avatar URL
    content: "Had a great time exploring the city! 🏙️",
    postImage: "/post-image2.jpg", // Replace with the post image URL (optional)
    likes: 200,
    comments: 80,
    shares: 30,
  },
];

const PostSection = ({ item }: { item: TPost }) => {
  console.log("item got", item);
  return (
    <div className="space-y-6 max-w-2xl mx-auto p-4">
      {posts.map((post) => (
        <div key={post.id} className="bg-white p-4 rounded-lg shadow-md">
          {/* User Info */}
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 relative">
              <Image
                src={post.avatar}
                alt={`${post.user}'s avatar`}
                layout="fill"
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <p className="font-semibold">{post.user}</p>
              <p className="text-sm text-gray-500">2 hours ago</p>
            </div>
          </div>

          {/* Post Content */}
          <p className="mb-4 text-gray-800">{post.content}</p>

          {post.postImage && (
            <div className="relative w-full h-64 mb-4">
              <Image
                src={post.postImage}
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
              <span>{post.likes} Likes</span>
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
              <span>{post.comments} Comments</span>
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
              <span>{post.shares} Shares</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostSection;
