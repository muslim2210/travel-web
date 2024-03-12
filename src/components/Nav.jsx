import { useState } from "react";
import { logo } from "../assets/icons";
import { hambmenu } from "../assets/icons";
import { cross } from "../assets/icons";
import { navLinks, socialMedia } from "../constant/index";
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
    <>
      <header
        className={`padding-x fixed py-4 px-4 md:px-10 lg:px-12 z-50 w-full  ${
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
            <Button variant="bg-white text-black font-bold shadow-none">
              Log In
            </Button>
            <Button>Sign Up</Button>
          </div>
        </nav>
        {/* mobile menu */}
      </header>
      <div
        className={`bg-white fixed z-50 w-[80%] h-full md:w-[60%] top-[50px] overflow-y-auto bottom-0 py-20 pl-4
    duration-500 mt-5 shadow-xl lg:hidden ${
      toggleNavbar ? "left-0" : "left-[-100%]"
    }`}
      >
        <ul className="flex flex-col gap-4 md:gap-7">
          {navLinks.map((item) => (
            <li
              key={item.label}
              className="px-4 py-[10px] text-center mt-2 hover:text-primary"
            >
              <div className="flex items-center gap-4">
                <a href={item.href} className="text-xl md:text-2xl">
                  {item.label}
                </a>
              </div>
            </li>
          ))}
          <li className="md:hidden px-4 py-[10px] mt-8">
            <div className="max-w-[150px] flex flex-col gap-y-5">
              <Button variant="bg-white text-black font-bold">Log In</Button>
              <Button>Sign Up</Button>
            </div>
          </li>
        </ul>
        <div className="flex items-center pl-4 mt-20 md:mt-32 gap-8 md:gap-10">
          {socialMedia.map((item, e) => (
            <img
              key={item.e}
              src={item.src}
              alt={item.alt}
              className="cursor-pointer md:h-12"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Nav;
