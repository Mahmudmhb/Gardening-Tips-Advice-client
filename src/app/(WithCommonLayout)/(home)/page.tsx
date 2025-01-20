"use client";
import React from "react";

import HomeSideber from "@/component/Ui/HomeSideber/HomeSideber";
import ActiveSections from "@/component/Ui/HomeSideber/ActiveSections";
import { ScrollShadow } from "@nextui-org/react";
import { useAppSelector } from "@/redux/app/hooks";
import { useCurrnetUser } from "@/redux/app/featurs/api/auth/authSlice";
import Link from "next/link";
import PostFilterAndSearch from "@/component/Ui/filterAndSearch/FilterAndSearch";
const Home = () => {
  const user = useAppSelector(useCurrnetUser);

  return (
    <div className="md:grid lg:grid grid-cols-4 gap-10 min-h-screen">
      <div className="col-span-1 hidden md:flex lg:flex">
        <HomeSideber />
      </div>
      <ScrollShadow
        hideScrollBar
        className="space-y-6 w-full col-span-2 mx-auto p-4 "
      >
        <div>
          <div className="text-center my-5">
            {user?.verified === false && user.premium === true && (
              <h1>
                If you want to see Premium Post go to your Profile and{" "}
                <Link
                  href={"/user/dashboard"}
                  className="text-green-500 underline"
                >
                  Verify your profile
                </Link>
              </h1>
            )}
          </div>

          <PostFilterAndSearch />
        </div>
      </ScrollShadow>
      <div className="col-span-1 hidden md:flex lg:flex">
        <ActiveSections />
      </div>
    </div>
  );
};

export default Home;
