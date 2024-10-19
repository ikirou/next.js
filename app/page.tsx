import {
  Footer,
  HeaderNavigation,
  NavbarTop,
  PhoneCard,
  SliderHeader,
} from "@/components";
import { fetchData, mobile } from "@/utils";
import { useState } from "react";

export default async function Home() {
  const mobiles: [] = await fetchData();
  return (
    <main>
      <NavbarTop />
      <HeaderNavigation />
      <SliderHeader />
      <div className="md:border-[#106EBE] md:border-[1px] rounded-md md:p-8 md:m-4">
        <div className=" mx-4 my-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          {mobiles?.map((mobile: any) => (
            <div key={mobile.id}>
              <PhoneCard mobile={mobile} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
