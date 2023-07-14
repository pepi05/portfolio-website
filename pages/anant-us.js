import Image from "next/image";
import React from "react";
import anantUsImage from "../public/anantUsImage.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const anantUs = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="w-screen h-[50vh] relative">
        <div className=" absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="contain"
          src={anantUsImage}
          alt="clImage"
        />
        <div className=" absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className=" py-2">Anant US</h2>
          <h3 className=" py-2">
            Current Original Version: WordPress / Elementor / GraphQL
          </h3>
          <h3 className="py-2">
            In progress with: Next JS / GraphQL / Headless Wordpress / Material
            UI
          </h3>
        </div>
      </div>
      <div className=" max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className=" my-2">
            This project was built using the Wordpress platform, with the
            Elementor plugin utilized to implement a custom design created in
            Figma. The data displayed on the website is retrieved through a
            GraphQL query from the Wordpress backend.
          </p>
          <p className=" my-2">
            The same project is in progress and it will be built using Next.js
            as the front-end framework. Wordpress is being used as the headless
            backend and data will be retrieved through GraphQL queries. The
            Next.js project is currently under development.
          </p>
          <a href="https://anant.us" target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4 mr-8">Visit Site</button>
          </a>
          <a
            href="https://anantusprod.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo Site with Next</button>
          </a>
        </div>
        <div className=" col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">
              Current version Technologies
            </p>
            <div className=" grid grid-cols-3 md:grid-cols-1">
              <p className=" text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className=" pr-1" /> Wordpress
              </p>
              <p className=" text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className=" pr-1" /> Elementor
              </p>
              <p className=" text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className=" pr-1" /> GraphQL
              </p>
            </div>
          </div>

          <div className="p-2">
            <p className="text-center font-bold pb-2">
              New version Technologies
            </p>
            <div className=" grid grid-cols-3 md:grid-cols-1">
              <p className=" text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className=" pr-1" /> Next JS
              </p>
              <p className=" text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className=" pr-1" /> Headless WordPress
              </p>
              <p className=" text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className=" pr-1" /> GraphQL
              </p>
              <p className=" text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className=" pr-1" /> Material UI
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className=" underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default anantUs;
