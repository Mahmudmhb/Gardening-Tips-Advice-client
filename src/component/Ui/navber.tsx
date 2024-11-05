"use client";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import NextLink from "next/link";
import NavbarDropdown from "./navberDropdown";
import { useAppSelector } from "@/redux/app/hooks";
import { useCurrnetUser } from "@/redux/app/featurs/api/auth/authSlice";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { MdMenu } from "react-icons/md";

export default function Navber() {
  const user = useAppSelector(useCurrnetUser);
  return (
    <Navbar className="border-b">
      <div className="lg:hidden  md:hidden sm:flex">
        <NavbarContent justify="start">
          <Dropdown placement="bottom-end" className="text-black">
            <DropdownTrigger>
              <MdMenu />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              {siteConfig.navItems.map((item) => (
                <DropdownItem key={item.href}>
                  <NextLink href={item.href}>{item.label}</NextLink>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </div>
      <NavbarContent justify="start">
        <NavbarBrand>
          <Link href="/">
            <p className="font-bold text-inherit hidden md:flex lg:flex">
              MHB Garden
            </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="center">
        <div className="hidden md:flex lg:flex  gap-3">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink href={item.href}>{item.label}</NextLink>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        {user?.email ? (
          <>
            <NavbarDropdown />
          </>
        ) : (
          <>
            <Button
              as={Link}
              className="text-white"
              href="/login"
              variant="flat"
            >
              Login
            </Button>
            {/* <NextLink className="text-green-600" >
              Login
            </NextLink> */}
          </>
        )}
      </NavbarContent>
    </Navbar>
  );
}
