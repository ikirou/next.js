"use client";
import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { FaCartShopping } from "react-icons/fa6";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

function header() {
  const route = useRouter();
  const [searchparams, setSearchparams] = useState("");
  const handleSearchParams = (e: any) => {
    e.preventDefault();
    route.push(`http://localhost:3000/searchpage?search=${searchparams}`);
  };

  return (
    <div className="header-main flex justify-center items-center md:h-[6rem]">
      <div className="container">
        <div className="row flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">
          <div className="header-logo">
            <Link href="/" className="font-bold text-[2rem] text-white">
              PHONE.MA
            </Link>
          </div>
          <div className="navigation-main flex  justify-center md:justify-between md:gap-8">
            <Link className="nav-link border-gray" href="/">
              Samsung
            </Link>{" "}
            <Link className="nav-link border-gray" href="/">
              Redmi
            </Link>
            <Link className="nav-link border-gray" href="/">
              Oppo
            </Link>
            <Link className="nav-link border-gray" href="/">
              Itel
            </Link>
            <Link className="nav-link border-gray" href="/">
              Infinix
            </Link>
          </div>
          <div className="search w-full  md:w-1/3">
            <form
              className="search-form w-full relative w-[80%] m-auto"
              onSubmit={handleSearchParams}
            >
              <input
                type="text"
                value={searchparams}
                placeholder="Recherche de produits, marques, sku..."
                className="search-field w-full px-2 py-3 rounded-md"
                onChange={(e) => setSearchparams(e.target.value)}
              ></input>
              <button
                type="submit"
                className="search-submit absolute right-2 top-3"
              >
                <CiSearch className="w-[25px] h-[25px]  hover:w-[30px] hover:h-[30px] hover:font-bold" />
              </button>
            </form>
          </div>
          <div className="signuup-checkout flex flex-row justify-between hidden md:block">
            <button className="mr-3">
              <VscAccount className=" text-white font-bold w-[30px] h-[30px]" />
            </button>
            <button>
              <FaCartShopping className="text-white font-bold w-[30px] h-[30px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default header;
