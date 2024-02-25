import React from "react";
import p from "../../pictures/199306417_2993102590957695_2129651544257955142_n.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Hero = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have delved into the realms of full-stack development, seamlessly
            weaving together front-end aesthetics and back-end functionalities.
            With each project, I have not only mastered the art of crafting
            intuitive user experiences but also delved deep into the backend
            infrastructure, optimizing performance and scalability. This dynamic
            fusion of creativity and technical acumen has not only fueled my
            professional growth but also instilled in me a profound appreciation
            for the boundless possibilities of software engineering.
          </p>
          <div>
            <button className="group  text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className=" group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={20} className="ml-2" />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            src={p}
            alt="pic"
            className="rounded-2xl mx-auto  md:w-fullk w-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
