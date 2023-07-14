import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import gymImage from "../public/gym.png";
import Link from "next/link";
import Image from "next/image";

const gym = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className=" absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1 "
          layout="fill"
          objectFit="contain"
          src={gymImage}
          alt="gym"
        />
        <div className=" absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className=" py-2">Gym Exercise Application</h2>
          <h3>React JS </h3>
          <h3>Material-UI </h3>
          <h3>Rapid API </h3>
        </div>
      </div>
      <div className=" max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2 className=" my-2">Overview</h2>
          <p className=" mb-2">
            The Fitness Exercises Application offers a seamless experience,
            allowing users to effortlessly explore exercises categorized by
            muscle groups, and equipment requirements. Whether you`&apos;`re a
            beginner or an advanced fitness enthusiast, this app has something
            for everyone.
          </p>

          <a
            href="https://petar-gym.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Visit Site</button>
          </a>
        </div>
        <div className=" col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className=" grid grid-cols-3 md:grid-cols-1">
              <p className=" text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className=" pr-1" /> React Js
              </p>
              <p className=" text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className=" pr-1" /> Material-UI
              </p>
              <p className=" text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className=" pr-1" /> Rapid API
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

export default gym;
