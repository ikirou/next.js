import Link from "next/link";
import React from "react";

function NavbarTop() {
  return (
    <div className="header-topbar grid grid-cols-2 md:h-[5rem] flex  items-center ">
      <div className=" header-left "></div>
      <div className="header-right hidden md:block ">
        <div className="topbar-navigation grid grid-cols-3">
          <ul className="menu-topbar-left flex flex-row gap-2 col-start-2 col-span-1">
            <li className="menu-item ">
              <Link href="/">(+212) 660046567</Link>
            </li>
            <li className="menu-item">
              <Link href="/">(+212) 660046567</Link>
            </li>
            <li className="menu-item border-none">
              <Link href="/">Adress</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavbarTop;
