/* eslint-disable @typescript-eslint/no-explicit-any */
import PostUpdateModal from "../Ui/modals/postUpdateModal";

import { TPost } from "@/types/types";
import Swal from "sweetalert2";
import { useDeletePostFromDbMutation } from "@/redux/app/featurs/api/post/postApi";

export default function EditAndDeleteApp({ item }: { item: TPost }) {
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
    <div className="flex items-center gap-5">
      <div>
        <PostUpdateModal item={item} />
      </div>
      <div>
        <button
          className="hover:bg-white rounded-full"
          onClick={() => handleDelete(item._id)}
        >
          {" "}
          X
        </button>
      </div>
    </div>
    // <Dropdown className="">
    //   <DropdownTrigger>
    //     <Button variant="bordered">
    //     </Button>
    //   </DropdownTrigger>
    //   <DropdownMenu aria-label="Static Actions">
    //     <DropdownItem className="text-black" color="primary">
    //       <Link href={`/user/dashboard/post/${item._id}`}> Edit file</Link>
    //     </DropdownItem>
    //     <DropdownItem key="delete" className="text-danger" color="danger">
    //       Delete file
    //     </DropdownItem>
    //   </DropdownMenu>
    // </Dropdown>
  );
}
