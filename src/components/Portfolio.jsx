import React from "react";
import Nike from "../pictures/nike.jpeg";
import Sport from "../pictures/sport.jpeg";
import Bilb from "../pictures/bilb.jpeg";
import Ecommerce from "../pictures/ecommerce.jpeg";
const Portfolio = () => {
  const Porfolios = [
    {
      id: 1,
      src: Sport,
      name: "sport",
    },
    {
      id: 2,
      src: Bilb,
      name: "Bilb",
    },
    {
      id: 3,
      src: Nike,
      name: "Nike",
    },
    {
      id: 4,
      src: Ecommerce,
      name: "Ecommerce",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div
        className="
        max-w-screen-lg
        p-4
        mx-auto
        flex
        flex-col
        justify-center
        w-full
        h-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p py-6qw>check out some of my work right here </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mt-4">
          {Porfolios.map(({ id, src, name }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="photo"
                className="rounded-md duration-300 hover:scale-105 w-full"
              />
              <h1 className="text-center text-2xl text-gray-500">
                projet of {name}
              </h1>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
