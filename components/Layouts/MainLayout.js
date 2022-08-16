import React from "react";
import Navbar from "../Navigation/Navbar";
const MainLayout = ({ children, menuIsOpen, setMenuIsOpen }) => {
  return (
    <div className=" bg-main min-h-screen w-full">
      <Navbar menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      {children}
    </div>
  );
};

export default MainLayout;
