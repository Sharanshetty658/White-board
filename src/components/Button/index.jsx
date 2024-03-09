import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[9px]",
};
const variants = {
  fill: {
    black_900: "bg-black-900 shadow-md text-lime-A100",
    lime_400: "bg-lime-400",
  },
};
const sizes = {
  sm: "h-[81px] px-[35px] text-5xl",
  xs: "h-[50px] px-1.5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "fill",
  size = "xs",
  color = "lime_400",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["sm", "xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["black_900", "lime_400"]),
};

export { Button };
