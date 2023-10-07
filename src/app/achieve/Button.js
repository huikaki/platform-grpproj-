import React from "react";
import clsx from "clsx";

const Button = ({}) => {
  const buttonClasses = clsx(
    "px-4 py-2 rounded",

    "sm:bg-red-500 lg:bg-green-500"
  );

  return <button className={buttonClasses}>1</button>;
};

export default Button;
