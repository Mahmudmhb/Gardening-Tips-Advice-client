/* eslint-disable @typescript-eslint/no-explicit-any */
import PostUpdateModal from "../Ui/modals/postUpdateModal";

import { TPost } from "@/types/types";

export default function EditAndDeleteApp({ item }: { item: TPost }) {
  return (
    <div className="flex items-center gap-5">
      <div>
        <PostUpdateModal item={item} />
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
