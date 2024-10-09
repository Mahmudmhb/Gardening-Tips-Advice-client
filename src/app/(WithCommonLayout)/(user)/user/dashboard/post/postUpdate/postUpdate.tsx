/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { Button } from "@nextui-org/react";
import { useUpdatePostInDbMutation } from "@/redux/app/featurs/api/post/postApi";
import { useAppSelector } from "@/redux/app/hooks";
import { useCurrnetUser } from "@/redux/app/featurs/api/auth/authSlice";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { uploadImage } from "@/utilis/imageBD";
import { toast } from "sonner";

import { TPost } from "@/types/types";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const UpdatePostPage = ({ item }: { item: TPost }) => {
  const [editorHtml, setEditorHtml] = useState<string>(item.text);
  const [updatePostMutation] = useUpdatePostInDbMutation();
  const loginUser = useAppSelector(useCurrnetUser);
  const { register, handleSubmit } = useForm();

  const categories = ["Vegetables", "Flowers", "Landscaping"];

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    toast.loading("Post updating", { duration: 1000 });
    const user = loginUser?._id;

    if (data.image && data.image.length > 0) {
      try {
        const file = data.image[0] as any;
        const imageUrl = await uploadImage(file);
        data.image = imageUrl;
      } catch (error: any) {
        toast.error(error.data.message, { duration: 3000 });
        return;
      }
    } else {
      // No image uploaded
      data.image = null;
    }

    const postData = {
      text: editorHtml || item.text,
      category: data.category || item.category,
      image: data.image || item.image,
      premium: data.premium || item.premium,
      user,
    };
    const arts = {
      postID: item._id,
      postData,
    };
    try {
      const res = await updatePostMutation(arts).unwrap();
      console.log("check", res);
      toast.success(`${res.message}`, { duration: 1000 });
    } catch (error: any) {
      toast.error(error.data.message, { duration: 1000 });
    }
  };

  return (
    <div className=" p-4 text-[#000810] bg-white mx-auto space-y-6">
      <h1 className="text-xl text-[#000810] font-semibold mb-4 text-center">
        Update Post
      </h1>

      <ReactQuill
        value={editorHtml}
        onChange={setEditorHtml}
        defaultValue={item.text}
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
            <option
              key={cat}
              value={cat}
              defaultValue={item.category}
              className="text-gray-800"
            >
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-black">
          Premium Content
        </label>
        <div className="flex items-center">
          <input type="checkbox" {...register("premium")} className="mr-2" />
          <span>Make this post premium</span>
        </div>
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
          Update Post
        </Button>
      </div>
    </div>
  );
};

export default UpdatePostPage;
