import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import CSS from "@/styles/navbar.module.css";
import Hovercomp from "@/components/Hovercomponents/Hovercomp";
import Womenhover from "../Hovercomponents/Womenhover";
import { UserContext } from "@/Provider/UserProvider";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isActive, setIsActive] = useState(true);

  const { favList } = useContext(UserContext);
  console.log("favList", favList);

  return (
    <>
      <nav className="flex justify-between p-2 items-center border-b">
        <ul className="flex gap-2 items-center ">
          <li>
            <Link href="/">
              <img
                src="./beyoung2.png"
                alt="logo"
                style={{ height: "40px", width: "150px" }}
              />
            </Link>
          </li>
          <li className="men_menu">
            <Link
              href="/men"
              className="hover:bg-yellow-300 pl-2 pr-2 pt-1 pb-1 "
            >
              Men
            </Link>
            <div className="men_submenu flex justify-center">
              <Hovercomp />
            </div>
          </li>
          <li>
            <Link
              href="/women"
              className="hover:bg-yellow-300 pl-2 pr-2 pt-1 pb-1"
            >
              Women
            </Link>
            <div className="men_submenu flex justify-center">
              <Womenhover />
            </div>
          </li>
          <li>
            <Link
              href="/combos"
              className="hover:bg-yellow-300 pl-2 pr-2 pt-1 pb-1"
            >
              COMBOS
            </Link>
          </li>
          <li>
            <Link
              href="/cargojoggers"
              className="hover:bg-yellow-300 pl-2 pr-2 pt-1 pb-1"
            >
              CARGO JOGGERS
            </Link>
          </li>
          <li>
            <Link
              href="/menshirts"
              className="hover:bg-yellow-300 pl-2 pr-2 pt-1 pb-1"
            >
              MEN'S SHIRTS
            </Link>
          </li>
          <li>
            <Link
              href="/newarrivals"
              className="hover:bg-yellow-300 pl-2 pr-2 pt-1 pb-1"
            >
              NEW ARRIVALS
            </Link>
          </li>
        </ul>

        <div className="flex gap-4 items-center">
          <span className=" search_container_parent">
            <div className={"search active"}>
              <input
                type="text"
                placeholder="Search..."
                className="search_box"
              />
              <button className="search_btn">
                {" "}
                <CiSearch onClick={() => setIsActive(!isActive)} />
              </button>
            </div>
          </span>
          <span className=" relative ">
            <Link href="/favorites">
              <CiHeart />
            </Link>
            <span
              className="flex items-center justify-center absolute h-3 w-3 bg-yellow-300 rounded-full"
              style={{ fontSize: "10px", top: "-9px", right: "-3px" }}
            >
              {favList}
            </span>
          </span>
          <span className="relative">
            <Link href="/addtocart">
              <MdOutlineShoppingCart />
            </Link>
            <span
              className="flex items-center justify-center absolute h-3 w-3 bg-yellow-300 rounded-full"
              style={{ fontSize: "10px", top: "-9px", right: "-3px" }}
            >
              0
            </span>
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
