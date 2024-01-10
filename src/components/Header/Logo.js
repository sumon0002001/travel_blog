import React from "react";
import Link from "next/link";
import Image from "next/image";
import profileImg from "@/public/profile-img.png";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
      <div className=" w-12 md:w-16 rounded-full overflow-hidden border border-solid border-dark dark:border-gray  mr-2 md:mr-4">
        <Image
          src={profileImg}
          alt="travel-blog"
          className="w-full h-auto rounded-full"
          sizes="20vw"
          priority
        />
      </div>
      <span className="font-bold text-xl ">Sumon's Travel Blog</span>
    </Link>
  );
};

export default Logo;
