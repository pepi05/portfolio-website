import React from "react";
import Image from "next/image";
import profilePicture from "../public/profilePicture.jpg";

const About = () => {
  return (
    <div id="about" className=" w-full md:h-screen p-2 flex items-center py-16">
      <div className=" max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className=" col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I am Petar Full-Stack Web developer. I have a strong foundation in
            computer science concepts and an in-depth understanding of
            JavaScript, making me a valuable asset to any team. I am always
            seeking to improve my skills and stay up-to-date with the latest
            developments in the field.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest project.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className=" rounded-xl" src={profilePicture} />
        </div>
      </div>
    </div>
  );
};

export default About;
