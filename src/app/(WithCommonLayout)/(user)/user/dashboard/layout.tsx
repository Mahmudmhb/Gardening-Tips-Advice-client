"use client";
import { ReactNode } from "react";

import Container from "@/component/Ui/container";
import ProfileLayout from "@/component/Ui/Profile/profile";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <Container>
      <div className="my-3  w-full gap-12">
        <div className="">
          {/* <Sidebar />
           */}
          <ProfileLayout />
        </div>
        <div className="w-full">{children}</div>
      </div>
    </Container>
  );
}
