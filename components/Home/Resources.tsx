import Image from "next/image";
import document from "@/public/images/document.png";
import Link from "next/link";
import { ResourcesLists } from "./lists/ResourcesList";

const Resources = () => {
  return (
    <section className="flex flex-col items-center gap-10 my-20">
      <h1 className="font-black opacity-80">NSW Driving Resources</h1>
      <div className="grid grid-cols-4 gap-x-10">
        {ResourcesLists.map((resource, index) => (
          <div className="flex flex-col gap-2 items-center" key={index}>
            <Image
              src={document}
              width={100}
              height={100}
              alt="Document Resource Image"
              className="bg-primary rounded-full"
            />
            <Link
              className="underline opacity-90 transition duration-150 hover:text-secondary hover:opacity-100"
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
