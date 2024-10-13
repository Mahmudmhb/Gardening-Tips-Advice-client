"use client";
import { ReactNode } from "react";
import { SidebarOptions } from "@/component/sidebarOptions";
import { useAppSelector } from "@/redux/app/hooks";
import { useCurrnetUser } from "@/redux/app/featurs/api/auth/authSlice";
import { adminLinks, userLinks } from "@/component/constents";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const user = useAppSelector(useCurrnetUser);

  return (
    <div className="flex flex-col lg:flex-row bg-[#18191a] min-h-screen">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/5 bg-gray-800 text-white p-5 lg:min-h-screen">
        <ul>
          <SidebarOptions
            links={
              user?.role !== undefined && user?.role === "admin"
                ? adminLinks
                : userLinks
            }
          />
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-full lg:w-4/5 p-5 lg:p-10">{children}</main>
    </div>
  );
};

export default DashboardLayout;
