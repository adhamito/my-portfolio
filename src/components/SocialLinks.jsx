import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <span className="m-4">Linkedin</span> <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/adham-almechkor-ab238b1b7/",
    },
    {
      id: 2,
      child: (
        <>
          <span className="m-4">Github</span> <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/adhamito",
      style: "rounded-tr-md",
    },
    {
      id: 3,
      child: (
        <>
          <span className="m-4">Mail</span>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:aalmechkor2@gmail.com",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed ">
      <ul>
        {links.map(({ id, child, href }) => (
          <li
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500  "
            }
            key={id}
          >
            <a
              href={href}
              className="flex justify-end items-center w-full text-white "
              target="_blank"
            >
              <>{child}</>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
