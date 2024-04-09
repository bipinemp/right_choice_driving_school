import Image from "next/image";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="relative my-5 flex items-center rounded">
      <div className="flex flex-col gap-5 z-10 w-full llg:w-[80%] px-5 llg:px-0 py-16 llg:pl-16">
        <h1 className="font-black text-[1.5rem] sm:text-[2rem] opacity-90 llg:opacity-80 llg:text-start text-center">
          Learn to Drive with Right Choice Driving School in Sydney.
        </h1>
        <p className="text-sm xvsm:opacity-95 llg:opacity-80 llg:text-start text-center font-normal xvsm:font-semibold llg:font-normal">
          Learn how to become a safe and knowledgeable driver with Right Choice
          Driving School. We offer professional automatic driving lessons and
          test support packages throughout Sydney.
        </p>
        <div className="w-full relative flex flex-col gap-3">
          <Button className="py-6">Book Driving Lession</Button>
          <div className="grid items-center grid-cols-1 gap-y-3 vvsm:grid-cols-2 gap-x-5">
            <Button className="py-6" variant={"secondary"}>
              Book Safer Driver Course
            </Button>
            <Button className="py-6" variant={"secondary"}>
              Vouchers and Packages
            </Button>
          </div>
        </div>
      </div>
      <div className="llg:hidden absolute top-10 -z-10 w-full aspect-video">
        <Image
          src={"https://cdn.bookingtimes.com/Common/LoadImage?Id=203941&v=1"}
          fill
          alt="Banner Image for website"
          className="object-cover rounded blur-sm"
        />
      </div>
      <div className="hidden llg:block -z-10 w-full aspect-video">
        <Image
          src={"https://cdn.bookingtimes.com/Common/LoadImage?Id=203941&v=1"}
          fill
          alt="Banner Image for website"
          className="object-cover rounded"
        />
      </div>
    </section>
  );
};

export default Hero;
