import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo/logo.png";

const Header = () => {
  const [menuBtn, setMenuBtn] = useState(false);

  let mobileMenu;
  let menuMask;
  if (menuBtn) {
    mobileMenu = (
      <div class="w-full">
        <div className="navLink">
          <div className="block">
            <ul>
              <li className="w-full p-2 my-0.5 text-sm font-bold capitalize border border-gray-400 ">
                <Link to="/">home</Link>
              </li>
              <li className="w-full p-2 my-0.5 text-sm font-bold capitalize border border-gray-400">
                <Link to="/">about</Link>
              </li>
              <li className="w-full p-2 my-0.5 text-sm font-bold capitalize border border-gray-400">
                <Link to="/">team</Link>
              </li>
              <li className="w-full p-2 my-0.5 text-sm font-bold capitalize border border-gray-400">
                <Link to="/">features</Link>
              </li>
              <li className="w-full p-2 my-0.5 text-sm font-bold capitalize border border-gray-400">
                <Link to="/">contacts</Link>
              </li>
            </ul>
          </div>
        </div>
        {menuMask}
      </div>
    );

    menuMask = (
      <div onClick={() => setMenuBtn(false)}>
        {/* <button class="btnClose">
                  <span class="bar1"></span>
                  <span class="bar2"></span>
                  <span class="bar3"></span>
              </button> */}
      </div>
    );
  }

  return (
    <>
      <div className="fixed mx-auto w-full bg-[#f7f2f8]">
        <div className="container mx-auto">
          <div className="flex items-center justify-start px-10 py-7 navbar">
            <div className="items-center w-1/3 md:w-1/4 xl:w-1/3 text-start logo">
              <Link to="/">
                <img src={logo} alt="logo.img" />
              </Link>
            </div>
            <div className="hidden mx-auto lg:inline-block">
              <ul className="xl:ml-16 lg:ml-24">
                <li className="inline-block mx-3 text-2xl font-bold capitalize lg:text-lg">
                  <Link to="/">home</Link>
                </li>
                <li className="inline-block mx-3 text-2xl font-bold capitalize lg:text-lg">
                  <Link to="/">about</Link>
                </li>
                <li className="inline-block mx-3 text-2xl font-bold capitalize lg:text-lg">
                  <Link to="/">team</Link>
                </li>
                <li className="inline-block mx-3 text-2xl font-bold capitalize lg:text-lg">
                  <Link to="/">features</Link>
                </li>
                <li className="inline-block mx-3 text-2xl font-bold capitalize lg:text-lg">
                  <Link to="/">contacts</Link>
                </li>
              </ul>
            </div>
            <div className="order-2 mx-auto lg:mx-auto md:ml-32 lg:order-3">
              <Link
                to="/"
                className="p-2.5 xl:p-4 xl:text-2xl lg:text-lg md:text-md md:py-2 font-bold text-white capitalize bg-pink-600 border rounded-[30px]"
              >
                contact now
              </Link>
            </div>
            <div className="order-3 inline-block cursor-pointer lg:hidden">
              <button
                onClick={() => setMenuBtn(!menuBtn)}
                class="flex p-1 flex-col justify-center items-center border border-gray-400"
              >
                <span class="line h-0.5 w-5 my-0.5 bg-black"></span>
                <span class="line h-0.5 w-5 my-0.5 bg-black"></span>
                <span class="line h-0.5 w-5 my-0.5 bg-black"></span>
              </button>
            </div>
          </div>
        </div>

        <div className="w-full">{mobileMenu}</div>
      </div>
    </>
  );
};

export default Header;
