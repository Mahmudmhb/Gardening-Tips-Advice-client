/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCreateCommentMutation } from "@/redux/app/featurs/api/post/postApi";
import { TCommnets, TPost } from "@/types/types";
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
import { toast } from "sonner";

const CommentModal = ({ item }: { item: TPost }) => {
  const [createComment] = useCreateCommentMutation();
  const { register, handleSubmit } = useForm<TCommnets>({
    defaultValues: {},
  });
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const arts = {
      postID: item._id,
      commentText: data.comment,
    };
    try {
      const res = await createComment(arts).unwrap();

      toast.success(`${res.message}`, { duration: 1000 });
    } catch (error: any) {
      console.log(error);
      // toast.error(error.data.message, { duration: 1000 });
    }
  };
  return (
    <div className="text-gray-500 hover:text-blue-500">
      <div onClick={onOpen}>Comments</div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <form onSubmit={handleSubmit(onSubmit)}>
                <ModalHeader className="flex text-center flex-col text-black gap-1">
                  Comment
                </ModalHeader>
                <ModalBody className="text-black">
                  <Textarea
                    {...register("comment")}
                    placeholder="Enter your Comments"
                    className="w-full"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button type="submit" onPress={onClose} color="primary">
                    Comment
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

export default CommentModal;
