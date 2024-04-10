import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PricingList } from "./lists/PricingList";
import { cn } from "@/lib/utils";

const Pricing = () => {
  return (
    <section className="flex flex-col gap-20 items-center my-20">
      <h1 className="font-black opacity-80 text-center text-[1.6rem] sm:text-[2rem]">
        Pricing
      </h1>
      <div className="grid grid-cols-1 vsm:grid-cols-2 mmd:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
        {PricingList.map((pricing, index) => (
          <div
            key={index}
            className="relative flex flex-col justify-between items-center gap-3 py-7 px-10 max-w-[280px] min-h-[420px] max-h-[450px] bg-zinc-50 border border-input rounded-lg"
          >
            <div className="w-full flex flex-col items-center mt-32">
              <div className="relative w-[60px] sm:w-[90px] aspect-square lg:w-[100px] sm:h-[100px]">
                <Image
                  src={pricing.img}
                  fill
                  alt=""
                  className={cn(
                    "z-20 text-primary stroke-primary fill-primary mix-blend-darken",
                    {
                      "bg-secondary": pricing.book,
                    }
                  )}
                />
              </div>
            </div>
            <div className="absolute max-w-[200px] h-[200px] mx-auto bg-secondary text-background left-0 right-0 -top-3 before:w-[8px] before:h-[0px] before:border-secondary/50 before:border-l-transparent before:border-r-transparent before:border-l-[6px]  before:border-b-[12px] before:border-r-[6px] before:-left-[0.35rem] before:bg-transparent before:absolute">
              <h1 className="flex items-center justify-center mt-8 font-black">
                {pricing.price}
              </h1>
              <div
                className="absolute -bottom-[0.1rem] w-[80px] h-0 
  border-l-[100px] border-l-transparent
  border-b-[70px] border-zinc-50
  border-r-[100px] border-r-transparent"
              ></div>
            </div>
            <h3 className="font-semibold text-primary text-[0.9rem] text-center">
              {pricing.title}
            </h3>
            <p className="font-semibold opacity-80 text-sm text-center text-[0.9rem]">
              {pricing.desc}
            </p>
            <Button>{pricing.button}</Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
