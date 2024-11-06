"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Avatar } from "@nextui-org/avatar";
import { protectedRoutes } from "@/utilis/constents";
import { usePathname, useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";

import Cookies from "js-cookie";
import { useEffect } from "react";
import {
  logoutUser,
  useCurrnetUser,
} from "@/redux/app/featurs/api/auth/authSlice";

const NavbarDropdown = () => {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const user = useAppSelector(useCurrnetUser);

  useEffect(() => {
    // Redirect to home if protected route and user is not authenticated
    if (protectedRoutes.some((route) => pathname.match(route)) && !user) {
      router.push("/");
    }
  }, [pathname, router, user]); // Add user as a dependency

  const handleNavigation = (pathname: string) => {
    console.log("Navigating to:", pathname); // Log navigation
    router.push(pathname);
  };

  const handleLogout = () => {
    router.push("/login");
    dispatch(logoutUser());
    Cookies.remove("token");
  };

  return (
    <Dropdown placement="bottom-end" className="text-black">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="secondary"
          name={user?.username || "User"}
          size="sm"
          src={user?.profilePicture}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-semibold">Signed in as</p>
          <p className="font-semibold">{user?.email || "Guest"}</p>
        </DropdownItem>
        <DropdownItem
          key={user?.role === "user" ? "user-settings" : "admin-settings"}
          onClick={() => {
            const profilePath =
              user?.role === "user" ? "/user/dashboard" : "/admin/dashboard";
            handleNavigation(profilePath); // Correctly navigate to the dashboard
          }}
        >
          My Profile
        </DropdownItem>
        <DropdownItem key="logout" color="danger" onClick={handleLogout}>
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default NavbarDropdown;
