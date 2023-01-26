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
          <h2 className=" my-2">Overview</h2>
          <p className=" mb-2">
            Cassandra.Link is a comprehensive knowledge base dedicated to
            helping Apache Cassandra developers, administrators, and architects.
            The website features a wide range of resources, including videos,
            articles, and open-source projects, all aimed at providing valuable
            insights and information on working with Cassandra.
          </p>
          <p>
            Built using Gatsby JS and Material UI, Cassandra.Link boasts a sleek
            and modern design that is easy to navigate and user-friendly. The
            website is optimized for performance and speed, ensuring that users
            can access the information they need quickly and efficiently. One of
            the standout features of Cassandra.Link is the use of Algolia for
            filtering. This powerful search tool allows users to easily find the
            resources they need by keyword, making it easy to find the exact
            information they need, even among the vast amount of resources
            available on the website. Whether you're a seasoned Cassandra
            developer, administrator, or architect, or just starting out,
            Cassandra.Link is an invaluable resource that is sure to help you
            take your skills and knowledge to the next level. With a wide range
            of resources and a user-friendly design, it's the perfect place to
            learn about and stay up to date on all things Apache Cassandra.
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
