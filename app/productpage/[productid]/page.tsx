"use client";
import Image from "next/image";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import phone_img from "@/public/phone-img-rembac/Xiaomi-Redmi-14C (1).png";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CustomButton, PhoneCard } from "@/components";

function PageProduct() {
  const [detail, setDetail] = useState(null);
  const [data, setData] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const pathname = usePathname();
  const productid = pathname.split("/productpage/")[1];
  useEffect(() => {
    fetch(` http://localhost:3000/api/mobiles/${productid}`)
      .then((res) => res.json())
      .then((data) => {
        setDetail(data.mobile);
        setLoading(false);
      });

    fetch(`http://localhost:3000/api/mobiles`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.filterMobiles);
      });
  }, []);
  const route = useRouter();
  const addAuPanier = () => {
    route.push(`http://localhost:3000/cart/${productid}quantity${quantity}`);
  };
  const handlerIncrementQuantite = () => {
    if (quantity < 9) setQuantity((prevcount) => prevcount + 1);
  };
  const handlerDencrementQuantite = () => {
    if (quantity > 1) setQuantity((prevcount) => prevcount - 1);
  };

  if (Loading)
    return (
      <div className="flex justify-center items-center">
        <span className="text-white font-extrabold text-[1rem]">
          Loading...
        </span>
      </div>
    );
  if (!detail) return <div>Not Found ...</div>;
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
    <div className="w-[99.5%] m-auto">
      <div className="content bg-white flex flex-col md:flex-row   ">
        <div className="product-img w-full md:w-1/2 flex flex-col justify-center items-center ">
          <Image
            src={phone_img}
            alt="product img"
            className="h-[400px] w-[90%] max-w-[400px]"
          />
          <div className="prduct-garally flex flex-row gab-2">
            <Image
              src={phone_img}
              alt="product img"
              className="h-[100px] w-[90%] max-w-[100px]"
            />
            <Image
              src={phone_img}
              alt="product img"
              className="h-[100px] w-[90%] max-w-[100px]"
            />
            <Image
              src={phone_img}
              alt="product img"
              className="h-[100px] w-[90%] max-w-[100px]"
            />
          </div>
        </div>
        <div className="product-info bg-white flex flex-col gap-6 w-full md:w-1/2 px-4 py-2">
          <div className="info flex flex-col gap-3">
            <h6 className="title text-[2rem] md:text-[3rem] font-bold md:font-extrabold ">
              {title}
            </h6>
            <hr className="w-[50px] h-[8px] bg-black" />
            <h5 className="prix text-[2rem] font-bold  "> 2199 dh</h5>
            <h2 className="flex flex-row gap-2">
              {" "}
              :<span>smsung</span>
              <span>a05</span>
              <span>galaxy</span>
              <span>2024</span>
            </h2>
          </div>
          <div className="button add panier flex flex-row gap-8 md:gap-10">
            <div className="flex flex-row">
              <button
                className="btn_count"
                type="button"
                onClick={handlerDencrementQuantite}
              >
                -
              </button>
              <span className=" py-3 px-4 text-extrabold rounded-sm">
                {quantity}
              </span>
              <button
                className="btn_count"
                type="button"
                onClick={handlerIncrementQuantite}
              >
                +
              </button>
            </div>
            <CustomButton
              title=" Ajouter au panier"
              class_style="bg-blue-600 border-[0.5px] rounded-md border-gray-300  text-white font-bold py-2 px-6 text-nowrap"
              HandleSubmit={addAuPanier}
            />
          </div>
        </div>
      </div>
      <div className="table_full_iformation">
        <h6 className="flex justify-center py-3 ">
          <span className="font-extrabold text-white text-[2rem]">
            Caractéristiques
          </span>
        </h6>
        <TabGroup className="bg-white">
          <TabList>
            <Tab className="tab_style">Plateforme</Tab>
            <Tab className="tab_style">{plateforme}</Tab>
          </TabList>
          <TabList>
            <Tab className="tab_style">Type Ecran</Tab>
            <Tab className="tab_style">{typeecran}</Tab>
          </TabList>
          <TabList>
            <Tab className="tab_style">Resolution Ecran</Tab>
            <Tab className="tab_style">{resolutionecran}</Tab>
          </TabList>
          <TabList>
            <Tab className="tab_style">Processeur</Tab>
            <Tab className="tab_style">{processeur}</Tab>
          </TabList>
          <TabList>
            <Tab className="tab_style">Stockage</Tab>
            <Tab className="tab_style">{`${stockage} Go`}</Tab>
          </TabList>
          <TabList>
            <Tab className="tab_style">Ram</Tab>
            <Tab className="tab_style">{`${ram} Go`}</Tab>
          </TabList>
          <TabList>
            <Tab className="tab_style">Battrie</Tab>
            <Tab className="tab_style">{`${battrie} Go`}</Tab>
          </TabList>
          <TabList>
            <Tab className="tab_style">Camera</Tab>
            <Tab className="tab_style">{`${camera} MP`}</Tab>
          </TabList>
        </TabGroup>
      </div>
      <div className=" mx-4 my-4 grid grid-cols-2 md:grid-cols-5 gap-4">
        {data.map((mobile) => (
          <div key={mobile}>
            <PhoneCard mobile={mobile} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PageProduct;
