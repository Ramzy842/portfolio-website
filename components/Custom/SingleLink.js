import React from "react";
import Link from "next/link";
const SingleLink = ({ name, link }) => {
  return (
    <Link href={link}>
      <a className="border-b border-primary/0 hover:border-primary/100 transition font-medium py-2 pr-4 outline-none z-20 tracking-widest">
        {name}
      </a>
    </Link>
  );
};

export default SingleLink;
