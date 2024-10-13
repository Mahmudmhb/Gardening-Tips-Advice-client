/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
} from "@nextui-org/react";
import { FaTrash } from "react-icons/fa";
import {
  useDeletePostFromDbMutation,
  useGetAllPostQuery,
} from "@/redux/app/featurs/api/post/postApi";
import { TPost } from "@/types/types";
import Swal from "sweetalert2";

export default function App() {
  const { data } = useGetAllPostQuery(undefined);
  const postData = data?.data;
  const [handleUseDelete] = useDeletePostFromDbMutation();
  const handleDelete = async (postId: string) => {
    if (!postId) {
      console.error("Post ID is undefined");
      return;
    }
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to delete this post!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        console.log(postId);
        try {
          const res = await handleUseDelete({ postId }).unwrap();
          console.log("Post deleted successfully:", res);

          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your post has been deleted",
            showConfirmButton: false,
            timer: 1500,
          });
        } catch (error: any) {
          Swal.fire({
            title: "error!",
            text: `${error.data.message}`,
            icon: "error",
          });
        }
      }
    });
  };
  return (
    <Table
      aria-label="User Management Table"
      selectionMode="single"
      defaultSelectedKeys={["2"]}
      className=" text-[#e5e5e5] bg-[#18191a]  min-h-screen rounded-lg shadow-md"
    >
      <TableHeader>
        <TableColumn className="text-black">NAME</TableColumn>
        <TableColumn className="text-black">Description</TableColumn>
        <TableColumn className="text-black">Category</TableColumn>
        <TableColumn className="text-black">Premium</TableColumn>
        <TableColumn className="text-black">Actions</TableColumn>
      </TableHeader>
      <TableBody>
        {postData?.map((item: TPost) => (
          <TableRow key={item._id}>
            <TableCell className="text-black">{item.user.username}</TableCell>
            <TableCell className="text-black">{item.text}</TableCell>
            <TableCell className="text-black">{item.category}</TableCell>
            <TableCell className="text-black">
              {item.premium ? "Yes" : "No"}
            </TableCell>
            {/* Premium Status */}
            <TableCell className="text-black">
              <div className="relative text-black flex items-center gap-2">
                <Tooltip
                  onClick={() => handleDelete(item._id)}
                  color="danger"
                  content="Delete post"
                >
                  <span className="text-lg text-danger cursor-pointer active:opacity-50">
                    <FaTrash />
                  </span>
                </Tooltip>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
