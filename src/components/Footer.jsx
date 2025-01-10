import React from "react";
import logo from "../assets/logo.webp";
import { IoIosSend } from "react-icons/io";
import payment_img from "../assets/footer_pay_img.webp";

import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-full lg:h-[60vh] bg-[#F7F5EB]">
      <div className="w-full md:h-auto lg:h-[50vh] lg:px-[100px] grid lg:justify-between lg:gap-10 py-20 gap-10 p-5 grid-cols-1 grid-flow-row  md:grid md:grid-cols-2 md:grid-flow-row md:gap-8 lg:flex ">
        <div className="xl:w-[30%] h-full flex flex-col gap-4">
          <img src={logo} alt="" className="w-[150px] h-50px]" />
          <p className="xl:text-[18px] lg:text-[15px]">
            Lorem Ipsum is simply dummy text of the and typesetting industry.
            Lorem Ipsum is dummy text of the printing.
          </p>
          <div className="mt-2 flex flex-col lg:gap-2 gap-4 lg:text-[14px] xl:text-[16px]">
            <span>Brooklyn, New York, United States</span>
            <span>+0123-456789</span>
            <span>example@example.com</span>
          </div>
        </div>
        <div className="xl:w-[15%] h-full xl:flex flex-col gap-4 lg:hidden">
          <h1 className=" font-bold text-xl mb-3">Company</h1>
          <ul className=" flex flex-col gap-6">
            <NavLink to={"/"} className=" hover:text-[#80B500]">
              Home
            </NavLink>
            <NavLink to={"/about"} className=" hover:text-[#80B500]">
              About
            </NavLink>
            <NavLink to={"/shop"} className=" hover:text-[#80B500]">
              Shop
            </NavLink>
            <NavLink to={"/pages"} className=" hover:text-[#80B500]">
              Pages
            </NavLink>
            <NavLink to={"/contact"} className=" hover:text-[#80B500]">
              Contact
            </NavLink>
          </ul>
        </div>
        <div className="xl:w-[15%] h-full xl:flex flex-col lg:hidden gap-4">
          <h1 className=" font-bold text-xl mb-3">Services</h1>
          <ul className=" flex flex-col gap-6">
            <li className="hover:text-[#80B500]">Order tracking</li>
            <li className="hover:text-[#80B500]">Wish List</li>
            <li className="hover:text-[#80B500]">Login</li>
            <li className="hover:text-[#80B500]">Terms & Conditions</li>
            <li className="hover:text-[#80B500]">Promotional Offers</li>
          </ul>
        </div>
        <div className="xl:w-[15%] h-full xl:flex flex-col lg:hidden  gap-4">
          <h1 className=" font-bold text-xl mb-3">Customer Care</h1>
          <ul className=" flex flex-col gap-6">
            <li className="hover:text-[#80B500]">Login</li>
            <li className="hover:text-[#80B500]">My account</li>
            <li className="hover:text-[#80B500]">Wish List</li>
            <li className="hover:text-[#80B500]">Order tracking</li>
            <li className="hover:text-[#80B500]">Contact</li>
          </ul>
        </div>
        <div className="h-full flex flex-col  gap-4">
          <h1 className=" font-bold text-xl ">Newsletter</h1>
          <p>
            Subscribe to our weekly Newsletter and receive updates via email.
          </p>
          <div className="w-full flex">
            <input
              type="text"
              className=" py-4 border flex-1 pl-2 outline-none"
              placeholder="Email"
            />
            <button className=" bg-[#80B500] px-4 py-4 flex items-center text-2xl text-white">
              <IoIosSend />
            </button>
          </div>
          <div className="mt-3">
            <h1 className="mb-3 font-bold">We Accept</h1>
            <img src={payment_img} alt="" />
          </div>
        </div>
      </div>

      <div className="w-full h-[10vh] bg-[#071C1F] lg:px-[100px] p-5 xl:px-[150px] text-white flex items-center justify-between">
        <span >All Rights Reserved @ Company 2025</span>
        <ul className=" hidden md:flex items-center gap-6 font-bold">
          <li className=" hidden cursor-pointer hover:text-[#80B500]">
            Terms & Conditions
          </li>
          <li className=" cursor-pointer hover:text-[#80B500]">Claim</li>
          <li className=" cursor-pointer hover:text-[#80B500]">
            Privacy & Policy
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
