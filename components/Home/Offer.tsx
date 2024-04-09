import Image from "next/image";
import { offerList } from "./lists/OfferList";

const Offer = () => {
  return (
    <section className="flex flex-col gap-24 items-center my-20">
      <h1 className="font-black opacity-80">What We Offer</h1>
      <div className="grid grid-cols-3 gap-y-20 gap-x-7">
        {offerList.map((offer, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center gap-3 py-7 px-10 rounded-lg border border-input shadow-md group transition duration-150 hover:bg-zinc-50 cursor-pointer"
          >
            <Image
              src={offer.img}
              width={100}
              height={100}
              alt="Offer Image"
              className="group-hover:scale-[1.1] transition duration-200 ease-in-out absolute object-contain -top-14"
            />
            <div className="flex flex-col gap-3 mt-6 items-center">
              <h2 className="font-semibold opacity-80">{offer.name}</h2>
              <p className="text-sm opacity-80 text-center">
                {offer.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offer;
