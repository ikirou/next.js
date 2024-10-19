"use client";
import { Fragment, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

function add_products() {
  const AddPhone = async ({
    title,
    plateforme,
    typeecran,
    resolutionecran,
    processeur,
    stockage,
    ram,
    battrie,
    camera,
  }: {
    title: string;
    plateforme: string;
    typeecran: string;
    resolutionecran: string;
    processeur: string;
    stockage: string;
    ram: string;
    battrie: string;
    camera: string;
  }) => {
    const req = await fetch("http://localhost:3000/api/mobiles", {
      method: "POST",
      body: JSON.stringify({
        title,
        plateforme,
        typeecran,
        resolutionecran,
        processeur,
        stockage,
        ram,
        battrie,
        camera,
      }),
      //@ts-ignore
      " Content-yTpe": "Application/json",
    });
  };
  const titleRef = useRef<HTMLInputElement | null>(null);
  const plateformeRef = useRef<HTMLInputElement | null>(null);
  const typeecranRef = useRef<HTMLInputElement | null>(null);
  const resolutionecranRef = useRef<HTMLInputElement | null>(null);
  const processeurRef = useRef<HTMLInputElement | null>(null);
  const stockageRef = useRef<HTMLInputElement | null>(null);
  const ramRef = useRef<HTMLInputElement | null>(null);
  const battrieRef = useRef<HTMLInputElement | null>(null);
  const cameraRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (
      titleRef.current &&
      plateformeRef.current &&
      typeecranRef.current &&
      resolutionecranRef.current &&
      processeurRef.current &&
      stockageRef.current &&
      ramRef.current &&
      battrieRef.current &&
      cameraRef.current
    ) {
      toast.loading("Phone Add ... ", { id: "1" });

      await AddPhone({
        title: titleRef.current?.value,
        plateforme: plateformeRef.current?.value,
        typeecran: typeecranRef.current?.value,
        resolutionecran: resolutionecranRef?.current.value,
        processeur: processeurRef.current?.value,
        stockage: stockageRef.current?.value,
        ram: ramRef.current?.value,
        battrie: battrieRef.current?.value,
        camera: cameraRef.current?.value,
      });
      toast.success("Phone Added success", { id: "1" });
    }
  };
  return (
    <Fragment>
      <Toaster />
      <div className="flex flex-col justify-center items-center mt-4">
        <div className="bg-gray-400 p-4 md:p-8 flex flex-col  justify-center items-center rounded-md border-md w-full md:w-1/2 ">
          <form
            onSubmit={handleSubmit}
            className=" flex flex-col  justify-center items-center gap-4 w-full "
          >
            <h4 className="text-white text-white font-extrabold ">
              Add Product
            </h4>
            <input
              placeholder="phone name..."
              type="input"
              className="input_data"
              ref={titleRef}
            />
            <input
              placeholder="Plateforme..."
              type="input"
              className="input_data"
              ref={plateformeRef}
            />

            <input
              placeholder="Type Ecran..."
              type="input"
              className="input_data"
              ref={typeecranRef}
            />
            <input
              placeholder="Resolution Ecran..."
              type="input"
              className="input_data"
              ref={resolutionecranRef}
            />
            <input
              placeholder="processeur..."
              type="input"
              className="input_data"
              ref={processeurRef}
            />
            <input
              placeholder="phone stockage..."
              type="input"
              className="input_data"
              ref={stockageRef}
            />
            <input
              placeholder="phone ram..."
              type="input"
              className="input_data"
              ref={ramRef}
            />
            <input
              placeholder="battrie...mAh"
              type="input"
              className="input_data"
              ref={battrieRef}
            />
            <input
              placeholder="camera...MP"
              type="input"
              className="input_data"
              ref={cameraRef}
            />

            <div className="flex justify-end  w-full">
              <button type="submit">
                <h1 className="font-extrabold text-[01rem] rounded-sm bg-blue-500 px-4 py-2">
                  Done
                </h1>
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default add_products;
