/* eslint-disable @typescript-eslint/no-explicit-any */

import { useUpdateCommentMutation } from "@/redux/app/featurs/api/post/postApi";
import { TCommnets, TProps } from "@/types/types";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Textarea,
} from "@nextui-org/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FaEdit } from "react-icons/fa";
import { toast } from "sonner";

const UpdateCommentModal = ({ com, item }: TProps) => {
  const [updateComment] = useUpdateCommentMutation();
  const { register, handleSubmit } = useForm<TCommnets>({
    defaultValues: {},
  });
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const postID = item._id;

    const commentData = {
      commentId: com._id,
      commentText: data.comment,
    };

    try {
      const res = await updateComment({
        postID,
        ...commentData,
      }).unwrap();

      toast.success(`${res.message}`, { duration: 1000 });
    } catch (error: any) {
      toast.error(error.data.message, { duration: 1000 });
    }
  };

  return (
    <div className="text-black">
      <div className="text-white" onClick={onOpen}>
        <FaEdit />
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="">
          {(onClose) => (
            <>
              <form onSubmit={handleSubmit(onSubmit)}>
                <ModalHeader className="flex text-center flex-col text-black gap-1">
                  Update
                </ModalHeader>
                <ModalBody className="text-black">
                  <Textarea
                    {...register("comment")}
                    placeholder="Enter your Comments"
                    className="w-full"
                    defaultValue={com.comment}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button type="submit" onPress={onClose} color="primary">
                    update Comment
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default UpdateCommentModal;
