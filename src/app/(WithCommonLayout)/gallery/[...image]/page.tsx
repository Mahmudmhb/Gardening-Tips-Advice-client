"use client";
import { useParams } from "next/navigation";

const PostDetails = () => {
  const params = useParams;
  console.log("params", params);
  return (
    <div>
      <h1>Hello, PostDetails!</h1>
    </div>
  );
};

export default PostDetails;
