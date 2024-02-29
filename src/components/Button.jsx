import React from "react";

const Button = (props) => {
  const { children, variant = "bg-primary hover:bg-[#5D50C6]/70 text-white" } =
    props;
  return (
    <button
      className={`font-inter py-[16px] px-[32px] ${variant} rounded-full`}
    >
      {children}
    </button>
  );
};

export default Button;
