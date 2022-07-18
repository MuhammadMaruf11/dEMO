import React from "react";
import { Link } from "react-router-dom";
import blogComp from "../../utilities/images/blog.js";

const Blog = () => {
  const blog = (
    <div className="flex flex-col items-center justify-center">
      <div className="w-3/4 mx-auto">
        <h2 className="mb-8 text-3xl font-bold lg:text-4xl xl:text-6xl ">Lorem ipsum dolor sit.</h2>
        <p className="mb-12 text-sm font-normal lg:text-lg xl:text-2xl ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
          inventore blanditiis facilis consequatur!
        </p>
        <Link
          to="/"
          className="text-sm font-bold text-pink-500 underline capitalize lg:text-lg xl:text-2xl decoration-1"
        >
          read more
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <div className="py-24">
        <div className="flex flex-col items-center mb-24 md:flex-row">
          <div className="inline-block md:w-1/2">
            <img
              className="max-w-[80%] md:mb-0 mb-8 mx-auto rounded-[4.5rem]"
              src={blogComp.img1}
              alt="blog-img"
            />
          </div>
          <div className="inline-block md:w-1/2">{blog}</div>
        </div>
        <div className="flex flex-col items-center md:flex-row">
          <div className="inline-block md:w-1/2 md:order-2 ">
            <img
              className="max-w-[80%] md:mb-0 mb-8 mx-auto  rounded-[4.5rem]"
              src={blogComp.img2}
              alt="blog-img"
            />
          </div>
          <div className="inline-block md:w-1/2 md:order-1">{blog}</div>
        </div>
      </div>
    </>
  );
};

export default Blog;
