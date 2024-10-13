"use client";
import UpdateModal from "../modals/updateUserModal";
import { SidebarOptions } from "@/component/sidebarOptions";
import { adminLinks, userLinks } from "@/component/constents";
import { useAppSelector } from "@/redux/app/hooks";
import { useCurrnetUser } from "@/redux/app/featurs/api/auth/authSlice";
import { Button } from "@nextui-org/react";
import { toast } from "sonner";
import { usePaymentOfVerifyMutation } from "@/redux/app/featurs/api/user/userApi";
import Image from "next/image";
import { MdVerified } from "react-icons/md";

const ProfileLayout = () => {
  const user = useAppSelector(useCurrnetUser);
  const [paymentInfo] = usePaymentOfVerifyMutation();
  const handlePayment = async () => {
    const payment = {
      amaount: 10,
    };
    const res = await paymentInfo({ payment }).unwrap();
    console.log(res);
    if (res.success === true) {
      toast.success("your payment is loading", { duration: 1000 });
      window.location.href = res.data.payment_url;
    }
  };
  return (
    <div className=" mx-auto p-4">
      <div className="md:flex items-center space-x-4 p-4 border-b border-gray-300">
        <div className=" relative">
          <Image
            src={user?.profilePicture as string}
            alt="Profile Picture"
            className="rounded-full w-32 h-32 "
            width={100}
            height={100}
          />
          {user?.verified === true && (
            <span className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold rounded-full px-2 py-1">
              Verified
            </span>
          )}
        </div>
        <div>
          <h1 className="text-3xl flex gap-3 items-center font-bold uppercase">
            {user?.username}{" "}
            {user?.verified === true && (
              <div>
                <MdVerified className="text-[#31a24c] text-xl" />
              </div>
            )}
          </h1>
          <h1>
            {user?.followers?.length} followers • {user?.following?.length}{" "}
            following
          </h1>
        </div>
        <div className="flex justify-between gap-4">
          <div>
            {user?.verified === false && user.premium === true && (
              <Button onClick={() => handlePayment()}>
                Verify your profile
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="flex  flex-wrap justify-between  items-center">
        <div
          className="md:flex  space-x-8 my-4
          pb-2 "
        >
          <SidebarOptions
            links={
              user?.role !== undefined && user?.role === "user"
                ? userLinks
                : adminLinks
            }
          />
        </div>
        <div>
          <UpdateModal />
        </div>
      </div>
    </div>
  );
};
export default ProfileLayout;
