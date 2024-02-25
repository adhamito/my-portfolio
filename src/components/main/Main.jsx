import React from "react";
import "./main.css";
const Main = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center
      w-full h-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20 ">
          Shaping my academic journey with a fervent passion for technology, I,
          Adham Almechkor, aged 23, am leveraging diverse expertise to excel in
          crafting innovative digital experiences, addressing contemporary
          challenges. As a dedicated student pursuing digital development, I am
          driven by a relentless motivation to push boundaries and create
          impactful solutions in the digital realm.
        </p>
      </div>
    </div>
  );
};

export default Main;
