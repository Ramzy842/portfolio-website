import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const MenuLink = ({ link, name, image, asPath, setMenuIsOpen }) => {
  const [isServer, setIsServer] = useState(true)
  const router = useRouter();
  const currentRoute = router.asPath.substring(1);
  useEffect(()=>{
    setIsServer(false)
  }, [])
  
  const styles = {
    activeContainer: "border-l-8 bg-white",
    activeChild: "menu-link-active",
    inactive: "menu-link",
  };
  

  return (
    <Link  href={link}>
      <div onClick={() => setMenuIsOpen(false)}
        
        className={`${
          (currentRoute === asPath && isServer === false) && styles.activeContainer
        } py-6 flex items-center relative  border-blue-500  `}
      >
        <div className={` opacity-0  flex ml-4 ${(currentRoute === asPath && isServer === false) && "opacity-100"}`}>
          <Image alt="icon" width={32} height={32} src={image} />
        </div> 
        <a
          className={`w-full font-bold text-2xl absolute h-full flex items-center justify-center  tracking-widest ${
            (currentRoute === asPath && isServer === false) ? styles.activeChild : styles.inactive
          }`}
        >
          {name}
        </a>
      </div>
    </Link>)
    {/* <Link href={link}>
      <div
        className={`${
          currentRoute === link && styles.activeContainer
        } py-6 flex items-center relative  border-blue-500  `}
      >
        <div className="flex ml-4">
          <Image alt="icon" width={32} height={32} src={image} />
        </div>
        <a
          className={`w-full font-bold text-2xl absolute h-full flex items-center justify-center ${
            currentRoute === link ? styles.activeChild : styles.inactive
          }  tracking-widest`}
        >
          {name}
        </a>
      </div>
    </Link> */}
  
};

export default MenuLink;
