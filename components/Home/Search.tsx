"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { cn } from "@/lib/utils";
import { Check, SearchIcon } from "lucide-react";
import { useRef, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const SuburbList = [
  { name: "Surry Hills, NSW 2010", label: "Surry Hills, NSW 2010" },
  { name: "Bondi Beach, NSW 2026", label: "Bondi Beach, NSW 2026" },
  { name: "Newtown, NSW 2042", label: "Newtown, NSW 2042" },
  { name: "Manly, NSW 2095", label: "Manly, NSW 2095" },
  { name: "Paddington, NSW 2021", label: "Paddington, NSW 2021" },
  { name: "Glebe, NSW 2037", label: "Glebe, NSW 2037" },
  { name: "Balmain, NSW 2041", label: "Balmain, NSW 2041" },
  { name: "Parramatta, NSW 2150", label: "Parramatta, NSW 2150" },
  { name: "Cronulla, NSW 2230", label: "Cronulla, NSW 2230" },
  { name: "Randwick, NSW 2031", label: "Randwick, NSW 2031" },
  { name: "Mosman, NSW 2088", label: "Mosman, NSW 2088" },
  { name: "Leichhardt, NSW 2040", label: "Leichhardt, NSW 2040" },
  { name: "Chatswood, NSW 2067", label: "Chatswood, NSW 2067" },
  { name: "Dee Why, NSW 2099", label: "Dee Why, NSW 2099" },
  { name: "Coogee, NSW 2034", label: "Coogee, NSW 2034" },
  { name: "Bondi Junction, NSW 2022", label: "Bondi Junction, NSW 2022" },
  { name: "Double Bay, NSW 2028", label: "Double Bay, NSW 2028" },
  { name: "Darlinghurst, NSW 2010", label: "Darlinghurst, NSW 2010" },
  { name: "Maroubra, NSW 2035", label: "Maroubra, NSW 2035" },
  { name: "Pyrmont, NSW 2009", label: "Pyrmont, NSW 2009" },
  { name: "Rose Bay, NSW 2029", label: "Rose Bay, NSW 2029" },
  { name: "Neutral Bay, NSW 2089", label: "Neutral Bay, NSW 2089" },
  { name: "Kirribilli, NSW 2061", label: "Kirribilli, NSW 2061" },
  { name: "Vaucluse, NSW 2030", label: "Vaucluse, NSW 2030" },
  { name: "Lane Cove, NSW 2066", label: "Lane Cove, NSW 2066" },
  { name: "Hornsby, NSW 2077", label: "Hornsby, NSW 2077" },
  { name: "Ryde, NSW 2112", label: "Ryde, NSW 2112" },
  { name: "Castle Hill, NSW 2154", label: "Castle Hill, NSW 2154" },
  { name: "Sutherland, NSW 2232", label: "Sutherland, NSW 2232" },
  { name: "Hurstville, NSW 2220", label: "Hurstville, NSW 2220" },
  { name: "Blacktown, NSW 2148", label: "Blacktown, NSW 2148" },
  { name: "Auburn, NSW 2144", label: "Auburn, NSW 2144" },
  { name: "Lidcombe, NSW 2141", label: "Lidcombe, NSW 2141" },
  { name: "Bankstown, NSW 2200", label: "Bankstown, NSW 2200" },
  { name: "Liverpool, NSW 2170", label: "Liverpool, NSW 2170" },
  { name: "Campbelltown, NSW 2560", label: "Campbelltown, NSW 2560" },
  { name: "Penrith, NSW 2750", label: "Penrith, NSW 2750" },
  { name: "Parramatta, NSW 2150", label: "Parramatta, NSW 2150" },
  { name: "Burwood, NSW 2134", label: "Burwood, NSW 2134" },
  { name: "Strathfield, NSW 2135", label: "Strathfield, NSW 2135" },
];

const Search = () => {
  const [tab, setTab] = useState("auto");
  const [suburb, setSuburb] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  function handeSearchSubmit() {
    const data = {
      type: tab,
      suburb,
    };

    console.log(data);
  }

  return (
    <section className="my-10 flex flex-col gap-5">
      <h1 className="font-black opacity-70 text-center">
        Choose from <span className="text-primary">&nbsp;1000+&nbsp;</span>{" "}
        Driving Instructors
      </h1>
      <div className="py-3 px-10 border border-input shadow-md rounded-full w-fit mx-auto flex items-center justify-center gap-5">
        <Tabs
          value={tab}
          onValueChange={(e) => setTab(e)}
          defaultValue="account"
          className="w-[330px] h-auto"
        >
          <TabsList className="w-full h-auto grid grid-cols-2 bg-zinc-200">
            <TabsTrigger value="auto" className="flex items-center gap-2 py-2">
              <Check
                className={cn("size-5 text-green-500 opacity-40", {
                  "opacity-100": tab === "auto",
                })}
                strokeWidth={3}
              />
              Auto
            </TabsTrigger>
            <TabsTrigger
              value="manual"
              className="flex items-center gap-2 py-2"
            >
              <Check
                className={cn("size-5 text-green-500 opacity-40", {
                  "opacity-100": tab === "manual",
                })}
                strokeWidth={3}
              />
              Manual
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div>
          <Select
            onValueChange={(e) => setSuburb(e)}
            onOpenChange={() => {
              setTimeout(() => searchRef?.current?.focus(), 0);
            }}
          >
            <SelectTrigger
              className={cn("w-[350px] py-5 opacity-70", {
                "opacity-100": suburb !== "",
              })}
            >
              <SelectValue autoFocus={false} placeholder="Enter your suburb" />
            </SelectTrigger>
            <SelectContent>
              <div className="z-20 fixed top-0 my-2 pl-4 pr-6 bg-zinc-50 w-full h-[50px] flex justify-center items-center">
                <Input
                  ref={searchRef}
                  onChange={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                  }}
                  placeholder="Please enter a suburb or postcode..."
                />
              </div>
              <SelectGroup className="mt-[3.5rem] -z-0">
                {SuburbList.map((suburb, index) => (
                  <SelectItem
                    key={index}
                    value={suburb.name}
                    className="cursor-pointer py-3"
                  >
                    {suburb.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <Button onClick={handeSearchSubmit} className="flex items-center gap-2">
          <SearchIcon className="size-5" />
          Search
        </Button>
      </div>
    </section>
  );
};

export default Search;
