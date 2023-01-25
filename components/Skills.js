import Image from "next/image";
import React from "react";
import htmlIcon from "../public/skillsIcon/html.png";
import cssIcon from "../public/skillsIcon/css.png";
import jsIcon from "../public/skillsIcon/js.png";
import reactIcon from "../public/skillsIcon/react.png";
import nextIcon from "../public/skillsIcon/nextjs.png";
import gatsbyIcon from "../public/skillsIcon/gatsby.png";
import muiIcon from "../public/skillsIcon/mui.png";
import tailwindIcon from "../public/skillsIcon/tailwind.png";
import nodeIcon from "../public/skillsIcon/nodejs.png";
import expressIcon from "../public/skillsIcon/Expressjs.png";
import graphqlicon from "../public/skillsIcon/graphql.png";
import algoliaIcon from "../public/skillsIcon/algolia.png";
import mongoIcon from "../public/skillsIcon/mongo.png";
import githubIcon from "../public/skillsIcon/github.png";

const Skills = () => {
  const mySkills = [
    {
      name: "HTML",
      image: htmlIcon,
    },
    {
      name: "CSS",
      image: cssIcon,
    },
    {
      name: "JavaScript",
      image: jsIcon,
    },
    {
      name: "React JS",
      image: reactIcon,
    },
    {
      name: "Next JS",
      image: nextIcon,
    },
    {
      name: "Gatsby JS",
      image: gatsbyIcon,
    },
    {
      name: "Material UI",
      image: muiIcon,
    },
    {
      name: "Tailwind css",
      image: tailwindIcon,
    },
    {
      name: "Node JS",
      image: nodeIcon,
    },
    {
      name: "Express Js",
      image: expressIcon,
    },
    {
      name: "GraphQL",
      image: graphqlicon,
    },
    {
      name: "Algolia",
      image: algoliaIcon,
    },
    {
      name: "MongoDb",
      image: mongoIcon,
    },
    {
      name: "GitHub",
      image: githubIcon,
    },
  ];

  return (
    <div id="skills" className=" w-full lg:h-screen p-2">
      <div className=" max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className=" text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className=" py-4">What I Can Do</h2>
        <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mySkills.map((skill) => {
            return (
              <div
                key={skill.name}
                className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
              >
                <div className=" grid grid-cols-2 gap-4 justify-center items-center">
                  <div className=" m-auto">
                    <Image
                      src={skill.image}
                      alt={skill.name}
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className=" flex flex-col items-center justify-center">
                    <h3>{skill.name}</h3>
                  </div>
                </div>
              </div>
            );
          })}

          {/* <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image src={htmlIcon} alt="/" width={64} height={64} />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image src={htmlIcon} alt="/" width={64} height={64} />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image src={htmlIcon} alt="/" width={64} height={64} />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image src={htmlIcon} alt="/" width={64} height={64} />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>React JS</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image src={htmlIcon} alt="/" width={64} height={64} />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>Next JS</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image src={htmlIcon} alt="/" width={64} height={64} />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>Gatsby JS</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image src={htmlIcon} alt="/" width={64} height={64} />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>Material UI</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image src={htmlIcon} alt="/" width={64} height={64} />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>Tailwind css</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image src={htmlIcon} alt="/" width={64} height={64} />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>Node JS</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image src={htmlIcon} alt="/" width={64} height={64} />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>Express JS</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image src={htmlIcon} alt="/" width={64} height={64} />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>GraphQL</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image src={htmlIcon} alt="/" width={64} height={64} />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>Algolia</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image src={htmlIcon} alt="/" width={64} height={64} />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image src={htmlIcon} alt="/" width={64} height={64} />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>GitHub</h3>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
