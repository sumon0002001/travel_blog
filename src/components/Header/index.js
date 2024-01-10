import React from "react";
import Logo from "./Logo";
import Link from "next/link"; // Import Link from Next.js

const Header = () => {
  return (
    <header className="w-full p-4 px-10 flex items-center justify-between">
      <Logo />
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <button>heloo</button>
    </header>
  );
};

export default Header;
