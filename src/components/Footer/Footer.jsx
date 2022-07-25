import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-black">
        <div className="px-8 py-20 2xl:px-20 md:flex">
          <div className="w-full md:w-1/3">
            <h2 className="mb-2 text-4xl font-semibold text-white lg:text-5xl">dEMO</h2>
            <p className="mb-6 text-sm text-white 2xl:mr-40 xl:mr-24 lg:mr-16 lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              voluptatum sapiente eos numquam!
            </p>
            <ul className="mb-3">
              <li className="inline-block mx-2 text-white xl:text-xl 2xl:text-2xl lg:text-lg">
                <Link to="/">
                  <i className="fab fa-facebook-f"></i>
                </Link>
              </li>
              <li className="inline-block mx-2 text-white xl:text-xl 2xl:text-2xl lg:text-lg">
                <Link to="/">
                  <i className="fab fa-twitter"></i>
                </Link>
              </li>
              <li className="inline-block mx-2 text-white xl:text-xl 2xl:text-2xl lg:text-lg">
                <Link to="/">
                  <i className="fab fa-instagram"></i>
                </Link>
              </li>
              <li className="inline-block mx-2 text-white xl:text-xl 2xl:text-2xl lg:text-lg">
                <Link to="/">
                  <i className="fa-solid fa-m"></i>
                </Link>
              </li>
            </ul>
            <span className="inline-block mx-2 mb-8 text-xs md:mb-0 text-slate-500">
              © 2022
            </span>
          </div>
          <div className="w-full lg:justify-evenly md:justify-end md:flex md:w-2/3">
            <div className="mb-8 md:mx-6 footerWidget">
              <h4 className="mb-3 text-xs font-bold text-white uppercase xl:text-lg">
                services
              </h4>
              <ul>
                <li className="mb-2 text-sm font-normal capitalize xl:text-lg text-slate-300">consulting</li>
                <li className="mb-2 text-sm font-normal capitalize xl:text-lg text-slate-300">human resources</li>
                <li className="mb-2 text-sm font-normal capitalize xl:text-lg text-slate-300">accounting</li>
                <li className="mb-2 text-sm font-normal capitalize xl:text-lg text-slate-300">marketing & SEO</li>
              </ul>
            </div>
            <div className="mb-8 md:mx-6 footerWidget">
              <h4 className="mb-3 text-xs font-bold text-white uppercase xl:text-lg">
                services
              </h4>
              <ul>
                <li className="mb-2 text-sm font-normal capitalize xl:text-lg text-slate-300">about us</li>
                <li className="mb-2 text-sm font-normal capitalize xl:text-lg text-slate-300">our services</li>
                <li className="mb-2 text-sm font-normal capitalize xl:text-lg text-slate-300">our blog</li>
                <li className="mb-2 text-sm font-normal capitalize xl:text-lg text-slate-300">contact us</li>
              </ul>
            </div>
            <div className="md:mx-6 footerWidget">
              <h4 className="mb-3 text-xs font-bold text-white uppercase xl:text-lg">
                services
              </h4>
              <ul>
                <li className="mb-2 text-sm font-normal capitalize xl:text-lg text-slate-300">+1 123-343-234</li>
                <li className="mb-2 text-sm font-normal capitalize xl:text-lg text-slate-300">+1 123-343-234</li>
                <li className="mb-2 text-sm font-normal capitalize xl:text-lg text-slate-300">contact@demo.com</li>
              </ul>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
