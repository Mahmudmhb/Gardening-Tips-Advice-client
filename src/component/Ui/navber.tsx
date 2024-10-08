"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
} from "@nextui-org/react";
import { FaHome, FaSearch } from "react-icons/fa";
import NavbarDropdown from "./navberDropdown";

export default function Navber() {
  return (
    <Navbar isBordered>
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <p className=" sm:block font-bold text-inherit">MHB Garden</p>
        </NavbarBrand>
        <NavbarContent className=" sm:flex gap-3">
          <NavbarItem>
            <Link color="success" href="/">
              <FaHome className="text-2xl " />
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<FaSearch size={18} />}
          type="search"
        />
        <NavbarDropdown />
      </NavbarContent>
    </Navbar>
  );
}
