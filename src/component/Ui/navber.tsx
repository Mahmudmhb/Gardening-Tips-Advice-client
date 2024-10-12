"use client";

import {
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

export default function Navber() {
  const user = useAppSelector(useCurrnetUser);
  return (
    <Navbar className="border-b">
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <p className=" sm:block font-bold text-inherit">MHB Garden</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className=" sm:flex gap-3">
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href}>
            <NextLink href={item.href}>{item.label}</NextLink>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        {user?.email ? (
          <>
            <NavbarDropdown />
          </>
        ) : (
          <>
            <NextLink className="text-green-600" href="/login">
              Login
            </NextLink>
          </>
        )}
      </NavbarContent>
    </Navbar>
  );
}
