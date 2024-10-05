"use client";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import QuillEditor from "../postPageEditor";

export default function PostModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} className="uppercase">
        create post
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent className="h-96">
          {() => (
            <>
              <ModalBody>
                <QuillEditor />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
