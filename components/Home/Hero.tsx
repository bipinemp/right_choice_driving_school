import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="relative my-5 flex items-center rounded">
      <div className="flex flex-col gap-5 z-10 w-[65%] py-16 pl-16">
        <h1 className="font-black opacity-80">
          Learn to Drive with Right Choice Driving School in Sydney.
        </h1>
        <p className="text-sm opacity-80 text-balance">
          Learn how to become a safe and knowledgeable driver with Right Choice
          Driving School. We offer professional automatic driving lessons and
          test support packages throughout Sydney.
        </p>
        <div className="flex flex-col gap-3">
          <Button className="py-6">Book Driving Lession</Button>
          <div className="flex items-center gap-5">
            <Button className="w-[210px] py-6" variant={"secondary"}>
              Book Safer Driver Course
            </Button>
            <Button className="w-[210px] py-6" variant={"secondary"}>
              Vouchers and Packages
            </Button>
          </div>
        </div>
      </div>
      <div className="-z-10 w-full aspect-video">
        <Image
          src={"https://cdn.bookingtimes.com/Common/LoadImage?Id=203941&v=1"}
          fill
          alt="Banner Image for website"
          className="absolute object-cover rounded"
        />
      </div>
    </section>
  );
};

export default Hero;
