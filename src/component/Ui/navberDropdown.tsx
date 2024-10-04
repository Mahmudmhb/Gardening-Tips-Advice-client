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

const NavbarDropdown = () => {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const user = useAppSelector(useCurrnetUser);

  // if (protectedRoutes.some((route) => pathname.match(route))) {
  //   router.push("/");
  // }

  const handleNavigation = (pathname: string) => {
    // router.push(pathname);
    console.log(pathname);
  };
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar className="cursor-pointer" src={user?.profilePicture} />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem onClick={() => handleNavigation("/profile")}>
          Profile
        </DropdownItem>
        <DropdownItem onClick={() => handleNavigation("/profile/settings")}>
          Settings
        </DropdownItem>
        <DropdownItem onClick={() => handleNavigation("/profile/create-post")}>
          Create Post
        </DropdownItem>
        <DropdownItem
          key="delete"
          className="text-danger"
          color="danger"
          onClick={() => handleLogout()}
        >
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
export default NavbarDropdown;
