import Image from "next/image";
import React from "react";
import HeroImg from "@/public/phone-img-rembac/A3-1RMB .png";
import OffreIcon from "@/public/other/50OFF.png";

function hero() {
  return (
    <div className="hero h-[400px] bg-blue-200">
      <div className="container">
        <div className="row relative flex justify-center items-center">
          <div className="hero-img flex">
            <Image
              src={OffreIcon}
              width={400}
              height={400}
              alt="offreocon"
            ></Image>
            <Image
              src={HeroImg}
              width={400}
              height={400}
              alt="heroimg"
              className="hidden md:block"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

export default hero;
