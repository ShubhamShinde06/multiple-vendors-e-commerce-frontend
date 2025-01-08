import React from "react";
import logo from "../assets/logo.webp";
import { IoIosSend } from "react-icons/io";
import payment_img from "../assets/footer_pay_img.webp";
import veg1 from "../assets/vag1.webp";
import veg2 from "../assets/vag2.webp";
import root from "../assets/root.webp";
import truck from "../assets/truck.webp";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-[65vh] bg-[#F7F5EB] ">
      <div className="w-full h-[55vh] lg:px-[100px] relative flex gap-5">
        <div className=" absolute w-[88%] h-[160px] bg-[#FFFFFF] top-[-15%] shadow-xl px-8 py-8">
          <div className="w-full h-full flex items-center justify-around">
            <div className="w-full h-full border-r-2 flex items-center gap-6">
              <div>
                <img src={veg1} alt="" />
              </div>
              <div>
                <h1 className="font-bold text-[20px] mb-1">Curated Products</h1>
                <p>Provide free home delivery for all product over $100</p>
              </div>
            </div>
            <div className="w-full h-full border-r-2 flex items-center justify-center gap-6 pl-6">
              <div>
                <img src={veg2} alt="" />
              </div>
              <div>
                <h1 className="font-bold text-[20px] mb-1">Handmade</h1>
                <p>We ensure the product quality that is our main goal</p>
              </div>
            </div>
            <div className="w-full h-full border-r-2 flex items-center gap-6 pl-6">
              <div>
                <img src={root} alt="" />
              </div>
              <div>
                <h1 className="font-bold text-[20px] mb-1">Natural Food</h1>
                <p>Return product within 3 days for any product you buy</p>
              </div>
            </div>
            <div className="w-full h-full flex items-center gap-6 pl-6">
              <div>
                <img src={truck} alt="" />
              </div>
              <div>
                <h1 className="font-bold text-[20px] mb-1">
                  Free home delivery
                </h1>
                <p>We ensure the product quality that you can trust easily</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%] h-full lg:py-[150px] flex flex-col gap-4">
          <img src={logo} alt="" className="w-[150px] h-[80px]" />
          <p className="text-[18px] w-[80%]">
            Lorem Ipsum is simply dummy text of the and typesetting industry.
            Lorem Ipsum is dummy text of the printing.
          </p>
          <div className="mt-2 flex flex-col gap-4">
            <span>Brooklyn, New York, United States</span>
            <span>+0123-456789</span>
            <span>example@example.com</span>
          </div>
        </div>
        <div className="w-[15%] h-full flex flex-col  gap-4 lg:py-[150px]">
          <h1 className=" font-bold text-xl ">Company</h1>
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
        <div className="w-[15%] h-full flex flex-col  gap-4 lg:py-[150px]">
          <h1 className=" font-bold text-xl ">Services</h1>
          <ul className=" flex flex-col gap-6">
            <li className="hover:text-[#80B500]">Order tracking</li>
            <li className="hover:text-[#80B500]">Wish List</li>
            <li className="hover:text-[#80B500]">Login</li>
            <li className="hover:text-[#80B500]">Terms & Conditions</li>
            <li className="hover:text-[#80B500]">Promotional Offers</li>
          </ul>
        </div>
        <div className="w-[15%] h-full flex flex-col  gap-4 lg:py-[150px]">
          <h1 className=" font-bold text-xl ">Customer Care</h1>
          <ul className=" flex flex-col gap-6">
            <li className="hover:text-[#80B500]">Login</li>
            <li className="hover:text-[#80B500]">My account</li>
            <li className="hover:text-[#80B500]">Wish List</li>
            <li className="hover:text-[#80B500]">Order tracking</li>
            <li className="hover:text-[#80B500]">Contact</li>
          </ul>
        </div>
        <div className="w-[25%] h-full flex flex-col  gap-4 lg:py-[150px]">
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

      <div className="w-full h-[10vh] bg-[#071C1F] lg:px-[150px] text-white flex items-center justify-between">
        <span>All Rights Reserved @ Company 2025</span>
        <ul className=" flex items-center gap-6 font-bold">
          <li className=" cursor-pointer hover:text-[#80B500]">
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
