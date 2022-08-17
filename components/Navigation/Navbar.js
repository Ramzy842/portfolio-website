import React, { useEffect, useRef, useState } from "react";
import SingleLink from "../Custom/SingleLink";
import Links from "../../data/Links";
import Image from "next/image";
import Menu from "./Menu";
const Navbar = ({ menuIsOpen, setMenuIsOpen }) => {
  const [navHeight, setNavHeight] = useState(null)
  const navRef = useRef(null);
  useEffect(() => {
    const navHeight = navRef.current.getBoundingClientRect().height;
    setNavHeight(navHeight)
  }, [])
  return (
    <div ref={navRef} className="fixed top-0 right-0 left-0 backdrop-blur-md py-2 md:py-0 md:h-auto bg-white/0 z-50">
      <div className="container mx-auto ">
        <div className=" pt-2 flex justify-end items-center md:justify-center lg:justify-end px-4 z-20">
          <ul className="hidden md:flex justify-around  lg:justify-around items-end w-full text-primary lg:w-1/3 max-w-xl z-20  lg:mr-12 ">
            {Links.map((singleLink) => {
              const { id, name, link } = singleLink;
              return <SingleLink key={id} name={name} link={link} />;
            })}
            <a
              href="https://github.com/Ramzy842"
              className=" outline-none bg-github fixed top-0 right-0 items-center h-full p-4 flex rounded-bl-full justify-center"
            >
              <div className="flex relative bottom-1 left-1">
                <Image
                  height={30}
                  src="/assets/icons/github.svg"
                  width={30}
                  alt="github"
                />
              </div>
            </a>
          </ul>
          <div className="md:hidden">
            {menuIsOpen && <Menu navHeight={navHeight} setMenuIsOpen={setMenuIsOpen} />}
            <a
              href="https://github.com/Ramzy842"
              className=" outline-none bg-github fixed top-0 left-0 items-center h-full p-4 flex rounded-br-full justify-center"
            >
              <div className="flex relative bottom-1 right-1">
                <Image
                  height={32}
                  src="/assets/icons/github.svg"
                  width={32}
                  alt="github"
                />
              </div>
            </a>
            {menuIsOpen ? (
              <Image
                src="/assets/icons/x.svg"
                height={32}
                width={32}
                alt="menu"
                onClick={() => setMenuIsOpen(false)}
              />
            ) : (
              <Image
                src="/assets/icons/menu.svg"
                height={32}
                width={32}
                alt="menu"
                onClick={() => setMenuIsOpen(true)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
