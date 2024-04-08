import Image from "next/image";
import React from "react";
import { NavItems } from "./NavItemList";
import NavItem from "./NavItem";
import Link from "next/link";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header className="flex flex-col">
      <div className="py-2 px-20 bg-primary flex items-center gap-5 justify-end">
        <Link href={"/callback"} className="underline text-background text-sm">
          Phone <span className="font-bold">02 8091 3036</span>
        </Link>
        <Button variant={"secondary"} size={"sm"}>
          Login
        </Button>
      </div>
      <nav className="flex items-center justify-between px-20 py-5 shadow">
        <Image
          src="https://cdn.bookingtimes.com/Common/LoadImage?Id=107223&v=5"
          width={150}
          height={150}
          alt="Right Choice Driving School Logo"
        />
        <div className="flex items-center gap-5">
          {NavItems.map((link, index) => (
            <NavItem key={index} href={link.href} name={link.name} />
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
