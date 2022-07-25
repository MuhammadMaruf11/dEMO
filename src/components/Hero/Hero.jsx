import React from "react";
import banner from '../../assets/img/hero/banner.jpg'

const Hero = () => {
  return (
    <>
      <div style={{backgroundImage: `url(${banner})`}} className="flex items-center justify-center h-screen py-32 bg-fixed bg-center bg-no-repeat bg-cover bg-orange-50">
        <div className="px-12 pt-[110px] xl:px-60 md:px-40 lg:px-56">
          <h1 className="mb-8 text-3xl font-bold text-center text-indigo-100 2xl:mx-48 xl:mx-24 2xl xl:text-7xl lg:text-6xl md:text-5xl">
            Lorem ipsum dolor Arcu viverra
          </h1>
          <p className="mb-24 font-medium text-center text-indigo-100 2xl:px-20 2xl:mx-40 xl:mx-32 2xl:text-2xl lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            ducimus cupiditate nam hic eius repudiandae eos natus autem. Harum
            molestias veritatis fugiat quia suscipit.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
