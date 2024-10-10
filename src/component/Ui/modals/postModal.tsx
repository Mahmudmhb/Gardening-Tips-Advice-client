"use client";

import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import QuillEditor from "../postPageEditor";
import { TfiWrite } from "react-icons/tfi";

export default function PostModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} className="uppercase w-full p-0">
        <TfiWrite className="text-3xl  ml-3" />
        <Input
          isReadOnly
          className="bg-black"
          defaultValue="What's on your mind? "
        />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {() => (
            <>
              <ModalBody>
                <QuillEditor onCloseModal={() => onOpenChange()} />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
