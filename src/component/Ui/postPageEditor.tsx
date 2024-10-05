"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import { Button } from "@nextui-org/react";
import { useCreatePostMutation } from "@/redux/app/featurs/api/post/postApi";
import { useAppSelector } from "@/redux/app/hooks";
import { useCurrnetUser } from "@/redux/app/featurs/api/auth/authSlice";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false }); // Dynamic import

const QuillEditor = () => {
  const [editorHtml, setEditorHtml] = useState<string>("");
  const [createPost] = useCreatePostMutation();
  const user = useAppSelector(useCurrnetUser);

  const handleChange = (html: string) => {
    setEditorHtml(html);
  };

  const handleSubmit = async () => {
    if (!user?._id) {
      console.error("User ID is missing.");
      return;
    }

    if (!editorHtml) {
      console.error("Text content is missing.");
      return;
    }

    const data = {
      user: user._id,
      text: editorHtml,
    };

    try {
      console.log(data);
      const res = await createPost(data).unwrap();
      console.log(res);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className=" mx-auto p-4 space-y-6">
      <h1 className="text-xl  font-semibold mb-4 text-center">
        Create a New Post
      </h1>
      <ReactQuill
        value={editorHtml}
        onChange={handleChange}
        className=" border rounded-md"
      />
      <div className="mt-10">
        <Button
          className="p-2  text-red-600 w-full mt-5 rounded"
          onClick={handleSubmit}
        >
          Post
        </Button>
      </div>
    </div>
  );
};

export default QuillEditor;
