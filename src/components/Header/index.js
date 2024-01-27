import React from "react";
import Logo from "./Logo";
import Link from "next/link"; // Import Link from Next.js

const Header = () => {
  return (
    <header className="w-full p-4 px-10 flex items-center justify-between">
      <Logo />
      <nav
        className="w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize items-center flex fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50
        transition-all ease duration-300"
      >
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/about" className="mr-2">
          About
        </Link>
        <Link href="/contact" className="mr-2">
          Contact
        </Link>
        <button>heloo</button>
      </nav>
      <div className=" hidden sm:flex items-center">
        <a href="" className="inline-block w-6 h-6 mr-4">
          Linkedin
        </a>
        <a href="" className="inline-block w-6 h-6 mr-4">
          Twitter
        </a>
        <a href="" className="inline-block w-6 h-6 mr-4">
          Github
        </a>
        <a href="" className="inline-block w-6 h-6 mr-4">
          Dribble
        </a>
      </div>
    </header>
  );
};

export default Header;
