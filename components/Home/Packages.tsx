import React from "react";
import { PackagesList } from "./lists/PackagesList";
import Image from "next/image";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const Packages = () => {
  return (
    <section className="flex flex-col gap-10 items-center my-20">
      <h1 className="font-black opacity-80 text-center text-[1.6rem] sm:text-[2rem]">
        Test Packages
      </h1>
      <div className="grid grid-cols-1 gap-y-10 vvsm:grid-cols-2 justify-center items-center gap-x-5 md:gap-x-20">
        {PackagesList.map((pack, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-primary/50 to-primary max-w-[350px] text-background h-[450px] py-6 rounded-lg border border-input shadow flex flex-col items-center justify-between"
          >
            <Image src={pack.img} width={100} height={100} alt="Package Icon" />
            <div className="w-full flex flex-col">
              {pack.desc.map((desc, index) => (
                <p
                  key={index}
                  className={cn(
                    "font-semibold text-center py-2 px-4 opacity-90 md:text-sm text-[0.8rem]",
                    {
                      "border-t border-t-zinc-300 border-b border-b-zinc-300":
                        index === 0 || index + 1 === pack.desc.length,
                      "border-b border-b-zinc-300":
                        index + 1 !== pack.desc.length - 1,
                    }
                  )}
                >
                  {desc}
                </p>
              ))}
            </div>
            <h1 className="font-bold opacity-80">{pack.price}</h1>
            <Button size={"lg"} className="bg-secondary text-lg">
              Buy Now
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;
