import Hero from "@/components/Home/Hero";
import Offer from "@/components/Home/Offer";
import Pricing from "@/components/Home/Pricing";
import Search from "@/components/Home/Search";
import Why from "@/components/Home/Why";

export default function Page() {
  return (
    <main className="mt-44">
      <Search />
      <Hero />
      <Why />
      <Offer />
      <Pricing />
    </main>
  );
}
