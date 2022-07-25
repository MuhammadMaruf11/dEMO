import React from "react";
import john from "../../assets/img/profile/john.png";

const OurTeam = () => {
  const profile = (
    <div className="p-6 mx-3 bg-white 2xl:mx-8 rounded-3xl 2xl:p-24 xl:p-16 lg:p-12 card">
      <div className="flex flex-col items-center justify-center">
        <img
          className="w-1/3 mb-2 border-4 border-red-500 rounded-full"
          src={john}
          alt="profile-img"
        />
        <h4 className="mb-4 text-xl font-semibold text-center capitalize 2xl:text-4xl xl:text-3xl lg:text-2xl ">
          John Doe
        </h4>
        <p className="text-xs text-center 2xl:text-xl xl:text-lg lg:text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          perferendis consequatur laboriosam odit.
        </p>
      </div>
    </div>
  );

  const lorem6 = (
    <div>
      <span className="flex text-sm font-semibold 2xl:text-2xl xl:text-xl lg:text-lg">
        <i className="fa-solid fa-circle-check text-purple-800 mr-2 mt-1.5"></i>
        Lorem ipsum dolor sit amet consectetur.
      </span>
    </div>
  );

  const lorem8 = (
    <div>
      <span className="flex text-sm font-semibold 2xl:text-2xl xl:text-xl lg:text-lg">
        <i className="fa-solid fa-circle-check text-purple-800 mr-2 mt-1.5"></i>
        Lorem ipsum dolor sit amet consectetur. amet consectetur
      </span>
    </div>
  );

  return (
    <>
      <div className="px-8 py-28 bg-slate-50">
        <h2 className="mb-16 text-4xl font-bold text-center capitalize">
          Our Team
        </h2>
        <div className="md:mb-8 md:mt-16">
          <div className="inline-block mb-8 md:w-1/3">{profile}</div>
          <div className="inline-block mb-8 md:w-1/3">{profile}</div>
          <div className="inline-block mb-8 md:w-1/3">{profile}</div>
        </div>
        <div className="md:mb-8">
          <div className="inline-block mb-8 md:w-1/3">{profile}</div>
          <div className="inline-block mb-8 md:w-1/3">{profile}</div>
          <div className="inline-block mb-8 md:w-1/3">{profile}</div>
        </div>
        <div className="my-4 md:my-2 xl:my-8">
          <div className="inline-block w-1/2 p-2 lg:p-3 xl:p-4 2xl:p-5 md:w-1/4">{lorem6}</div>
          <div className="inline-block w-1/2 p-2 lg:p-3 xl:p-4 2xl:p-5 md:w-1/4">{lorem8}</div>
          <div className="inline-block w-1/2 p-2 lg:p-3 xl:p-4 2xl:p-5 md:w-1/4">{lorem6}</div>
          <div className="inline-block w-1/2 p-2 lg:p-3 xl:p-4 2xl:p-5 md:w-1/4">{lorem6}</div>
        </div>
        <div className="my-4 md:my-2 xl:my-8">
          <div className="inline-block w-1/2 p-2 lg:p-3 xl:p-4 2xl:p-5 md:w-1/4">{lorem8}</div>
          <div className="inline-block w-1/2 p-2 lg:p-3 xl:p-4 2xl:p-5 md:w-1/4">{lorem6}</div>
          <div className="inline-block w-1/2 p-2 lg:p-3 xl:p-4 2xl:p-5 md:w-1/4">{lorem6}</div>
          <div className="inline-block w-1/2 p-2 lg:p-3 xl:p-4 2xl:p-5 md:w-1/4">{lorem8}</div>
        </div>
        <div className="my-4 md:my-2 xl:my-8">
          <div className="inline-block w-1/2 p-2 lg:p-3 xl:p-4 2xl:p-5 md:w-1/4">{lorem6}</div>
          <div className="inline-block w-1/2 p-2 lg:p-3 xl:p-4 2xl:p-5 md:w-1/4">{lorem6}</div>
          <div className="inline-block w-1/2 p-2 lg:p-3 xl:p-4 2xl:p-5 md:w-1/4">{lorem8}</div>
          <div className="inline-block w-1/2 p-2 lg:p-3 xl:p-4 2xl:p-5 md:w-1/4">{lorem6}</div>
        </div>
        <div className="my-4 md:my-2 lg:my-6 xl:my-8">
          <div className="inline-block w-1/2 p-2 lg:p-3 xl:p-4 2xl:p-5 md:w-1/4">{lorem6}</div>
          <div className="inline-block w-1/2 p-2 lg:p-3 xl:p-4 2xl:p-5 md:w-1/4">{lorem6}</div>
          <div className="inline-block w-1/2 p-2 lg:p-3 xl:p-4 2xl:p-5 md:w-1/4">{lorem6}</div>
          <div className="inline-block w-1/2 p-2 lg:p-3 xl:p-4 2xl:p-5 md:w-1/4">{lorem6}</div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
