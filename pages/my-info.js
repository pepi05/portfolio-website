import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const myInfo = () => {
  return (
    <>
      <Head>
        <title>Petar | Resume</title>
        <meta name="description" content="I’m a front-end web developer." />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Petar Gjuzelov</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/petar-gjuzelov-589720219/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/pepi05"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Web Development
              <span className="px-1">|</span> Complex Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service. Adept at developing strategies.
          Diverse analytical skills, team collaboration, and relationship
          building. Front-end developer with solid interpersonal abilities and
          complex problem-solving skills. Effective and proven track record of
          critical thinking, idea generation, and optimizing efficiencies.
        </p>

        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p>
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">:</span>Front-End Web Developer
            <span className="px-2">|</span>GitHub
            <span className="px-2">|</span>HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
          </p>
          <p>
            <span className="px-2"></span>React
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>Gatsby JS
            <span className="px-2">|</span>Material UI
            <span className="px-2">|</span>Tailwind
          </p>

          <p>
            <span className="px-2"></span>Node JS & Express JS
            <span className="px-2">|</span>GraphQL
            <span className="px-2">|</span>Algolia
            <span className="px-2">|</span>MongoDB
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Produkto.io</span>
            <span className="px-2">|</span>Strumica, Macedonia
          </p>
          <p className="py-1 italic">
            Full-Stack web developer - Intenrship (10/2021 - 01/2022)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              Frontend web development using React (with Redux), website design
              using modern techniques with SCSS
            </li>
            <li>Backend development using NodeJS/Express</li>
            <li>Worked on company&apos;s project &quot;Space Logo&quot;</li>
          </ul>
        </div>

        {/* Personal Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Anant Macedonia</span>
            <span className="px-2">|</span>Skopje, Macedonia
          </p>
          <p className="py-1 italic">Front-End Engineer (02/2022 - Present)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Front-end developer using Next.js with a headless WordPress and
              GraphQL responsible for creating the UI of web applications. I am
              using Next.js to build web applications, headless WordPress as a
              back-end for our application and GraphQL to retrieve data from the
              WordPress database.
            </li>
            <li>
              Also I work with Gatsby.js, a static site generator for React,
              with GraphQL to build web applications.
            </li>
            <li>
              My responsibilities include designing and implementing the user
              interface, working closely with designers to ensure that the final
              product is visually appealing and functions smoothly, and
              maintaining and updating the application as needed
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default myInfo;
