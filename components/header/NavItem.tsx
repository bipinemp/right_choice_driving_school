"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps = {
  name: string;
  href: string;
};

const NavItem = ({ name, href }: NavItemProps) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={cn("opacity-80 hover:opacity-100 transition duration-150", {
        "text-primary font-bold opacity-100": pathname === href,
      })}
    >
      {name}
    </Link>
  );
};

export default NavItem;
