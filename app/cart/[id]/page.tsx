"use client";
import { CartDetail, PaimentDetail } from "@/components";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function Cart() {
  const prix: number = 189;
  const pathname = usePathname();
  const quantity = parseInt(pathname.split("quantity")[1]);
  const pathnameid = pathname.split("quantity")[0];
  const productid = pathnameid.split("/cart/")[1];

  const [detail, setDetail] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [quantityy, setQuantity] = useState(quantity);
  const [soustotal, setSousTotal] = useState(prix);

  useEffect(() => {
    fetch(`http://localhost:3000/api/mobiles/${productid}`)
      .then((res) => res.json())
      .then((data) => {
        setDetail(data.mobile);
        setisLoading(true);
      });
  }, []);
  useEffect(() => {
    countSousToal(quantityy);
  }, [quantityy]);

  const handlerIncrementQuantite = () => {
    if (quantityy < 9) setQuantity((prevcount) => prevcount + 1);
  };
  const handlerDencrementQuantite = () => {
    if (quantityy > 1) {
      setQuantity((prevcount) => prevcount - 1);
    }
  };
  const countSousToal = (quantit: number): number => {
    const sousTotal = quantit * prix;
    setSousTotal(sousTotal);
    return sousTotal;
  };
  if (!isLoading)
    return (
      <div className="flex justify-center items-center">
        <span className="text-white font-extrabold text-[1rem]">
          {" "}
          Loading . . .
        </span>
      </div>
    );
  if (!detail)
    return (
      <div className="text-white font-extrabold text-[1rem]">Not Found!!!</div>
    );
  const {
    title,
    plateforme,
    typeecran,
    resolutionecran,
    processeur,
    stockage,
    ram,
    battrie,
    camera,
  } = detail;
  return (
    <div className="m-2">
      <div className="flex flex-col md:flex-row gap-8 ">
        <div className="w-full md:w-1/2">
          <CartDetail
            title={title}
            prix={prix}
            quantity={quantityy}
            handlerIncrementQuantite={handlerIncrementQuantite}
            handlerDencrementQuantite={handlerDencrementQuantite}
            soustotal={soustotal}
          />
        </div>
        <div className="w-full md:w-1/3">
          <PaimentDetail soustotal={soustotal} />
        </div>
      </div>
    </div>
  );
}

export default Cart;
