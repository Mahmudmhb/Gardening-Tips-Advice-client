import {
  signUser,
  useCurrnetToken,
  useCurrnetUser,
} from "@/redux/app/featurs/api/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { FaEdit } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";
import { IUser } from "@/types/types";
import { useUpdateUserMutation } from "@/redux/app/featurs/user/userApi";
import { toast } from "sonner";

export default function UpdateModal() {
  const dispatch = useAppDispatch();
  const token = useAppSelector(useCurrnetToken);
  const user = useAppSelector(useCurrnetUser) as IUser;
  const [userUpdateIntoDb] = useUpdateUserMutation();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // Initialize the form with the user's current details
  const { register, handleSubmit } = useForm<IUser>({
    defaultValues: {
      username: user?.username || "",
      email: user?.email || "",
      phone: user?.phone || "",
      address: user?.address || "",
    },
  });

  // Handle form submission
  const onSubmit: SubmitHandler<IUser> = async (data) => {
    const userID = user?._id;
    const res = await userUpdateIntoDb({ userID, data }).unwrap();
    console.log("res", res.data);
    const userData = res.data;
    dispatch(signUser({ userData, token }));

    if (res?.success === true) {
      toast.success("Profile updated successfully!");

      onOpenChange();
    }
  };

  return (
    <>
      <Button onPress={onOpen}>
        <FaEdit />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <form onSubmit={handleSubmit(onSubmit)}>
              <ModalHeader className="flex flex-col gap-1">
                Update User Information
              </ModalHeader>
              <ModalBody>
                <Input
                  {...register("username")}
                  label="Username"
                  placeholder="Enter your username"
                  variant="bordered"
                />
                <Input
                  {...register("email")}
                  label="Email"
                  className="disabled"
                  disabled
                  placeholder="Enter your email"
                  variant="bordered"
                  type="email"
                />
                <Input
                  {...register("phone")}
                  label="Phone"
                  placeholder="Enter your phone number"
                  variant="bordered"
                />
                <Input
                  {...register("address")}
                  label="Address"
                  placeholder="Enter your address"
                  variant="bordered"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" type="submit">
                  Update
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
