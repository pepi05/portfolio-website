import Image from "next/image";
import React from "react";
import cassandraLinkImage from "../public/cLinkImage.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const cassandraLink = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className=" absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="contain"
          src={cassandraLinkImage}
          alt="clImage"
        />
        <div className=" absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className=" py-2">Cassandra Link</h2>
          <h3>Gatsby JS / GraphQL / Algolia / Material UI</h3>
        </div>
      </div>
      <div className=" max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Cassandra.Link is a knowledge base with videos, articles and open
            source projects to help apache cassandra developers, administrators
            and architects. Our mission here was to Focus on improving the
            visual appearance of this website. So, we started with redesigning
            the cards throughout the website, we reorganized the content into a
            better and more intuitive layout, made some other small adjustments
            so the users can enjoy the site while learning and contributing.
          </p>
          <a href="https://cassandra.link/" target="_blank" rel="noreferrer">
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

export default cassandraLink;
