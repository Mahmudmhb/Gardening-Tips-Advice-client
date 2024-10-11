"use client";
import { useGetAllPostQuery } from "@/redux/app/featurs/api/post/postApi";
import { TPost } from "@/types/types";
import { Button, Card, CardFooter } from "@nextui-org/react";
import Image from "next/image";

const ImageGallery = () => {
  const { data, isLoading } = useGetAllPostQuery(undefined);
  const gallary = data?.data;
  const filterImage = gallary?.filter((item: TPost) => item.image !== null);
  return (
    <div>
      {isLoading && (
        <>
          <div>
            <h1>loading..........</h1>
          </div>
        </>
      )}
      <div className="flex flex-wrap gap-4">
        {filterImage?.map((img: TPost) => (
          <Card
            key={img._id}
            isFooterBlurred
            className=" h-[300px] col-span-12 sm:col-span-5"
          >
            <Image
              alt={img.user.username}
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src={img.image! || "/"}
              height={300}
              width={300}
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <Button
                className="text-tiny"
                color="primary"
                radius="full"
                size="sm"
              >
                Notify Me
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
