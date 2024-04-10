import Image from "next/image";
import { NavItems } from "./NavItemList";
import NavItem from "./NavItem";
import Link from "next/link";
import { Button } from "../ui/button";
import MblNavbar from "./MblNavbar";

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 flex flex-col">
      <div className="py-2 px-10 bg-primary">
        <div className="max-w-[1920px] mx-auto 2xl:px-80 flex items-center gap-5 justify-end">
          <Link
            href={"/callback"}
            className="underline text-background text-xs vsm:text-sm"
          >
            Phone <span className="font-bold">02 8091 3036</span>
          </Link>
          <Button variant={"secondary"} size={"sm"}>
            Login
          </Button>
        </div>
      </div>

      <nav className="bg-background/95 backdrop-blur px-10 py-5 shadow">
        <div className="max-w-[1920px] mx-auto 2xl:px-80 flex items-center justify-between">
          <Image
            src="https://cdn.bookingtimes.com/Common/LoadImage?Id=107223&v=5"
            width={120}
            height={120}
            alt="Right Choice Driving School Logo"
          />
          <div className="hidden mmd:flex items-center gap-4 xl:gap-5">
            {NavItems.map((link, index) => (
              <NavItem key={index} href={link.href} name={link.name} />
            ))}
          </div>
          <div className="mmd:hidden block">
            <MblNavbar />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
