/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { CiMenuKebab } from "react-icons/ci";
import { TPost } from "@/types/types";
import {
  useDeletePostFromDbMutation,
  useFavoritePostMutation,
} from "@/redux/app/featurs/api/post/postApi";
import Swal from "sweetalert2";
import { useAppSelector } from "@/redux/app/hooks";
import { useCurrnetUser } from "@/redux/app/featurs/api/auth/authSlice";
import Link from "next/link";
import { toast } from "sonner";

export default function PostMenu({ item }: { item: TPost }) {
  const [FavoritePost] = useFavoritePostMutation();

  const [handleUseDelete] = useDeletePostFromDbMutation();

  const loginUser = useAppSelector(useCurrnetUser);
  console.log(loginUser);

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
        try {
          await handleUseDelete({ postId }).unwrap();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your post has been deleted",
            showConfirmButton: false,
            timer: 1500,
          });
        } catch (error: any) {
          Swal.fire({
            title: "Error!",
            text: `${error.data.message}`,
            icon: "error",
          });
        }
      }
    });
  };
  const handleFavorite = async (postId: string) => {
    try {
      const res = await FavoritePost({ postId }).unwrap();
      console.log(res);
      toast.success(`${res.message}`, { duration: 1000 });
    } catch (error: any) {
      toast.error(error.data.message, { duration: 10000 });
      console.log(error.message);
    }
  };
  return (
    <Dropdown>
      <DropdownTrigger>
        <button>
          <CiMenuKebab />
        </button>
      </DropdownTrigger>
      <DropdownMenu
        style={{
          backgroundColor: "#242526",
          color: "#dddfe4",
          border: "none",
        }}
      >
        <DropdownItem key="new">
          <Link href="/user/dashboard">New file</Link>
        </DropdownItem>
        <DropdownItem key="copy">Copy link</DropdownItem>

        {loginUser?.email === item?.user.email ? (
          <DropdownItem
            onClick={() => handleDelete(item._id)}
            key="delete"
            className="text-danger"
            color="danger"
          >
            Delete post
          </DropdownItem>
        ) : (
          <DropdownItem key="save" onClick={() => handleFavorite(item._id)}>
            Save post
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
}
