"use client";

import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import { FaEdit } from "react-icons/fa";
import UpdatePostPage from "@/app/(WithCommonLayout)/(user)/user/dashboard/post/postUpdate/postUpdate";
import { TPost } from "@/types/types";

export default function PostUpdateModal({ item }: { item: TPost }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div onClick={onOpen} className="uppercase w-full p-0">
        <FaEdit />
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {() => (
            <>
              <ModalBody>
                <UpdatePostPage item={item} />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
