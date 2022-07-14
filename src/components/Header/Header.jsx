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
      <div className="container mx-auto">
        <div className="flex items-center justify-start px-10 py-5 navbar">
          <div className="items-center text-start logo">
            <Link to="/">
              <img src={logo} alt="logo.img" />
            </Link>
          </div>
          <div className="hidden mx-auto md:inline-block">
            <ul className="lg:ml-36 md:ml-24">
              <li className="inline-block mx-3 text-sm font-bold capitalize">
                <Link to="/">home</Link>
              </li>
              <li className="inline-block mx-3 text-sm font-bold capitalize">
                <Link to="/">about</Link>
              </li>
              <li className="inline-block mx-3 text-sm font-bold capitalize">
                <Link to="/">team</Link>
              </li>
              <li className="inline-block mx-3 text-sm font-bold capitalize">
                <Link to="/">features</Link>
              </li>
              <li className="inline-block mx-3 text-sm font-bold capitalize">
                <Link to="/">contacts</Link>
              </li>
            </ul>
          </div>
          <div className="order-2 mx-auto md:order-3">
            <Link
              to="/"
              className="p-2.5 text-sm font-bold text-white capitalize bg-pink-600 border rounded-3xl"
            >
              contact now
            </Link>
          </div>
          <div className="order-3 inline-block cursor-pointer md:hidden">
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

        <div className="w-full">{mobileMenu}</div>
      </div>
    </>
  );
};

export default Header;
