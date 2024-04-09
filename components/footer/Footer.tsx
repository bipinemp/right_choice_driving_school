import Image from "next/image";
import { Button } from "../ui/button";
import { footerLists } from "./list/footerLists";
import Link from "next/link";
import { Facebook, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-y-10 items-center pt-10 bg-primary text-background">
      <div className="grid grid-cols-3 gap-x-10">
        <div className="flex flex-col gap-4 items-center">
          <Image
            src="https://cdn.bookingtimes.com/Common/LoadImage?Id=107504&v=1"
            width={200}
            height={200}
            alt="Right Choice Driving School Logo"
          />
          <Button className="bg-background text-foreground hover:bg-background/80">
            Book Now
          </Button>
        </div>

        <div className="flex flex-col gap-y-5">
          <h3 className="font-black opacity-90">Navigation</h3>
          <div className="flex flex-col gap-y-2">
            {footerLists.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="transition duration-150 hover:underline"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-y-5">
          <h3 className="font-black opacity-90">Contact Us</h3>
          <div className="flex flex-col gap-y-4">
            <Link
              className="flex items-center gap-2 transition duration-150 hover:underline"
              href={"/location"}
            >
              <MapPin className="size-5" />
              The Strand, NSW, Sydney.
            </Link>
            <Link
              className="flex items-center gap-2 transition duration-150 hover:underline"
              href={"/contact"}
            >
              <Mail className="size-5" />
              info@rightchoicedriving.com.au
            </Link>
            <Link
              className="flex items-center gap-2 transition duration-150 hover:underline"
              href={"/contact"}
            >
              <Phone className="size-5" />
              02 8091 3036
            </Link>
            <Link
              className="flex items-center gap-2 transition duration-150 hover:underline"
              href={"https://www.facebook.com/profile.php?id=61550803378173"}
            >
              <Facebook className="size-5" />
              Facebook
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3 w-full bg-background text-foreground text-center py-3">
        <Image
          src={"https://cdn.bookingtimes.com/Images/Home/BookingTimesLogo.png"}
          width={50}
          height={50}
          alt="Bookingtimes.com logo"
        />
        <Link
          className="transition duration-150 hover:underline"
          href={
            "https://bookingtimes.com/Complete-Driving-School-Software?b=rightchoicedriving.com.au"
          }
        >
          Powered by BookingTimes.com
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
