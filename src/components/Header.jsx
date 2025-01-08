import React, { useEffect, useState } from "react";
import logo from "../assets/logo.webp";
import { CgProfile } from "react-icons/cg";
import { RiShoppingCartLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 150 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <header
      className={`w-full h-[90px] p-5 lg:px-[150px] fixed top-0 left-0 ${
        sticky ? `dark-nav shadow-xl` : ""
      }`}
    >
      <div className="w-full h-full flex items-center justify-between">
        <img src={logo} alt="" className="" />
        <ul className=" lg:flex text-[18px] gap-8 items-center text-black hidden font-[500]">
          <NavLink to={'/'} className="">Home</NavLink>
          <NavLink to={'/about'}  className="">About</NavLink>
          <NavLink to={'/shop'}  className="">Shop</NavLink>
          <NavLink to={'/pages'}  className="">Pages</NavLink>
          <NavLink to={'/contact'}  className="">Contact</NavLink>
        </ul>
        <div className=" flex gap-5 items-center">
          <CgProfile className="w-7 h-7" />
          <div className="w-10 h-10 flex items-center justify-center relative">
            <RiShoppingCartLine className="w-7 h-7" />
            <span className=" w-4 h-4 rounded-full absolute top-0 right-0 bg-[#80B500] text-white font-bold flex items-center justify-center text-[10px]">
              2
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
