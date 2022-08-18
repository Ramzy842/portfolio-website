import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const SingleLink = ({ name, link, asPath }) => {
  const router = useRouter();
  const currentRoute = router.asPath.substring(1);
  return (
    <Link href={link}>
      <a
        className={`border-b border-primary/0 hover:border-primary/100 transition font-medium py-2 pr-4 outline-none z-20 tracking-widest ${currentRoute === asPath && 'border-primary/100'}`}
      >
        {name}
      </a>
    </Link>
  );
};

export default SingleLink;
