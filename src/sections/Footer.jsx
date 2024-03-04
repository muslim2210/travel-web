import React, { useState } from "react";
import { logo } from "../assets/icons";
import { socialMedia, footerLinks } from "../constant";

const Footer = () => {
  const [toggleFooter, setToggleFooter] = useState(false);
  return (
    <footer className="max-container lg:mt-11">
      <div className="container mx-auto flex flex-col lg:flex-row gap-11">
        <div className="flex flex-col gap-7 md:gap-8 lg:w-1/2">
          {/* logo n medsos */}
          <img src={logo} alt="" width={130} height={29} />
          <p className="font-CircularStd text-slate-gray/80 opacity-70 text-[16px]">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
          <div className="flex items-center gap-5 md:gap-7">
            {socialMedia.map((item, e) => (
              <img
                key={item.e}
                src={item.src}
                alt={item.alt}
                className="cursor-pointer"
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col lg:w-1/2">
          {/* links */}
          <div className="flex flex-col md:flex-row md:justify-between md:gap-10 gap-10">
            {footerLinks.map((section) => (
              <div key={section}>
                <div className="flex justify-between items-center">
                  <h4 className="text-black font-CircularStd text-[23px] leading-normal font-medium items-center">
                    {section.title}
                  </h4>

                  <div
                    className="flex md:hidden items-center cursor-pointer border border-1 border-black rounded-full"
                    onClick={() => setToggleFooter(toggleFooter ? false : true)}
                  >
                    <svg
                      className="h-6 w-6 text-black"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  className={`mt-2 ${
                    toggleFooter ? "block" : "hidden"
                  } md:block`}
                >
                  <ul>
                    {section.links.map((link) => (
                      <div className="md:py-2">
                        <li
                          className="text-slate-500 mt-3 font-inter text-base leading-normal hover:text-slate-700"
                          key={link.name}
                        >
                          <a className="cursor-pointer">{link.name}</a>
                        </li>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
