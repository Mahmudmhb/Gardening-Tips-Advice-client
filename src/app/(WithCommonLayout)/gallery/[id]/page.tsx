"use client";

import { useGetSinglePostQuery } from "@/redux/app/featurs/api/post/postApi";
import { TCommnets } from "@/types/types";
import { Spinner } from "@nextui-org/react";
import { motion } from "framer-motion";
import Image from "next/image";

interface IProps {
  params: {
    id: string;
  };
}

const PostDetails = ({ params: { id } }: IProps) => {
  const { data, isLoading } = useGetSinglePostQuery({ id });
  if (isLoading) {
    <>
      <div className=" flex justify-center mx-auto">
        <Spinner
          label="L"
          className="text-center"
          color="primary"
          labelColor="primary"
        />
      </div>
    </>;
  }
  const gallaryImage = data?.data;

  return (
    <motion.div
      className=" bg-[#242526] w-11/12 mx-auto min-h-screen text-white p-4 md:p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold mb-4">Post Details</h1>

      <div className="bg-[#18191a] flex gap-5 rounded-lg shadow-md mb-6 p-4">
        <Image
          src={gallaryImage?.image}
          height={500}
          width={500}
          alt="Post Image"
          className="  rounded-lg mb-4 object-cover"
        />
        <div
          dangerouslySetInnerHTML={{ __html: gallaryImage?.text }}
          className="text-lg"
        />
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Posted by: {gallaryImage?.user.username}
        </h3>
        <p>Email: {gallaryImage?.user.email}</p>
        <p>Phone: {gallaryImage?.user.phone}</p>
        <p>Address: {gallaryImage?.user.address}</p>
      </div>

      <div className="bg-[#18191a] rounded-lg shadow-md p-4">
        <h3 className="text-lg font-semibold mb-2">Comments:</h3>
        {gallaryImage?.comments.length > 0 ? (
          gallaryImage?.comments.map((comment: TCommnets) => (
            <div
              key={comment._id}
              className="border-b border-gray-600 py-2 flex items-start"
            >
              <Image
                src={comment.user.profilePicture!}
                alt={`${comment.user.username}'s profile`}
                width={30}
                height={30}
                className="rounded-full mr-2"
              />
              <div>
                <strong className="text-sm">{comment.user.username}:</strong>
                <span className="text-sm text-gray-400">
                  {" "}
                  {comment.comment}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No comments yet.</p>
        )}
      </div>
    </motion.div>
  );
};

export default PostDetails;
