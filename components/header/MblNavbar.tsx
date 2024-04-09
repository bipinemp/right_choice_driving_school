import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavItems } from "./NavItemList";
import MblNavItem from "./MblNavItem";
import Image from "next/image";

const MblNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="size-8" />
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="flex flex-col items-center p-0 justify-center"
      >
        <Image
          src="https://cdn.bookingtimes.com/Common/LoadImage?Id=107223&v=5"
          width={100}
          height={100}
          alt="Right Choice Driving School Logo"
        />

        <div className="w-full flex flex-col gap-y-0">
          {NavItems.map((link, index) => (
            <MblNavItem key={index} href={link.href} name={link.name} />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MblNavbar;
