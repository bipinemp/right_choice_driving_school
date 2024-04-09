"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type MblNavItemProps = {
  name: string;
  href: string;
};

const MblNavItem = ({ name, href }: MblNavItemProps) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={cn(
        "hover:bg-input flex items-center justify-center py-3 xl:text-[1rem] opacity-80 hover:opacity-100 transition duration-150",
        {
          "text-primary font-bold opacity-100": pathname === href,
        }
      )}
    >
      {name}
    </Link>
  );
};

export default MblNavItem;
