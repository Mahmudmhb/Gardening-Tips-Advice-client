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
import {
  logoutUser,
  useCurrnetUser,
} from "@/redux/app/featurs/api/auth/authSlice";
import Cookies from "js-cookie";
const NavbarDropdown = () => {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const user = useAppSelector(useCurrnetUser);

  if (protectedRoutes.some((route) => pathname.match(route))) {
    router.push("/");
  }

  const handleNavigation = (pathname: string) => {
    router.push(pathname);
    console.log(pathname);
  };
  const handleLogout = () => {
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
          name="Jason Hughes"
          size="sm"
          src={user?.profilePicture}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-semibold">Signed in as</p>
          <p className="font-semibold">{user?.email}</p>
        </DropdownItem>
        <DropdownItem
          key="settings"
          onClick={() => handleNavigation("/user/dashboard")}
        >
          My Profile
        </DropdownItem>
        <DropdownItem key="team_settings">Team Settings</DropdownItem>
        <DropdownItem key="analytics">Analytics</DropdownItem>
        <DropdownItem key="system">System</DropdownItem>

        <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
        <DropdownItem
          key="logout"
          color="danger"
          onClick={() => handleLogout()}
        >
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
export default NavbarDropdown;
