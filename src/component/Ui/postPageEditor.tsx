/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { Button } from "@nextui-org/react";
import { useCreatePostMutation } from "@/redux/app/featurs/api/post/postApi";
import { useAppSelector } from "@/redux/app/hooks";
import { useCurrnetUser } from "@/redux/app/featurs/api/auth/authSlice";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { uploadImage } from "@/utilis/imageBD";
import { toast } from "sonner";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface QuillEditorProps {
  onCloseModal: () => void; // Function to close the modal
}

const QuillEditor: React.FC<QuillEditorProps> = ({ onCloseModal }) => {
  const [editorHtml, setEditorHtml] = useState<string>("");
  const [createPost] = useCreatePostMutation();
  const loginUser = useAppSelector(useCurrnetUser);
  const { register, handleSubmit } = useForm();

  const categories = ["Vegetables", "Flowers", "Landscaping"];

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Post Creating", { duration: 1000 });
    const user = loginUser?._id;

    // Check if an image is uploaded
    if (data.image && data.image.length > 0) {
      try {
        const file = data.image[0] as any;
        const imageUrl = await uploadImage(file);
        data.image = imageUrl;
      } catch (error: any) {
        toast.error(error.data.message, { duration: 1000 });
        return;
      }
    } else {
      // No image uploaded
      data.image = null;
    }

    // Create the post object
    const postData = {
      text: editorHtml,
      category: data.category,
      image: data.image || null,
      user,
    };

    try {
      const res = await createPost(postData).unwrap();
      toast.success(`${res.message}`, { duration: 1000, id: toastId });
      onCloseModal(); // Close the modal on success
    } catch (error: any) {
      toast.error(error.data.message, { duration: 1000 });
    }
  };

  return (
    <div className=" mx-auto p-4 text-[#000810] space-y-6">
      <h1 className="text-xl text-[#000810] font-semibold mb-4 text-center">
        Create a New Post
      </h1>

      <ReactQuill
        value={editorHtml}
        onChange={setEditorHtml}
        className="border text-black rounded-md"
      />

      <div className="mt-4">
        <label
          htmlFor="category"
          className="block text-sm font-medium text-black"
        >
          Category
        </label>
        <select
          {...register("category")}
          className="border p-2 rounded-md w-full mt-2"
        >
          <option value="" className="text-black">
            Select Category
          </option>
          {categories.map((cat) => (
            <option key={cat} value={cat} className="text-gray-800">
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-gray-700 mb-2">Add Image</label>
        <input
          {...register("image")}
          type="file"
          accept="image/*"
          className="block w-full text-sm text-gray-500
                         file:mr-4 file:py-2 file:px-4
                         file:rounded-full file:border-0
                         file:text-sm file:font-semibold
                         file:bg-blue-50 file:text-blue-700
                         hover:file:bg-blue-100"
        />
      </div>

      <div className="mt-10">
        <Button
          className="p-2 text-red-600 font-bold w-full mt-5 rounded"
          onClick={handleSubmit(onSubmit)}
        >
          Post
        </Button>
      </div>
    </div>
  );
};

export default QuillEditor;
