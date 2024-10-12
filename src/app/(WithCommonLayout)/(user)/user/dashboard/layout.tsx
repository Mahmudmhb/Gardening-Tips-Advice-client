"use client";
import { ReactNode } from "react";

import Container from "@/component/Ui/container";
import ProfileLayout from "@/component/Ui/Profile/profile";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <Container>
      <div className=" bg-[#18191a]  gap-12">
        <div className="w-5/6 mx-auto">
          <ProfileLayout />
        </div>
        <div className="w-5/6 mx-auto bg-[#18191a]   h-screen mt-10">
          {children}
        </div>
      </div>
    </Container>
  );
}
