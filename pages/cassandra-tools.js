import Image from "next/image";
import React from "react";
import cassandraToolsImage from "../public/cToolsImage.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const cassandraTools = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className=" absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="contain"
          src={cassandraToolsImage}
          alt="clImage"
        />
        <div className=" absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className=" py-2">Cassandra Tools</h2>
          <h3>Gatsby JS / GraphQL / Algolia / Material UI</h3>
        </div>
      </div>
      <div className=" max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Cassandra.Tools is a collection of enhancers to help developers,
            administrators, and architects when working with Apache Cassandra.
            The goal and purpose for this project were clear, to design more
            suitable User Interface, while enhancing the User Experience. So, we
            did exactly that. Some card design improvement, filter dropdowns
            redesigned and few other changes add much greater feeling when using
            this Website. For this, as well as for all the other projects, we
            iterate constantly in order to get to a perfection.
          </p>
          <a href="https://cassandra.tools/" target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4 mr-8">Visit Site</button>
          </a>
        </div>
        <div className=" col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className=" grid grid-cols-3 md:grid-cols-1">
              <p className=" text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className=" pr-1" /> Gatsby Js
              </p>
              <p className=" text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className=" pr-1" /> GraphQL
              </p>
              <p className=" text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className=" pr-1" /> Algolia
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

export default cassandraTools;
