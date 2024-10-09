"use client";
import Image from "next/image";
import UpdateModal from "../modals/updateUserModal";
import { SidebarOptions } from "@/component/sidebarOptions";
import { adminLinks, userLinks } from "@/component/constents";
import { useAppSelector } from "@/redux/app/hooks";
import { useCurrnetUser } from "@/redux/app/featurs/api/auth/authSlice";
import { Button } from "@nextui-org/react";
import { toast } from "sonner";
import { usePaymentOfVerifyMutation } from "@/redux/app/featurs/api/user/userApi";

const ProfileLayout = () => {
  const user = useAppSelector(useCurrnetUser);
  console.log(user);
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
      {/* Profile Header */}
      <div className="flex items-center space-x-4 p-4 border-b border-gray-300">
        <div className="w-24 h-24 relative">
          <Image
            src={user?.profilePicture as string}
            alt="Profile Picture"
            layout="fill"
            className="rounded-full object-cover"
          />
          {user?.verified === true && (
            <span className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold rounded-full px-2 py-1">
              Verified
            </span>
          )}
        </div>
        <div>
          <h1 className="text-3xl font-bold uppercase">{user?.username}</h1>

          <div className="flex justify-between gap-4">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Deserunt, voluptatem.
            </div>
            <div>
              {user?.verified === true ? (
                <Button color="success">Verified</Button>
              ) : (
                <>
                  {user?.premium === true && (
                    <Button onClick={() => handlePayment()}>
                      Verify your profile
                    </Button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Profile Tabs */}
      <div className="flex  justify-between  items-center">
        <div
          className="flex space-x-8 my-4
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

      {/* Post Section */}
      {/* <PostSection /> */}
    </div>
  );
};
export default ProfileLayout;
