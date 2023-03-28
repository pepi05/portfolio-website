import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaCity, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className=" uppercase text-sm tracking-widest text-gray-600">
            My portfolio website
          </p>
          <h1 className=" py-4 text-gray-700">
            Hi, I am <span className="text-[#5651e5]">Petar</span>
          </h1>
          <h1 className=" py-4 text-gray-700">A Front-End React developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto ">
            Skilled front-end developer with 1 year of professional work
            experience creating user-friendly and visually appealing websites. I
            am passionate about creating seamless user experiences that drive
            engagement and conversions. Currently, I am focused on building
            responsive front-end web application with React. Take a look at my
            portfolio to see some of my latest projects.
          </p>
          <div className=" flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/petar-gjuzelov-589720219/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/pepi05"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>

            <Link href="/my-info">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
