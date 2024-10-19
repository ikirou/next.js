"use client";
import Image from "next/image";
import phone_img from "@/public/phone-img-rembac/Xiaomi-Redmi-14C (1).png";
import Link from "next/link";
import { CustomButton, PhoneShortDetail } from ".";
import { useState } from "react";
interface mobileProbs {
  id: string;
  title: string;
  stockage: string;
  ram: string;
  battrie: string;
  camera: string;
}

function phone_card({ mobile }: { mobile: mobileProbs }) {
  let [isOpen, setisOpen] = useState(false);

  return (
    <div className="Phone_Card group bg-white border-md rounded-md relative ">
      <div className="Phone_img ">
        <Image src={phone_img} width={500} height={500} alt="phone img" />
      </div>
      <div className="info flex flex-col justify-center items-center relative">
        <div className=" desktop_info hidden sm:block">
          <div className="info flex flex-row  gap-1 md:gap-2  ">
            <span className="flex flex-row">
              <h3 className="font-semibold">stockage :</h3>
              <span>{`${mobile.stockage} Go`}</span>
            </span>
            <span className="flex">
              <h3 className="font-semibold">ram :</h3>
              <span>{`${mobile.ram} Go`}</span>
            </span>
          </div>
        </div>
        <div className="info_mobile flex sm:hidden block gap-1">
          <h4 className="font-bold"> {`${mobile.stockage} Go`}</h4>
          <span className="font-extrabold"> - </span>
          <h4 className="font-bold">{`${mobile.ram} Go`}</h4>
        </div>
        <div className="Mobile_name bg-[#106EBE] px-1 py-2 w-full flex justify-center items-center ">
          <h6 className="font-extrabold text-white truncate ...">
            {mobile.title}
          </h6>
        </div>
        <div className=" hidden group-hover:block w-full  absolute top-6 ">
          <CustomButton
            title="more information.."
            class_style="py-2 px-4 bg-blue-500 text-[1.1rem] font-bold w-full "
            HandleSubmit={() => setisOpen(true)}
          />
        </div>
        <PhoneShortDetail
          isOpen={isOpen}
          mobile={mobile}
          closeModal={() => {
            setisOpen(false);
          }}
        />
      </div>
    </div>
  );
}
export default phone_card;
