import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const MenuLink = ({ link, name, image }) => {
  const router = useRouter();
  const currentRoute = router.asPath;
  const styles = {
    activeContainer: "border-l-8 bg-white",
    activeChild: "menu-link-active",
    inactive: "menu-link",
  };

  return (
    <Link href={link}>
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
    </Link>
  );
};

export default MenuLink;
