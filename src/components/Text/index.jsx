import React from "react";

const sizes = {
  xs: "text-[17px] font-normal leading-[21px]",
  lg: "text-[64px] font-normal leading-[78px]",
  s: "text-2xl font-normal leading-[30px]",
  xl: "text-8xl font-normal leading-[117px]",
  md: "text-4xl font-normal leading-[44px]",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-light_green-800_d8 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
