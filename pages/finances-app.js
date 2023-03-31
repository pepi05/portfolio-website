import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const todo = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className=" absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <div className=" absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className=" py-2">Finance Tracking Application</h2>
          <h3>React JS </h3>
          <h3>Redux Toolkit </h3>
          <h3>Tailwind CSS </h3>
        </div>
      </div>
      <div className=" max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2 className=" my-2">Overview</h2>
          <p className=" mb-2">
            The goal of this project is to create a web application that allows
            users to easily track their income and expenses. The application
            will be built using React and Redux Toolkit, which will provide a
            scalable and efficient solution for state management. The
            application will have a user-friendly interface that allows users to
            add, edit, and delete their income and expenses. Users will be able
            to categorize their transactions and view detailed reports.
          </p>
          <p>
            The project will be divided into several components, including a
            user register/login, a transaction input form, a dashboard for
            visualizing income and expenses Overall, the goal of this project is
            to provide users with a simple and effective tool for managing their
            finances. By leveraging the power of React and Redux Toolkit, we aim
            to create a fast, reliable, and user-friendly application that helps
            users take control of their financial lives.
          </p>

          <a
            href="https://finances-app-rtk.vercel.app/"
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
                <RiRadioButtonFill className=" pr-1" /> Redux Toolkit
              </p>
              <p className=" text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className=" pr-1" /> Tailwind CSS
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

export default todo;
