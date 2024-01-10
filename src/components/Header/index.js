import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="w-full p-4 px-10 flex items-center justify-between">
      <Logo />
      <button>heloo</button>
    </header>
  );
};

export default Header;
