"use client";
import { FaHome, FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { ImProfile } from "react-icons/im";
import { useAppSelector } from "@/redux/app/hooks";
import { useCurrnetUser } from "@/redux/app/featurs/api/auth/authSlice";
import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import { TPost } from "@/types/types";
import { useGetMyPostQuery } from "@/redux/app/featurs/api/post/postApi";
const AboutPage = () => {
  const { data } = useGetMyPostQuery(undefined);

  const postData = data?.data;
  const user = useAppSelector(useCurrnetUser);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-extrabold">Intro</h1>
        <div className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt,
          voluptatem.
        </div>
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
                      height={100}
                      width={100}
                      alt={item.text}
                      className="w-full object-cover h-[140px] rounded-lg"
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
  );
};

export default AboutPage;
