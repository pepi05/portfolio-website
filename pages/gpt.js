import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import gptImage from "../public/gpt.png";
import Link from "next/link";
import Image from "next/image";

const gpt = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="w-screen h-[50vh] relative">
        <div className=" absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={gptImage}
          alt="gpt"
        />
        <div className=" absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className=" py-2">GPT web-design Application</h2>
          <h3>React JS </h3>
          <a
            href="https://www.figma.com/file/EhhiqRjUAVvbzNH1CsvZve/gpt3-(Copy)?node-id=0%3A59&mode=dev"
            target="__blank"
          >
            <h3>Figma Design </h3>
          </a>
        </div>
      </div>
      <div className=" max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2 className=" my-2">Overview</h2>
          <p className=" mb-2">
            GPT is a dynamic and visually appealing React application that has
            been implemented based on a meticulously designed Figma layout. This
            project utilizes React`&apos;` functional components, promoting code
            reusability and maintainability throughout the application.
          </p>

          <p className=" mb-2">
            In terms of styling, GPT incorporates Flexbox and CSS Grid for
            flexible and responsive layouts. The use of Flexbox enables
            effortless alignment and positioning of elements, while CSS Grid
            offers a powerful grid system for creating complex and visually
            appealing layouts. To maintain a clean and modular CSS codebase,
            GPT3 adopts the CSS BEM model. This methodology promotes clear
            naming conventions and encapsulates styles within specific
            components, preventing style clashes and making the application more
            maintainable.
          </p>

          <p className=" mb-2">
            GPT prioritizes responsive design by utilizing media queries to
            ensure satisfactory responsiveness across a wide range of devices.
            From small mobile screens to large desktop displays, the application
            adapts seamlessly to different viewport sizes, providing an optimal
            user experience regardless of the device being used.
          </p>

          <a
            href="https://petar-youtube.netlify.app/"
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
              <a
                href="https://www.figma.com/file/EhhiqRjUAVvbzNH1CsvZve/gpt3-(Copy)?node-id=0%3A59&mode=dev"
                target="__blank"
              >
                <p className=" text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className=" pr-1" /> Figma Design
                </p>
              </a>
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

export default gpt;
