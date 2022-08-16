import React from "react";
import Image from "next/image"
import Footer from "./Footer";

const Contact = () => {
  return (
    <div className="h-screen relative " id="contact">
      <div className="mx-auto container text-white flex items-center  h-full">
        <div className="max-w-lg mx-auto text-center px-4">
          <h1 className="text-base lg:text-2xl font-medium leading-8 lg:leading-10 mb-16 ">
            I’m always open to opportunities. Or if you just want to network of
            course you can say hi :)
          </h1>
          <div className="max-w-sm mx-auto flex justify-around">
            <a href="https://www.linkedin.com/in/ramzi-chahbani-a1b70020a/" className="outline-none">
                <Image src="/assets/icons/linkedin.svg" height={45} width={45} alt="" />
            </a>
            <a href="mailto:rdev82638@gmail.com" className="outline-none">
                <Image src="/assets/icons/mail.svg" height={45} width={45} alt="" />
            </a>
            <a href="https://github.com/Ramzy842" className="outline-none">
                <Image src="/assets/icons/github.svg" height={45} width={45} alt="" />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
