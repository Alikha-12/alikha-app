import React from "react";
import { FaPython } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { DiReact } from "react-icons/di";

function Skills() {
  return (
    <section className="bg-[#1F2937]">
      <div className="container px-6 py-10 mx-auto md:content-center">
        <h1 className="text-3xl font-semibold text-center font-Bebas tracking-[0.25rem] text-white capitalize lg:text-4xl ">
          My skills
        </h1>
        <div className=" flex-row grid-cols-1 inline-grid">
          <div className="grid  gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
            <Skill
              skill="Python"
              description={
                "I'm intermediate in Python, I've taught in private lessons by iD Tech Instructors and built with Pygame previously"
              }
              children={<FaPython className=" text-[#658864] w-40 h-40" />}
            />
            <Skill
              skill="JavaScript"
              description={
                "I'm a beginner in JavaScript, not as advanced as in Python"
              }
              children={<DiJavascript1 className=" text-[#658864] w-40 h-40" />}
            />
            <Skill
              skill="React"
              description={
                "I built this portfolio with React, my favorite CSS framework is Tailwind"
              }
              children={<DiReact className=" text-[#658864] w-40 h-40" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const Skill = ({ skill, description, children }) => {
  return (
    <div className="flex flex-col items-center p-6 space-y-3 text-center bg-white rounded-xl hover:cursor-pointer hover:scale-105 duration-200 hover:shadow-[#B7B78A]  hover:shadow-2xl pb-10">
      <span className="inline-block p-3 text-blue-500 rounded-full ">
        {children}
      </span>
      <h1 className="text-2xl font-semibold pt-7 text-[#B7B78A]">{skill}</h1>
      <p className="text-[#B7B78A] text-center">{description}</p>
      <a
        href="#"
        className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
      >
        {/* <span className="mx-1">read more</span>
          <svg
            className="w-4 h-4 mx-1 rtl:-scale-x-100"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg> */}
      </a>
    </div>
  );
};
export default Skills;
