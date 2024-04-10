import Image from "next/image";
import document from "@/public/images/document.png";
import Link from "next/link";
import { ResourcesLists } from "./lists/ResourcesList";

const Resources = () => {
  return (
    <section className="flex flex-col items-center gap-10 my-20">
      <h1 className="font-black opacity-80 text-center text-[1.6rem] sm:text-[2rem]">
        NSW Driving Resources
      </h1>
      <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-4 gap-x-5 vsm:gap-x-10">
        {ResourcesLists.map((resource, index) => (
          <div className="flex flex-col gap-2 items-center" key={index}>
            <div className="relative size-[70px] md:size-[100px]">
              <Image
                src={document}
                fill
                alt="Document Resource Image"
                className="bg-primary rounded-full"
              />
            </div>
            <Link
              className="lg:text-[1rem] text-xs md:text-sm underline text-center opacity-90 transition duration-150 hover:text-secondary hover:opacity-100"
              href={resource.link}
            >
              {resource.name}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resources;
