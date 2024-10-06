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

export default function PostModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} className="uppercase w-full">
        <Input isReadOnly defaultValue="Whats on your mind? p-0" />
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
