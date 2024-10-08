"use client";

import { useGetMyPostQuery } from "@/redux/app/featurs/api/post/postApi";
import PostSection from "./post/PostSection"; // Ensure correct path
import { TPost } from "@/types/types";
import PostModal from "@/component/Ui/modals/postModal";
import { ImProfile } from "react-icons/im";
import { useAppSelector } from "@/redux/app/hooks";
import { useCurrnetUser } from "@/redux/app/featurs/api/auth/authSlice";
import { FaHome, FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";

const ProfilePage = () => {
  const user = useAppSelector(useCurrnetUser);
  const { data, isLoading } = useGetMyPostQuery(undefined);

  const postData = data?.data;

  return (
    <div className="w-5/6 mx-auto">
      <div className="md:grid grid-cols-7 justify-evenly">
        <div className="col-span-3  space-y-5">
          <div>
            <h1>Intro</h1>
          </div>
          <div className="flex gap-3 items-center">
            <h1 className="text-2xl ">
              <ImProfile />
            </h1>
            <h1>Profile </h1>
          </div>
          <div className="flex gap-3 items-center">
            <h1 className="text-2xl ">
              <FaHome />
            </h1>
            <h1>Live in {user?.address} </h1>
          </div>
          <div className="flex gap-3 items-center">
            <h1 className="text-2xl ">
              <FaPhone />
            </h1>
            <h1> {user?.phone} </h1>
          </div>
          <div className="flex gap-3 items-center">
            <h1 className="text-2xl ">
              <FaLinkedin />
            </h1>
            <h1>{user?.username}</h1>
          </div>
          <div>
            <h1 className="border-b mb-2 text-xl">Photos</h1>
            <div>
              <div className="flex flex-wrap my-5 gap-4">
                {postData?.map((item: TPost) => (
                  <Card
                    shadow="sm"
                    key={item._id}
                    isPressable
                    onPress={() => console.log("item pressed")}
                  >
                    <CardBody className="overflow-visible p-0">
                      {item.image && (
                        <Image
                          shadow={"sm"}
                          radius="lg"
                          height={100}
                          width={100}
                          alt={item.text}
                          className="w-full object-cover h-[140px]"
                          src={item.image! || "/default-image.jpg"}
                        />
                      )}
                    </CardBody>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          {isLoading && <div>Loading...</div>}

          <h1>Create your post</h1>

          {/* Ensure postData is an array before mapping */}
          <div>
            <div className="w-full max-w-2xl p-4 rounded-md shadow-sm mx-auto mb-6">
              <div className="mb-4">
                <PostModal />
              </div>
            </div>
          </div>
          <div className="space-y-6 max-w-2xl mx-auto p-4">
            {postData?.map((item: TPost) => (
              <PostSection key={item._id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
