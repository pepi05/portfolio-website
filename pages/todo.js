import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const todo = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className=" absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <div className=" absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className=" py-2">Todo Application</h2>
          <h3>React JS </h3>
        </div>
      </div>
      <div className=" max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2 className=" my-2">Overview</h2>
          <p className=" mb-2">
            This project is a simple and intuitive Todo application that helps
            users create, manage, and organize their tasks. The application has
            various features such as adding new tasks, marking tasks as
            completed or uncompleted, editing tasks, and deleting tasks. Users
            can easily filter and sort their tasks based on various parameters
            such as status (completed or uncompleted), name, and date. The
            application is built using React, a popular JavaScript library for
            building user interfaces, and CSS3 for styling. The primary goal of
            this project is to provide a simple and user-friendly interface for
            managing tasks. The application aims to streamline the task
            management process and help users stay organized and productive.
            With its intuitive design and powerful features, this Todo
            application is perfect for anyone looking for an efficient way to
            manage their daily tasks and responsibilities.
          </p>

          <a
            href="https://petar-todo.netlify.app/"
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
