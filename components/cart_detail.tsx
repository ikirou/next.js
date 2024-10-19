"use client";
import Image from "next/image";
import phone_img from "@/public/phone-img-rembac/Xiaomi-Redmi-14C (1).png";
import { useEffect, useState } from "react";

const cart_detail = ({
  title,
  prix,
  quantity,
  soustotal,
  handlerIncrementQuantite,
  handlerDencrementQuantite,
}: {
  title: string;
  prix: number;
  quantity: number;
  soustotal: number;
  handlerIncrementQuantite: () => void;
  handlerDencrementQuantite: () => void;
}) => {
  /* const [quantityy, setQuantity] = useState(quantity);
 
  const handlerIncrementQuantite = () => {
    if (quantityy < 10) {
      setQuantity((prevcount) => prevcount + 1);
    }
  }; 
  const handlerDencrementQuantite = () => {
    if (quantity > 1) {
      setQuantity((prevcount) => prevcount - 1);
    }
  };*/

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-cenetr border-black border-[1px] rounded-lg bg-white p-4">
        <div className="flex flex-col  gap-2">
          <h5 className="item-title">Produit</h5>
          <hr className="w-[100%] h-[1px] hidden md:block" />
          <div className="flex flex-col md:flex-row justify-center items-center">
            <Image src={phone_img} alt="product img" width={100} height={100} />
            <h4>{title}</h4>
          </div>
        </div>
        <div className="cart-detail">
          <h5 className="item-title">Prix</h5>
          <hr className="w-[100%] h-[1px]" />
          <h6 className="item-detail">{`${prix} dh`}</h6>
        </div>
        <div className="cart-detail">
          <h5 className="item-title">Quantite</h5>
          <hr className="w-[100%] h-[1px]" />
          <div className="flex flex-row gap-[4px]">
            <button
              onClick={handlerDencrementQuantite}
              className="border-black border-[0.1px] rounded-sm w-[20px] h-[20px] flex justify-center items-center"
            >
              <span>-</span>
            </button>
            <span className=" px-1  rounded-full text-extrabold ">
              {quantity}
            </span>
            <button
              onClick={handlerIncrementQuantite}
              className="border-black border-[0.1px] rounded-sm w-[20px] h-[20px] flex justify-center items-center"
            >
              <span>+</span>
            </button>
          </div>
        </div>
        <div className="cart-detail">
          <h5 className="item-title">Sous-total</h5>
          <hr className="w-[100%] h-[1px]" />
          <h6 className="item-detail">{`${soustotal} dh`}</h6>
        </div>
      </div>
    </div>
  );
};

export default cart_detail;
