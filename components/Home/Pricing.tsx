import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PricingList } from "./lists/PricingList";
import { cn } from "@/lib/utils";

const Pricing = () => {
  return (
    <section className="flex flex-col gap-20 items-center my-20">
      <h1 className="font-black opacity-80">Pricing</h1>
      <div className="grid grid-cols-4 gap-x-5">
        {PricingList.map((pricing, index) => (
          <div
            key={index}
            className="relative flex flex-col justify-between items-center gap-3 py-7 px-10 w-[300px] h-[420px] bg-zinc-50 border border-input rounded-lg"
          >
            <div className="w-full flex flex-col items-center mt-32">
              <Image
                src={pricing.img}
                width={100}
                height={100}
                alt=""
                className={cn(
                  "z-20 text-primary stroke-primary fill-primary mix-blend-darken",
                  {
                    "bg-secondary": pricing.book,
                  }
                )}
              />
            </div>
            <div className="absolute w-[200px] h-[200px] mx-auto bg-secondary text-background left-0 right-0 -top-3 before:w-[8px] before:h-[0px] before:border-secondary/50 before:border-l-transparent before:border-r-transparent before:border-l-[6px]  before:border-b-[12px] before:border-r-[6px] before:-left-[0.35rem] before:bg-transparent before:absolute">
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
            <h3 className="font-semibold text-primary">{pricing.title}</h3>
            <p className="font-semibold opacity-80 text-sm">{pricing.desc}</p>
            <Button>{pricing.button}</Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
