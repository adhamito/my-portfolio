import React from "react";
import Html from "../pictures/html.png";
import Css from "../pictures/css.png";
import Laravel from "../pictures/laravel.png";
import Github from "../pictures/github.png";
import Javascript from "../pictures/javascript.png";
import R from "../pictures/react.png";
import Python from "../pictures/python.png";
import Php from "../pictures/php.png";
import MySql from "../pictures/mysql.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: Css,
      name: "Css",
      style: "shadow-blue-300",
    },
    {
      id: 2,
      src: Laravel,
      name: "Laravel",
      style: "shadow-red-300",
    },
    {
      id: 3,
      src: Github,
      name: "Github",
      style: "shadow-green-300",
    },
    {
      id: 4,
      src: Javascript,
      name: "Javascript",
      style: "shadow-yellow-300",
    },
    {
      id: 5,
      src: R,
      name: "REACT",
      style: "shadow-purple-200",
    },
    {
      id: 6,
      src: Python,
      name: "Python",
      style: "shadow-pink-300",
    },
    {
      id: 7,
      src: Github,
      name: "Github",
      style: "shadow-orange-300",
    },
    {
      id: 8,
      src: Php,
      name: "PHP",
      style: "shadow-indigo-300",
    },
    {
      id: 9,
      src: MySql,
      name: "MySql",
      style: "shadow-teal-300",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen p-4"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">these are the technology i've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-8">
          {techs.map(({ id, src, name, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="photo" className="w-20 mx-auto" />
              <p className="mt-4">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
