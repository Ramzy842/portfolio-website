import React from 'react'
import SingleLink from '../Custom/SingleLink';
import Links from "../../data/Links";
import Image from "next/image";
import Menu from './Menu';
const Navbar = ({menuIsOpen, setMenuIsOpen}) => {
  return (
    <div className='fixed top-0 right-0 left-0 backdrop-blur-md py-2 md:py-0 md:h-auto bg-white/0 z-50'>
        <div className="container mx-auto ">
          <div className=" pt-2 flex justify-end items-center  px-4 z-20">
            <ul className="hidden md:flex  justify-around items-end  text-primary w-4/5 max-w-xl z-20 mr-8 ">
              {Links.map((singleLink) => {
                const { id, name, link } = singleLink;
                return <SingleLink key={id} name={name} link={link} />;
              })}
              <a
                href="https://github.com/Ramzy842"
                className=" outline-none bg-github fixed top-0 right-0 items-center h-full p-4 flex rounded-bl-full justify-center"
              >
                <div className='flex relative bottom-1 left-1'>
                <Image
                  height={30}
                  src="/assets/icons/github.svg"
                  width={30}
                  alt="github"
                />
                </div>
                
              </a>
            </ul>
            <div className='md:hidden'>
            <Menu />
            <a
                href="https://github.com/Ramzy842"
                className=" outline-none bg-github fixed top-0 left-0 items-center h-full p-4 flex rounded-br-full justify-center"
              >
                <div className='flex relative bottom-1 right-1'>
                <Image
                  height={30}
                  src="/assets/icons/github.svg"
                  width={30}
                  alt="github"
                />
                </div>
                
              </a>
              <Image src="/assets/icons/menu.svg" height={32} width={32} alt="menu" onClick={() => setMenuIsOpen(!menuIsOpen)} />
            </div>
          </div>
          
        </div>
        
      </div>
  )
}

export default Navbar