import Hero from "@/components/Home/Hero";
import Search from "@/components/Home/Search";
import Why from "@/components/Home/Why";

export default function Page() {
  return (
    <main className="mt-44">
      <Search />
      <Hero />
      <Why />
    </main>
  );
}
