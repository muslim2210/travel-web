import { useState } from "react";
import { logo } from "../assets/icons";
import { hambmenu } from "../assets/icons";
import { cross } from "../assets/icons";
import { navLinks } from "../constant/index";
import Button from "./Button";

const Nav = ({ imgURL }) => {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const [navbar, setNavbar] = useState(false);

  // change background navbar logic
  const changeBackgorundNavbar = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackgorundNavbar);

  return (
    <header
      className={`padding-x py-9 px-4 md:px-10 lg:px-12 fixed z-50 w-full  ${
        navbar ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center max-container">
        <div className="md:order-2 lg:order-none">
          <a href="/">
            <img src={logo} alt="Logo" width={130} height={29} />
          </a>
        </div>
        <div className="hidden lg:block font-medium order-2">
          <ul className="flex-1 flex justify-center items-center gap-14">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-inter leading-normal text-lg text-slate-gray"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setToggleNavbar(toggleNavbar ? false : true)}
          className="cursor-pointer md:order-1 lg:hidden"
        >
          <img
            src={toggleNavbar ? cross : hambmenu}
            alt="Hamburger"
            width={40}
            height={40}
          />
        </div>
        <div className="hidden md:block font-medium order-3">
          <Button variant="bg-white text-black font-bold">Log In</Button>
          <Button>Sign Up</Button>
        </div>
      </nav>
      <div
        className={`mt-5 bg-white lg:hidden ${
          toggleNavbar ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-4 ">
          {navLinks.map((item) => (
            <li
              key={item.label}
              className="px-4 py-[10px] text-center mt-2 hover:bg-black hover:bg-opacity-10 hover:text-primary"
            >
              <div className="flex items-center justify-center gap-4">
                <img src={item.imgURL} alt="" width={25} height={25} />
                <a href={item.href} className="">
                  {item.label}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Nav;
