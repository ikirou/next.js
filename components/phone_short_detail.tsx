"use client";
import { CustomButton } from "@/components";
import phone_img from "@/public/phone-img-rembac/Xiaomi-Redmi-14C (1).png";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
} from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Fragment, useState } from "react";

interface mobileProbs {
  id: string;
  title: string;
  stockage: string;
  ram: string;
  battrie: string;
  camera: string;
}

function phone_short_details({
  isOpen,
  closeModal,
  mobile,
}: {
  isOpen: boolean;
  closeModal: () => void;
  mobile: mobileProbs;
}) {
  const route = useRouter();
  const handleRoute = () => {
    route.push(`http://localhost:3000/productpage/${mobile.id}`);
  };
  return (
    <>
      <Transition
        show={isOpen}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
        as={Fragment}
      >
        <Dialog onClose={closeModal}>
          <DialogPanel className="flex justify-center">
            <div className="bg-white  w-[95%] md:w-1/3 fixed top-20  rounded-md border-[1px] border-blue-500 p-3 mx-3">
              <div className="Phone_short_detail">
                <div className="phone_img flex justify-center ">
                  <Image
                    src={phone_img}
                    width={300}
                    height={300}
                    alt="phone img"
                  />
                </div>
                <div className="phone-short-info">
                  <h6 className="font-bold ">{`${mobile.title}`}</h6>
                  <ul>
                    <li className="flex justify-between">
                      <h3>Stockage</h3>
                      <span>{`${mobile.stockage} Go`}</span>
                    </li>
                    <hr className="w-[100%] h-[1px] bg-red-500" />
                    <li className="flex justify-between">
                      <h3>ram</h3>
                      <span>{`${mobile.ram} Go`}</span>
                    </li>
                    <hr className="w-[100%] h-[1px] bg-red-500" />
                    <li className="flex justify-between">
                      <h3>battrie</h3>
                      <span>{`${mobile.battrie} mAp`}</span>
                    </li>
                    <hr className="w-[100%] h-[1px] bg-red-500" />
                    <li className="flex justify-between">
                      <h3>camera</h3>
                      <span>{`${mobile.camera} MP`}</span>
                    </li>
                    <hr className="w-[100%] h-[1px] bg-red-500" />
                  </ul>
                </div>
              </div>
              <CustomButton
                title="Show Product"
                class_style="py-2 px-4 bg-blue-500  w-full my-4 rounded-md border-[1px] "
                HandleSubmit={handleRoute}
              />
            </div>
          </DialogPanel>
        </Dialog>
      </Transition>
    </>
  );
}

export default phone_short_details;
