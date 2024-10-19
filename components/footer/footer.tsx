import Link from "next/link";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { IoMdTime } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { RiTelegramFill } from "react-icons/ri";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
function footer() {
  return (
    <div className="footer bg-[#1061a3]">
      <div className="container mx-auto">
        <div className="row">
          <div className="footer-main grid md:grid-cols-4 text-white">
            <div className="footer-widget contact-us">
              <div className="header-logo">
                <Link
                  href="/"
                  className="font-extrabold text-[3rem] text-black"
                >
                  PHONE.MA
                </Link>
                <ul>
                  <li className="flex menu-item-footer">
                    <span className="pr-2">
                      <CiLocationOn />
                    </span>
                    <span>
                      Magasin 48 jazirat al arb , Avenue almghrib al3arabi rabat
                    </span>
                  </li>
                  <li className="flex menu-item-footer">
                    <span className="pr-2">
                      {" "}
                      <FaPhone />
                    </span>
                    <span>(+212) 660046567</span>
                  </li>
                  <li className="flex menu-item-footer">
                    <span className="pr-2">
                      <TfiEmail />
                    </span>
                    <span>contact@phone.ma</span>
                  </li>
                  <li className="flex menu-item-footer">
                    <span className="pr-2">
                      <IoMdTime />
                    </span>
                    Lundi à Samedi/ 9:00 AM - 7:00 PM
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-widget Aide-Information  md:flex-col ">
              <h3 className="text-extrabold text-[2rem]">Aide & Information</h3>
              <ul className="menu-footer gap-4 ">
                <li className="menu-item-footer">
                  <Link className="menu-link" href="/">
                    Guides d’achat sur phone.ma
                  </Link>
                </li>
                <li className="menu-item-footer ">
                  <Link className="menu-link" href="/">
                    Livraison et Délais
                  </Link>
                </li>
                <li className="menu-item-footer">
                  <Link className="menu-link" href="/">
                    Modes de Paiement
                  </Link>
                </li>
                <li className="menu-item-footer ">
                  <Link className="menu-link " href="/">
                    Politique de confidentialité
                  </Link>
                </li>
                <li className="menu-item-footer">
                  <Link className="menu-link" href="/">
                    Politique de garantie
                  </Link>
                </li>
                <li className="menu-item-footer">
                  <Link className="menu-link" href="/">
                    Politique de retour
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-widget Propos  md:flex-col ">
              <h3 className="text-extrabold text-[2rem]">A Propos</h3>
              <ul className="menu-footer gap-4  ">
                <li className="menu-item-footer">
                  <Link className="menu-link" href="/">
                    Qui sommes nous ?
                  </Link>
                </li>
                <li className="menu-item-footer ">
                  <Link className="menu-link" href="/">
                    Nous contacter
                  </Link>
                </li>
                <li className="menu-item-footer">
                  <Link className="menu-link" href="/">
                    Conditions générales de vente
                  </Link>
                </li>
                <li className="menu-item-footer ">
                  <Link className="menu-link " href="/">
                    Conditions générales d’utilisation
                  </Link>
                </li>
                <li className="menu-item-footer">
                  <Link className="menu-link" href="/">
                    Nos Magasins
                  </Link>
                </li>
                <li className="menu-item-footer">
                  <Link className="menu-link" href="/">
                    Site map
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex md:flex-row gap-2">
              <div>
                <FaFacebookSquare className="w-[35px] h-[35px]" />
              </div>
              <div>
                <FaXTwitter className="w-[35px] h-[35px]" />
              </div>
              <div>
                <FaLinkedin className="w-[35px] h-[35px]" />
              </div>
              <div>
                <RiTelegramFill className="w-[35px] h-[35px]" />
              </div>
              <div>
                <AiFillTikTok className="w-[35px] h-[35px]" />
              </div>
              <div>
                <FaSquareInstagram className="w-[35px] h-[35px]" />
              </div>
              <div>
                <FaYoutube className="w-[35px] h-[35px]" />
              </div>
            </div>
          </div>
          <hr className="w-[100%] h-[1px]" />
        </div>
      </div>

      <div className="footer-copyright md:py-4 center">
        <h1>Copyright © 2024 Phone.ma</h1>
      </div>
    </div>
  );
}

export default footer;
